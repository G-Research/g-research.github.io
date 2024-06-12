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


export type Project = {
    name: string,
    full_name: string,
    private: boolean,
    owner: {
        login: string,
        avatar_url: string,
        html_url: string,
    },
    html_url: string,
    description: string,
    fork: boolean,
    created_at: Date,
    updated_at: Date,
    pushed_at: Date,
    homepage: string,
    size: number,
    stargazers_count: number,
    watchers_count: number,
    forks_count: number,
    language: string,
    mirror_url?: string,
    archived: boolean,
    disabled: boolean,
    open_issues_count: number,
    license: {
        key: string,
        name: string,
    },
    allow_forking: boolean,
    is_template: boolean,
    topics: string[],
    visibility: string,
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string,
    hosted_logo?: string,
    featured?: boolean,
    discord_url?: string,
    slack_url?: string,
}
