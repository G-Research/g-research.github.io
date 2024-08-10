export type DataProps = {
    site: {
        siteMetadata: {
            // metadata
            title: string,
            description: string,
            siteUrl: string,
            repositoryUrl: string,
            builtAt: Date,
            // social links
            githubUrl: string,
            xUrl: string,
            youtubeUrl: string,
            // footer links
            joinUsUrl: string,
            websiteUrl: string,
            blogUrl: string,
            careersUrl: string,
            // featured projects
            featured: string[],
        }
    }
}


export type Repository = {
    // info
    id: string,  // full_name lowercase
    name: string,
    full_name: string,
    avatar_url?: string | URL,  // hosted_logo
    description?: string,
    topics: string[],
    // owner
    owner_id: string,  // username lowercase
    owner_name: string,  // username
    owner_avatar_url: URL,
    owner_url: URL,
    // stats
    stargazers_count: number,
    forks_count: number,
    open_issues_count: number,
    watchers_count: number,
    size: number,
    // urls
    url: URL,
    website_url?: URL,
    discord_url?: URL,
    slack_url?: URL,
    // timestamps
    created_at?: string | Date,  // iso datetime example: 2011-01-26T19:14:43Z
    updated_at?: string | Date,  // iso datetime
    pushed_at?: string | Date,  // iso datetime
    // flags
    private: boolean,
    fork: boolean,
    archived: boolean,
    disabled: boolean,
    allow_forking: boolean,
    is_template: boolean,
    // languages
    main_language?: string,
    languages: Record<string, number>,
    // license
    license_key?: string,
    license_name?: string,
    // other
    default_branch: string,
    visibility?: "public" | "private" | "internal",
}
