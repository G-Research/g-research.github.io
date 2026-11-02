export type Repository = {
    // info
    id: string,  // full_name lowercase
    name: string,
    full_name: string,
    avatar_url: string | null,  // root-relative hosted logo, null when there is none
    description: string | null,
    topics: string[],
    // owner
    owner_id: string,  // username lowercase
    owner_name: string,  // username
    owner_avatar_url: string,
    owner_url: string,
    // stats
    stargazers_count: number,
    forks_count: number,
    open_issues_count: number,
    watchers_count: number,
    size: number,
    // urls
    url: string,
    website_url: string | null,
    discord_url: string | null,
    slack_url: string | null,
    // timestamps — load_repositories() turns the ISO strings into Dates, so
    // this describes the loaded shape rather than the raw JSON
    created_at: Date | null,
    updated_at: Date | null,
    pushed_at: Date | null,
    // flags
    private: boolean,
    fork: boolean,
    archived: boolean,
    disabled: boolean,
    allow_forking: boolean,
    is_template: boolean,
    // languages
    main_language: string | null,
    languages: Record<string, number>,
    // license
    license_key: string | null,
    license_name: string | null,
    // other
    default_branch: string,
    visibility: "public" | "private" | "internal",
}