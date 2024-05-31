export type DataProps = {
    site: {
        siteMetadata: {
            title: string,
            description: string,
            websiteUrl: string,
            blogUrl: string,
            careersUrl: string,
            githubUrl: string,
            xUrl: string,
            youtubeUrl: string,
            joinUsUrl: string,
            generatedAt: Date,
        }
    }
}

/*
- name
- full_name
- private
- owner.login
- owner.avatar_url
- owner.html_url
- html_url
- description
- fork
- created_at
- updated_at
- pushed_at
- homepage
- size // in KB
- stargazers_count
- watchers_count
- forks_count
- language
- mirror_url
- archived
- disabled
- open_issues_count
- license.key
- license.name
- allow_forking
- is_template
- topics
- visibility
- forks
- open_issues
- watchers
- default_branch

{
    "id": 78356810,
    "node_id": "MDEwOlJlcG9zaXRvcnk3ODM1NjgxMA==",
    "name": "ILGPU",
    "full_name": "m4rs-mt/ILGPU",
    "private": false,
    "owner": {
      "login": "m4rs-mt",
      "id": 23275995,
      "node_id": "MDQ6VXNlcjIzMjc1OTk1",
      "avatar_url": "https://avatars.githubusercontent.com/u/23275995?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/m4rs-mt",
      "html_url": "https://github.com/m4rs-mt",
      "followers_url": "https://api.github.com/users/m4rs-mt/followers",
      "following_url": "https://api.github.com/users/m4rs-mt/following{/other_user}",
      "gists_url": "https://api.github.com/users/m4rs-mt/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/m4rs-mt/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/m4rs-mt/subscriptions",
      "organizations_url": "https://api.github.com/users/m4rs-mt/orgs",
      "repos_url": "https://api.github.com/users/m4rs-mt/repos",
      "events_url": "https://api.github.com/users/m4rs-mt/events{/privacy}",
      "received_events_url": "https://api.github.com/users/m4rs-mt/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/m4rs-mt/ILGPU",
    "description": "ILGPU JIT Compiler for high-performance .Net GPU programs",
    "fork": false,
    "url": "https://api.github.com/repos/m4rs-mt/ILGPU",
    "forks_url": "https://api.github.com/repos/m4rs-mt/ILGPU/forks",
    "keys_url": "https://api.github.com/repos/m4rs-mt/ILGPU/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/m4rs-mt/ILGPU/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/m4rs-mt/ILGPU/teams",
    "hooks_url": "https://api.github.com/repos/m4rs-mt/ILGPU/hooks",
    "issue_events_url": "https://api.github.com/repos/m4rs-mt/ILGPU/issues/events{/number}",
    "events_url": "https://api.github.com/repos/m4rs-mt/ILGPU/events",
    "assignees_url": "https://api.github.com/repos/m4rs-mt/ILGPU/assignees{/user}",
    "branches_url": "https://api.github.com/repos/m4rs-mt/ILGPU/branches{/branch}",
    "tags_url": "https://api.github.com/repos/m4rs-mt/ILGPU/tags",
    "blobs_url": "https://api.github.com/repos/m4rs-mt/ILGPU/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/m4rs-mt/ILGPU/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/m4rs-mt/ILGPU/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/m4rs-mt/ILGPU/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/m4rs-mt/ILGPU/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/m4rs-mt/ILGPU/languages",
    "stargazers_url": "https://api.github.com/repos/m4rs-mt/ILGPU/stargazers",
    "contributors_url": "https://api.github.com/repos/m4rs-mt/ILGPU/contributors",
    "subscribers_url": "https://api.github.com/repos/m4rs-mt/ILGPU/subscribers",
    "subscription_url": "https://api.github.com/repos/m4rs-mt/ILGPU/subscription",
    "commits_url": "https://api.github.com/repos/m4rs-mt/ILGPU/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/m4rs-mt/ILGPU/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/m4rs-mt/ILGPU/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/m4rs-mt/ILGPU/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/m4rs-mt/ILGPU/contents/{+path}",
    "compare_url": "https://api.github.com/repos/m4rs-mt/ILGPU/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/m4rs-mt/ILGPU/merges",
    "archive_url": "https://api.github.com/repos/m4rs-mt/ILGPU/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/m4rs-mt/ILGPU/downloads",
    "issues_url": "https://api.github.com/repos/m4rs-mt/ILGPU/issues{/number}",
    "pulls_url": "https://api.github.com/repos/m4rs-mt/ILGPU/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/m4rs-mt/ILGPU/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/m4rs-mt/ILGPU/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/m4rs-mt/ILGPU/labels{/name}",
    "releases_url": "https://api.github.com/repos/m4rs-mt/ILGPU/releases{/id}",
    "deployments_url": "https://api.github.com/repos/m4rs-mt/ILGPU/deployments",
    "created_at": "2017-01-08T16:49:11Z",
    "updated_at": "2024-04-28T13:28:09Z",
    "pushed_at": "2024-04-28T18:30:49Z",
    "git_url": "git://github.com/m4rs-mt/ILGPU.git",
    "ssh_url": "git@github.com:m4rs-mt/ILGPU.git",
    "clone_url": "https://github.com/m4rs-mt/ILGPU.git",
    "svn_url": "https://github.com/m4rs-mt/ILGPU",
    "homepage": "http://www.ilgpu.net",
    "size": 11393,
    "stargazers_count": 1062,
    "watchers_count": 1062,
    "language": "C#",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "has_discussions": false,
    "forks_count": 108,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 37,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [
      "amd",
      "cil",
      "compiler",
      "cpu",
      "cuda",
      "dotnet",
      "gpgpu",
      "gpgpu-computing",
      "gpu",
      "ilgpu",
      "intel",
      "jit",
      "kernels",
      "msil",
      "nvidia",
      "opencl",
      "parallel",
      "ptx"
    ],
    "visibility": "public",
    "forks": 108,
    "open_issues": 37,
    "watchers": 1062,
    "default_branch": "master"
  },
 */
export type Project = {
    name: string,
    full_name: string,
    // private: boolean,
    owner: {
        login: string,
        avatar_url: string,
        html_url: string,
    },
    // owner_login: string,
    // owner_avatar_url: string,
    // owner_html_url: string,
    html_url: string,
    description: string,
    fork: boolean,
    created_at: Date,
    updated_at: Date,
    // pushed_at: Date,
    homepage: string,
    size: number,
    stargazers_count: number,
    watchers_count: number,
    forks_count: number,
    // language: string,
    languages: string[],
    mirror_url?: string,
    archived: boolean,
    disabled: boolean,
    open_issues_count: number,
    license: {
        key: string,
        name: string,
    },
    // license_key: string,
    // license_name: string,
    allow_forking: boolean,
    is_template: boolean,
    topics: string[],
    // visibility: string,
    // forks: number,
    // open_issues: number,
    // watchers: number,
    default_branch: string,
}
