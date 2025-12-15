import * as React from "react"
import {withPrefix} from 'gatsby'
import {
    Text,
    Group,
    Card,
    Avatar,
    Stack,
    SimpleGrid,
    NumberFormatter,
    ActionIcon,
    rem,
    Tooltip,
} from '@mantine/core'
import {
    IconBrandGithub,
    IconWorld,
    IconBrandSlack,
    IconBrandDiscord,
    IconGitFork,
    IconArchive,
} from '@tabler/icons-react'
import type {Repository} from "@core/types";


type Props = {
    repo: Repository;
}


export default function ProjectCardView({repo}: Props): React.JSX.Element {
    const avatar_url: string = (repo.avatar_url || repo.owner_avatar_url) as string;
    return <>
        <Card withBorder padding="xl" radius="md">
            <Card.Section
                h={80}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                }}
            />
            <Avatar
                radius='md'
                src={avatar_url.startsWith("/") ? withPrefix(`${avatar_url}`) : avatar_url}
                size={80}
                mx="auto"
                mt={-40}
            />
            <Group gap={2} justify="center" mt="sm">
                <Text ta="center" size="lg" fw={700} tt="uppercase">
                    {repo.name}
                </Text>
                {repo.archived &&
                    <Tooltip label="This repository has been archived"><IconArchive color='orange'/></Tooltip>}
                {repo.fork && !repo.archived &&
                    <Tooltip label="This is a forked repository"><IconGitFork color='grey'/></Tooltip>}
            </Group>
            <Text ta="center" size="xs" tt="uppercase">
                {repo.owner_name}
            </Text>
            <Text mt="xs" c="dimmed" size="sm" lineClamp={2}>
                {repo.description}
            </Text>
            <SimpleGrid cols={3} spacing={0} verticalSpacing={0} mt="md">
                <Stack>
                    <Text ta="center" fz="lg">
                        <NumberFormatter value={repo.stargazers_count} thousandSeparator/>
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                        Stars
                    </Text>
                </Stack>
                <Stack>
                    <Text ta="center" fz="lg">
                        <NumberFormatter value={repo.forks_count} thousandSeparator/>
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                        Forks
                    </Text>
                </Stack>
                <Stack>
                    <Text ta="center" fz="lg">
                        <NumberFormatter value={repo.open_issues_count} thousandSeparator/>
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                        Open Issues
                    </Text>
                </Stack>
            </SimpleGrid>
            <Group justify="flex-end" gap="sm" mt="xl">
                {repo.slack_url && (
                    <Tooltip label="Slack">
                        <ActionIcon variant="default" size="xl"
                                    component="a"
                                    href={repo.slack_url.toString()}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                    target="_blank" rel="noopener noreferrer"
                        >
                            <IconBrandSlack style={{width: rem(20)}} stroke={1.5}/>
                        </ActionIcon>
                    </Tooltip>
                )}
                {repo.discord_url && (
                    <Tooltip label="Discord">
                        <ActionIcon variant="default" size="xl"
                                    component="a"
                                    href={repo.discord_url.toString()}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                    target="_blank" rel="noopener noreferrer"
                        >
                            <IconBrandDiscord style={{width: rem(20)}} stroke={1.5}/>
                        </ActionIcon>
                    </Tooltip>
                )}
                {repo.website_url && (
                    <Tooltip label="Website">
                        <ActionIcon variant="default" size="xl"
                                    component="a"
                                    href={repo.website_url.toString()}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                    target="_blank" rel="noopener noreferrer"
                        >
                            <IconWorld style={{width: rem(20)}} stroke={1.5}/>
                        </ActionIcon>
                    </Tooltip>
                )}
                {repo.url && (
                    <Tooltip label="GitHub">
                        <ActionIcon variant="default" size="xl"
                                    component="a"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                    href={repo.url.toString()}
                                    target="_blank" rel="noopener noreferrer"
                        >
                            <IconBrandGithub style={{width: rem(20)}} stroke={1.5}/>
                        </ActionIcon>
                    </Tooltip>
                )}
            </Group>
        </Card>
    </>
}
