"""
Collect repositories from GitHub and save them to a JSON file in the 'static/data' directory.
"""

import typing as t
import pydantic as pd
from loguru import logger
import datetime as dt
import re
from pathlib import Path
from github import Repository as GhRepository, Github, Auth, UnknownObjectException, GithubException
import fire

PROJECT_DIR = Path(__file__).resolve().parent.parent
logger.debug(f"PROJECT_DIR: {PROJECT_DIR}")
STATIC_DIR = PROJECT_DIR / "static"
OUTPUT_DIR = PROJECT_DIR / "static" / "data"


class Repository(pd.BaseModel):
    # Swagger UI: https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/ghes-3.9/ghes-3.9.json
    # info
    id: str  # full_name lowercase
    name: str
    full_name: str
    avatar_url: t.Optional[t.Union[str, pd.HttpUrl]]  # hosted_logo
    description: t.Optional[str]
    topics: t.List[str]
    # owner
    owner_id: str  # username lowercase
    owner_name: str  # username
    owner_avatar_url: pd.HttpUrl
    owner_url: pd.HttpUrl
    # stats
    stargazers_count: int
    forks_count: int
    open_issues_count: int
    watchers_count: int
    size: int
    # urls
    url: pd.HttpUrl
    website_url: t.Optional[pd.HttpUrl]
    discord_url: t.Optional[pd.HttpUrl]
    slack_url: t.Optional[pd.HttpUrl]
    # timestamps
    created_at: t.Optional[dt.datetime]  # iso datetime example: 2011-01-26T19:14:43Z
    updated_at: t.Optional[dt.datetime]  # iso datetime
    pushed_at: t.Optional[dt.datetime]  # iso datetime
    # flags
    private: bool
    fork: bool
    archived: bool
    disabled: bool
    allow_forking: bool
    is_template: bool
    # languages
    main_language: t.Optional[str]
    languages: dict[str, int]
    # license
    license_key: t.Optional[str]
    license_name: t.Optional[str]
    # other
    default_branch: str
    visibility: t.Union[t.Literal["public", "private", "internal"], str]


def should_be_included(repo_id: str, owner_id: str, include: set[str], exclude: set[str]) -> bool:
    """Decide whether to keep or not a repository based on the include and exclude lists."""
    if repo_id in exclude:
        return False
    if repo_id in include:
        return True
    if owner_id in exclude:
        return False
    if owner_id in include:
        return True
    return not include and not exclude  # default


def get_readme_text(gh_repo: GhRepository) -> t.Optional[str]:
    try:
        readme = gh_repo.get_readme()
        if readme:
            return readme.decoded_content.decode()
    except (UnknownObjectException, GithubException) as e:
        logger.warning(f"no readme found for '{gh_repo.full_name}': {e}")


def get_current_user(g: Github) -> t.Optional[str]:
    try:
        current_user = g.get_user()
        return current_user.login
    except (UnknownObjectException, GithubException) as e:
        logger.warning(f"no current user found: {e}")


def extract_url(text: str, matcher: t.Callable[[str], bool]) -> t.Optional[str]:
    """Extract first matching url."""

    def extract_all_urls(plain_text: str) -> list[str]:
        """Extract all http(s) URLs from the given text."""
        regex = r'(https?:\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|])'
        return re.findall(regex, plain_text)

    urls = extract_all_urls(text)
    for url in urls:
        if matcher(url):
            return url


def collect_repositories(
        users: list[str], *,
        include: list[str] = None, exclude: list[str] = None,
        access_token: str = None,
        fetch_languages: bool = False, fetch_readme: bool = False,
        limit: int = None,
) -> list[Repository]:
    """Collect repositories from the given users and filter them based on the include and exclude lists."""
    # validate inputs
    assert users, "users should not be empty"
    include = set(map(lambda x: x.lower(), include or []))
    exclude = set(map(lambda x: x.lower(), exclude or []))
    assert not set(include) & set(exclude), "include and exclude should not have common elements"
    assert limit is None or limit > 0, "limit should be None or a positive integer"
    # collect data
    all_repos: list[Repository] = []
    g = Github(
        auth=Auth.Token(access_token) if access_token else None,
        per_page=100,
    )
    current_user = get_current_user(g)
    if current_user:
        logger.success(f"authenticated as '{current_user}'")
    else:
        logger.warning("not authenticated!")
    for user_id in users:
        if limit is not None and len(all_repos) >= limit:
            break
        gh_repos = g.get_user(user_id).get_repos(type='all', sort='updated', direction='desc')
        # gh_repos = g.search_repositories(query=f"user:{user_id}", sort="stars", order="desc")
        for gh_repo in gh_repos:
            if limit is not None and len(all_repos) >= limit:
                break
            repo_id = gh_repo.full_name.lower()
            owner_id = gh_repo.owner.login.lower()
            if not should_be_included(repo_id, owner_id, include, exclude):
                logger.debug(f"skipping '{repo_id}' from '{owner_id}'")
                continue
            logger.debug(f"collecting '{repo_id}' from '{owner_id}'")
            avatar_relative_path = f"hosted_logos/{repo_id}.svg"
            discord_url = None
            slack_url = None
            if fetch_readme:
                readme_text = get_readme_text(gh_repo)
                if readme_text:
                    discord_url = extract_url(
                        readme_text,
                        lambda url: any(
                            sub in url for sub in
                            ['discord.gg', 'discord.io', 'discord.me', 'discord.li', 'discord.com/invite',
                             'discordapp.com/invite']
                        )
                    )
                    slack_url = extract_url(
                        readme_text,
                        lambda url: "slack.com" in url and any(
                            sub in url for sub in ['join.', 'archives', 'shared_invite/', 'messages/'])
                    )
            all_repos.append(
                Repository(
                    id=repo_id,
                    name=gh_repo.name,
                    full_name=gh_repo.full_name,
                    avatar_url=f"/{avatar_relative_path}" if (STATIC_DIR / avatar_relative_path).exists() else None,
                    description=gh_repo.description,
                    topics=gh_repo.topics,
                    owner_id=owner_id,
                    owner_name=gh_repo.owner.login,
                    owner_avatar_url=gh_repo.owner.avatar_url,
                    owner_url=gh_repo.owner.html_url,
                    stargazers_count=gh_repo.stargazers_count,
                    forks_count=gh_repo.forks_count,
                    open_issues_count=gh_repo.open_issues_count,
                    watchers_count=gh_repo.watchers_count,
                    size=gh_repo.size,
                    url=gh_repo.html_url,
                    website_url=gh_repo.homepage or None,
                    discord_url=discord_url,
                    slack_url=slack_url,
                    created_at=gh_repo.created_at,
                    updated_at=gh_repo.updated_at,
                    pushed_at=gh_repo.pushed_at,
                    private=gh_repo.private,
                    fork=gh_repo.fork,
                    archived=gh_repo.archived,
                    disabled=gh_repo.archived,
                    allow_forking=gh_repo.allow_forking,
                    is_template=gh_repo.is_template,
                    main_language=gh_repo.language,
                    languages=gh_repo.get_languages() if fetch_languages else {},
                    license_key=gh_repo.license.key if gh_repo.license else None,
                    license_name=gh_repo.license.name if gh_repo.license else None,
                    default_branch=gh_repo.default_branch,
                    visibility=gh_repo.visibility,
                ))
    g.close()
    all_repos = list({rp.id: rp for rp in all_repos}.values())  # remove duplicates
    all_repos.sort(key=lambda rp: gh_repo.id)  # sort by id
    return all_repos


class RepositoriesData(pd.BaseModel):
    at: dt.datetime
    count: int
    data: list[Repository]


def main(access_token: t.Optional[str] = None):
    repos = collect_repositories(
        users=["m4rs-mt", "armadaproject", "G-Research"],
        include=["m4rs-mt/ILGPU", "armadaproject/armada", "G-Research"],
        exclude=["m4rs-mt", "armadaproject"],
        access_token=access_token,
        fetch_languages=True,
        fetch_readme=True,
        limit=None,
    )
    logger.info(f"collected {len(repos)} repositories")
    rdata = RepositoriesData(at=dt.datetime.now(dt.timezone.utc), count=len(repos), data=repos)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)  # create output directory if not exists
    output_path = OUTPUT_DIR / f"repositories.json"
    output_path.write_text(rdata.model_dump_json(indent=2))  # write to file
    logger.success(f"saved to '{output_path}'!")


if __name__ == '__main__':
    fire.Fire(main)
