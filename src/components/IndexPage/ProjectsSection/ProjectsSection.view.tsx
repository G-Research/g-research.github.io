import * as React from "react"
import {useState, useEffect} from 'react'
import {
    Grid,
    Fieldset,
    Stack,
    MultiSelect,
    Select,
    Checkbox,
    TextInput,
    Text,
    rem,
    SimpleGrid,
    Tooltip,
} from '@mantine/core'
import {IconSearch} from '@tabler/icons-react'
import type {Repository} from "@core/types";
import {ProjectCard} from '@components/Project';
import {dayjs} from '@core/dates';
import {filter_repositories} from '@core/data';


type Props = {
    collected_at: Date;
    all_repos: Repository[];
    language_options: string[];
    topic_options: string[];
    sort_by_options: string[];
}

export default function ProjectsSectionView(
    {collected_at, all_repos, language_options, topic_options, sort_by_options}: Props): React.JSX.Element {
    const [languages, setLanguages] = useState<string[]>([]);
    const [topics, setTopics] = useState<string[]>([]);
    const [isActive, setIsActive] = useState<boolean>(true);
    const [isArchived, setIsArchived] = useState<boolean>(false);
    const [isFork, setIsFork] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [sortBy, setSortBy] = useState<string | null>(sort_by_options[sort_by_options.length - 1]);
    const [repos, setRepos] = useState(() => filter_repositories(all_repos, search, sortBy, isActive, isArchived, isFork, languages, topics));

    useEffect(() => {
        setRepos(filter_repositories(all_repos, search, sortBy, isActive, isArchived, isFork, languages, topics));
    }, [search, sortBy, isActive, isArchived, isFork, languages, topics]);

    return <>
        <Grid>
            <Grid.Col span={{
                base: 12,
                sm: 4,
            }}>
                <Fieldset legend="Filter By">
                    <Stack gap="lg" align="stretch" justify="center">
                        <Fieldset legend="Status">
                            <Stack gap="sm" align="stretch" justify="center">
                                <Checkbox
                                    size="md"
                                    checked={isActive}
                                    onChange={(event) => setIsActive(event.currentTarget.checked)}
                                    label="Active"
                                />
                                <Checkbox
                                    size="md"
                                    checked={isArchived}
                                    onChange={(event) => setIsArchived(event.currentTarget.checked)}
                                    label="Archived"
                                />
                                <Checkbox
                                    size="md"
                                    checked={isFork}
                                    onChange={(event) => setIsFork(event.currentTarget.checked)}
                                    label="Forks"
                                />
                            </Stack>
                        </Fieldset>

                        <MultiSelect
                            size="md"
                            label="Languages"
                            placeholder="Languages"
                            data={language_options}
                            value={languages}
                            onChange={setLanguages}
                            clearable
                            searchable
                            checkIconPosition="right"
                            hidePickedOptions
                        />

                        <MultiSelect
                            size="md"
                            label="Topics"
                            placeholder="Topics"
                            data={topic_options}
                            value={topics}
                            onChange={setTopics}
                            clearable
                            searchable
                            checkIconPosition="right"
                            hidePickedOptions
                        />
                    </Stack>
                </Fieldset>
            </Grid.Col>
            <Grid.Col span={{
                base: 12,
                sm: 8,
            }}>
                <Grid gutter="xs" justify="stretch" align="flex-end">
                    <Grid.Col span={8}>
                        <TextInput
                            size="md"
                            label="Search"
                            placeholder="Find a project..."
                            leftSection={<IconSearch style={{width: rem(16), height: rem(16)}} stroke={1.5}/>}
                            value={search}
                            onChange={(event) => setSearch(event.currentTarget.value)}
                        />
                    </Grid.Col>

                    <Grid.Col span='auto'>
                        <Select
                            size="md"
                            label="Sort by"
                            placeholder="Sort by"
                            data={sort_by_options}
                            allowDeselect={false}
                            value={sortBy}
                            onChange={setSortBy}
                        />
                    </Grid.Col>
                </Grid>
                <Tooltip position="bottom-start"
                         label={`Data collected ${dayjs(collected_at).fromNow()} (${dayjs(collected_at).format("lll")})`}>
                    <Text ta="left" fz="sm" c="dimmed" mt="xs">
                        {repos.length} project{repos.length !== 1 ? 's' : ''} found
                    </Text>
                </Tooltip>
                <SimpleGrid cols={{
                    base: 1,
                    sm: 2,
                }} spacing="lg" verticalSpacing="lg" mt="lg">
                    {repos.map((repo, ind) => <ProjectCard repo={repo} key={ind}/>)}
                </SimpleGrid>
            </Grid.Col>
        </Grid>
    </>
}
