/**
 * CHECKPOINT COMPONENT — throwaway.
 *
 * This exists to prove the build works before any UI is written. If this
 * renders repo names, then: path aliases resolve, resolveJsonModule works,
 * the existing data layer runs untouched, publicDir maps static/ correctly,
 * and the Mantine postcss preset loaded.
 *
 * Delete this once the real components land.
 */
import {Badge, Box, Code, Container, Group, Stack, Text, Title} from '@mantine/core'
import {
    COLLECTED_AT,
    get_featured_projects,
    get_language_options,
    get_topic_options,
    load_repositories,
} from '@core/data'
import {site} from '@core/site'

export default function App() {
    const repositories = load_repositories()
    const featured = get_featured_projects(repositories, [...site.featured])
    const languages = get_language_options(repositories)
    const topics = get_topic_options(repositories)

    return (
        <Container size="lg" py="xl">
            <Title order={1} mb="xs">{site.description}</Title>
            <Text c="dimmed" size="sm" mb="lg">
                Build checkpoint. Not the real UI.
            </Text>

            {/* If these numbers appear, the existing data layer works untouched. */}
            <Group gap="xs" mb="lg">
                <Badge variant="light">{repositories.length} repositories</Badge>
                <Badge variant="light">{featured.length} featured</Badge>
                <Badge variant="light">{languages.length} languages</Badge>
                <Badge variant="light">{topics.length} topics</Badge>
                <Badge variant="light">collected {COLLECTED_AT.toISOString().slice(0, 10)}</Badge>
            </Group>

            {/* If this box has rounded corners and real padding, the postcss
                preset loaded. If it is square and flush, it did not. */}
            <Box
                bg="var(--mantine-color-blue-light)"
                p="md"
                mb="lg"
                style={{borderRadius: 'var(--mantine-radius-md)'}}
            >
                <Text size="sm">
                    Mantine style probe: this should be padded with rounded corners.
                </Text>
            </Box>

            <Stack gap={2}>
                {repositories.map(repo => (
                    <Group key={repo.id} gap="xs" wrap="nowrap">
                        <Code>{repo.id}</Code>
                        <Text size="xs" c="dimmed">{repo.stargazers_count} stars</Text>
                        {repo.archived && <Text size="xs" c="orange">archived</Text>}
                        {repo.fork && <Text size="xs" c="dimmed">fork</Text>}
                    </Group>
                ))}
            </Stack>
        </Container>
    )
}
