import {useMemo, useState} from 'react'
import {
    Checkbox,
    Fieldset,
    Grid,
    MultiSelect,
    Select,
    SimpleGrid,
    Stack,
    Text,
    TextInput,
} from '@mantine/core'
import {IconSearch} from '@tabler/icons-react'
import {
    filter_repositories,
    get_language_options,
    get_topic_options,
    SORT_BY_OPTIONS,
} from '@core/data'
import type {Repository} from '@core/types'
import ProjectCard from './ProjectCard'

type Props = {
    repositories: Repository[]
}

export default function ProjectsSection({repositories}: Props) {
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState<string | null>('Stars')
    const [isActive, setIsActive] = useState(true)
    const [isArchived, setIsArchived] = useState(false)
    const [isFork, setIsFork] = useState(false)
    const [languages, setLanguages] = useState<string[]>([])
    const [topics, setTopics] = useState<string[]>([])

    // Derived, not stored. The Gatsby version kept this in useState and synced
    // it with useEffect, which cost an extra render on every keystroke.
    const results = useMemo(
        () => filter_repositories(
            repositories, search, sortBy, isActive, isArchived, isFork, languages, topics,
        ),
        [repositories, search, sortBy, isActive, isArchived, isFork, languages, topics],
    )

    const languageOptions = useMemo(() => get_language_options(repositories), [repositories])
    const topicOptions = useMemo(() => get_topic_options(repositories), [repositories])

    return (
        <Grid gap="xl">
            <Grid.Col span={{base: 12, md: 4, lg: 3}}>
                <Fieldset legend="Filter By">
                    <Fieldset legend="Status">
                        <Stack gap="xs">
                            <Checkbox
                                iconColor="#0a0a0a"
                                label="Active"
                                checked={isActive}
                                onChange={e => setIsActive(e.currentTarget.checked)}
                            />
                            <Checkbox
                                iconColor="#0a0a0a"
                                label="Archived"
                                checked={isArchived}
                                onChange={e => setIsArchived(e.currentTarget.checked)}
                            />
                            <Checkbox
                                iconColor="#0a0a0a"
                                label="Forks"
                                checked={isFork}
                                onChange={e => setIsFork(e.currentTarget.checked)}
                            />
                        </Stack>
                    </Fieldset>

                    <MultiSelect
                        mt="md"
                        label="Languages"
                        placeholder={languages.length ? undefined : 'Languages'}
                        data={languageOptions}
                        value={languages}
                        onChange={setLanguages}
                        searchable
                        clearable
                    />

                    <MultiSelect
                        mt="md"
                        label="Topics"
                        placeholder={topics.length ? undefined : 'Topics'}
                        data={topicOptions}
                        value={topics}
                        onChange={setTopics}
                        searchable
                        clearable
                    />
                </Fieldset>
            </Grid.Col>

            <Grid.Col span={{base: 12, md: 8, lg: 9}}>
                <Grid gap="md" mb="xs">
                    <Grid.Col span={{base: 12, sm: 8}}>
                        <TextInput
                            label="Search"
                            placeholder="Find a project..."
                            leftSection={<IconSearch size={16}/>}
                            value={search}
                            onChange={e => setSearch(e.currentTarget.value)}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base: 12, sm: 4}}>
                        <Select
                            label="Sort by"
                            data={SORT_BY_OPTIONS}
                            value={sortBy}
                            onChange={setSortBy}
                            allowDeselect={false}
                        />
                    </Grid.Col>
                </Grid>

                <Text size="sm" c="dimmed" mb="md">
                    {results.length} projects found
                </Text>

                {results.length === 0 ? (
                    <Text c="dimmed">No projects match these filters.</Text>
                ) : (
                    <SimpleGrid cols={{base: 1, sm: 2, lg: 3}} spacing="md">
                        {results.map(repo => (
                            <ProjectCard key={repo.id} repo={repo}/>
                        ))}
                    </SimpleGrid>
                )}
            </Grid.Col>
        </Grid>
    )
}