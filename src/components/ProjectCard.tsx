import {ActionIcon, Avatar, Card, Divider, Group, NumberFormatter, Stack, Text} from '@mantine/core'
import {IconBrandDiscord, IconBrandGithub, IconBrandSlack, IconWorld} from '@tabler/icons-react'
import type {Repository} from '@core/types'

// avatar_url from collect.py is root-relative ("/hosted_logos/org/repo.svg").
// BASE_URL is "/" normally and "/<repo>/" on forks, so this keeps logos
// resolving in both. Gatsby did the same job with withPrefix().
function withBase(path?: string | URL | null): string | undefined {
    if (!path) return undefined
    const s = String(path)
    if (s.startsWith('http')) return s
    return import.meta.env.BASE_URL.replace(/\/$/, '') + s
}

export default function ProjectCard({repo}: { repo: Repository }) {
    const stats = [
        {label: 'Stars', value: repo.stargazers_count},
        {label: 'Forks', value: repo.forks_count},
        {label: 'Open Issues', value: repo.open_issues_count},
    ]

    const links = [
        {url: repo.discord_url, Icon: IconBrandDiscord, label: 'Discord'},
        {url: repo.slack_url, Icon: IconBrandSlack, label: 'Slack'},
        {url: repo.website_url, Icon: IconWorld, label: 'Website'},
        {url: repo.url, Icon: IconBrandGithub, label: 'GitHub'},
    ].filter(link => Boolean(link.url))

    return (
        <Card className="project-card" withBorder padding="lg" radius="lg" h="100%">
            <Stack gap="sm" align="center" style={{flex: 1}}>
                <Avatar
                    src={withBase(repo.avatar_url) ?? String(repo.owner_avatar_url)}
                    alt={`${repo.name} logo`}
                    size={72}
                    radius="lg"
                />

                <Stack gap={2} align="center">
                    <Text fw={700} size="lg" ta="center" style={{overflowWrap: 'anywhere'}}>
                        {repo.name}
                    </Text>
                    <Text className="project-owner" c="dimmed">
                        {repo.owner_name}
                    </Text>
                    {repo.archived && (
                        <Text className="project-badge" mt={4}>archived</Text>
                    )}
                </Stack>

                <Text size="sm" c="dimmed" ta="center" lineClamp={3}>
                    {repo.description}
                </Text>
            </Stack>

            <Divider my="md"/>

            {/* No dividers between columns — grow keeps them equal width. */}
            <Group gap={0} grow>
                {stats.map(stat => (
                    <Stack key={stat.label} gap={0} align="center">
                        <Text fw={700} size="xl">
                            <NumberFormatter value={stat.value} thousandSeparator/>
                        </Text>
                        <Text size="xs" c="dimmed">{stat.label}</Text>
                    </Stack>
                ))}
            </Group>

            <Group justify="center" gap="xs" mt="md">
                {links.map(({url, Icon, label}) => (
                    <ActionIcon
                        key={label}
                        component="a"
                        href={String(url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        size="lg"
                        className="icon-btn"
                        aria-label={`${label} for ${repo.name}`}
                    >
                        <Icon size={17}/>
                    </ActionIcon>
                ))}
            </Group>
        </Card>
    )
}