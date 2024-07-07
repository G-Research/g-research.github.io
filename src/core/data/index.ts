import type {Repository} from "@core/types";
import RAW_REPOSITORIES from "../../../static/data/repositories.json";
import CUSTOM_VALUES from "../../../static/data/custom_values.json";

function get_languages(repo: Repository): string[] {
    const results = Object.keys(repo.languages);
    if (repo.main_language && !(repo.main_language in repo.languages)) {
        results.unshift(repo.main_language);
    }
    return results;
}


function parse_datetime(dt?: string | null): Date | null {
    return dt ? new Date(dt) : null;
}

function get_time(dt?: Date | string | null): number {
    if (!dt) return 0;
    return new Date(dt).getTime();
}


export function filter_repositories(
    repositories: Repository[],
    search: string,
    sortBy: string | null,
    isActive: boolean,
    isArchived: boolean,
    isFork: boolean,
    languages: string[],
    topics: string[],
): Repository[] {
    let results = repositories;
    if (search) { // filter by full_name
        results = results.filter((repo) => repo.full_name.toLowerCase().includes(search.toLowerCase()));
    }
    // sort by
    if (sortBy === "Stars") {
        results = results.toSorted((a, b) => b.stargazers_count - a.stargazers_count);
    }
    if (sortBy === "Last Updated") {
        results = results.toSorted((a, b) => get_time(b.updated_at) - get_time(a.updated_at));
    }
    if (sortBy === "Name") {
        results = results.toSorted((a, b) => a.name.localeCompare(b.name));
    }
    // status
    results = results.filter((repo) => {
        const repoIsActive = !repo.private && !repo.disabled && !repo.archived && !repo.fork;
        const repoIsArchived = repo.archived;
        const repoIsFork = repo.fork;
        return (isActive && repoIsActive) || (isArchived && repoIsArchived) || (isFork && repoIsFork);
    });
    // languages includes any of the selected languages
    results = results.filter((repo) => !languages?.length || get_languages(repo).some((language) => languages.includes(language)));
    // topics includes any of the selected topics
    results = results.filter((repo) => !topics?.length || repo.topics.some((topic) => topics.includes(topic)));
    // return results
    return results;
}

export function get_featured_projects(
    repositories: Repository[],
    featured: string[],
): Repository[] {
    const featured_ids = featured.map((full_name) => full_name.toLowerCase());
    const results = [];
    for (const featured_id of featured_ids) {
        const repo = repositories.find((repo) => repo.id === featured_id);
        if (repo) {
            results.push(repo);
        }
    }
    return results;
}


export function load_repositories(raw_repositories: Record<string, any>[] = RAW_REPOSITORIES, custom_values: Record<string, Record<string, string | number | boolean | null>> = CUSTOM_VALUES) {
    // override project metadata with custom values
    const fixed_custom_values = Object.fromEntries( // convert all keys to lowercase
        Object.entries(custom_values || {}).map(([key, value]) => [key.toLowerCase(), value])
    );
    return raw_repositories.map(
        (repo: any) => {
            return {
                ...repo,
                created_at: parse_datetime(repo.created_at),
                updated_at: parse_datetime(repo.updated_at),
                pushed_at: parse_datetime(repo.pushed_at),
                ...(fixed_custom_values[repo.id] || {}),
            } as Repository;
        }
    );
}


export function get_language_options(repositories: Repository[]): string[] {
    const counts = repositories.flatMap((repo) => get_languages(repo)).reduce((acc, lang) => {
        acc[lang] = (acc[lang] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
    return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
}

export function get_topic_options(repositories: Repository[]): string[] {
    const counts = repositories.flatMap((repo) => repo.topics).reduce((acc, topic) => {
        acc[topic] = (acc[topic] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
    return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
}


export const SORT_BY_OPTIONS: string[] = [
    "Last Updated",
    "Name",
    "Stars",
]
