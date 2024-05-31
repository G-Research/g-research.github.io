import type {Project} from "@core/types";


function getTime(dt: Date | string | null): number {
    if (!dt) return 0;
    return new Date(dt).getTime();
}

export function filter_projects(
    projects: Project[],
    search: string,
    sortBy: string | null,
    isArchived: boolean,
    isActive: boolean,
    topics: string[],
    languages: string[],
): Project[] {
    let results = projects;
    if (search) { // filter by full_name
        results = results.filter((project) => project.full_name.toLowerCase().includes(search.toLowerCase()));
    }
    // sort by
    if (sortBy === "Stars") {
        results = results.sort((a, b) => b.stargazers_count - a.stargazers_count);
    }
    if (sortBy === "Last Updated") {
        results = results.sort((a, b) => getTime(b.updated_at) - getTime(a.updated_at));
    }
    if (sortBy === "Name") {
        results = results.sort((a, b) => a.name.localeCompare(b.name));
    }
    // isArchived && isActive
    results = results.filter((project) => (isArchived ? (project.archived || isActive) : (!project.archived && isActive)));
    // topics includes any of the selected topics
    results = results.filter((project) => !topics?.length || project.topics.some((topic) => topics.includes(topic)));
    // language is any of the selected languages
    results = results.filter((project) => !languages?.length || languages.includes(project.language));
    // return results
    return results;
}