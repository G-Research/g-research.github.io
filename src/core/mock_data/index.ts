import type {Project} from "@core/types";
import repos from "../../../content/org__repos.json";


export const REPOS: Project[] = repos as unknown as Project[];


export const LANGUAGE_OPTIONS: string[] = Array.from(new Set(repos.map((repo) => repo.language).filter(language => Boolean(language)) as string[]));


export const TOPIC_OPTIONS: string[] = Array.from(new Set(repos.flatMap((repo) => repo.topics)));


export const SORT_BY_OPTIONS: string[] = [
    "Last Updated",
    "Name",
    "Stars",
]
