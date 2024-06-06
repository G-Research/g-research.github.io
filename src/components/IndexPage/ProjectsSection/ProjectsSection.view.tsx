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
    rem,
    SimpleGrid,
} from '@mantine/core'
import {IconSearch} from '@tabler/icons-react'
import {REPOS, TOPIC_OPTIONS, LANGUAGE_OPTIONS, SORT_BY_OPTIONS} from "@core/mock_data";
import {ProjectCard} from '@components/Project';
import {filter_projects} from './ProjectsSection.utils';


export default function ProjectsSectionView(): React.JSX.Element {
    const [languages, setLanguages] = useState<string[]>([]);
    const [topics, setTopics] = useState<string[]>([]);
    const [isActive, setIsActive] = useState<boolean>(true);
    const [isArchived, setIsArchived] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [sortBy, setSortBy] = useState<string | null>(SORT_BY_OPTIONS[2]);
    const [repos, setRepos] = useState(() => filter_projects(REPOS, search, sortBy, isArchived, isActive, topics, languages));

    useEffect(() => {
        setRepos(filter_projects(REPOS, search, sortBy, isArchived, isActive, topics, languages));
    }, [search, sortBy, isArchived, isActive, topics, languages]);

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
                            </Stack>
                        </Fieldset>

                        <MultiSelect
                            size="md"
                            label="Languages"
                            placeholder="Languages"
                            data={LANGUAGE_OPTIONS}
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
                            data={TOPIC_OPTIONS}
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
                            data={SORT_BY_OPTIONS}
                            allowDeselect={false}
                            value={sortBy}
                            onChange={setSortBy}
                        />
                    </Grid.Col>
                </Grid>
                <SimpleGrid cols={{
                    base: 1,
                    sm: 2,
                }} spacing="lg" verticalSpacing="lg" mt="lg">
                    {repos.map((repo) => <ProjectCard repo={repo}/>)}
                </SimpleGrid>
            </Grid.Col>
        </Grid>
    </>
}
