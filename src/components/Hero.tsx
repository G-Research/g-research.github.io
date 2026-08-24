import {Button, Container, Group, Stack, Text, Title} from '@mantine/core'
import {IconArrowDown, IconBrandGithub} from '@tabler/icons-react'
import {site} from '@core/site'

export default function Hero() {
    return (
        <Container size="xl" py="xl">
            <Stack gap="md">
                <Text size="sm" c="dimmed">
                    Curious minds. Complex problems. Enduring success.
                </Text>

                <Title order={1}>{site.description}</Title>

                <Text c="dimmed" maw="60ch">
                    We play an active role in the open-source community. We take responsibility for
                    maintaining projects, contributing to the continual development of essential
                    software and supporting open-source foundations.
                </Text>

                <Group gap="sm" mt="sm">
                    <Button component="a" href="#projects" leftSection={<IconArrowDown size={16}/>}>
                        Explore our projects
                    </Button>
                    <Button
                        component="a"
                        href={site.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="default"
                        leftSection={<IconBrandGithub size={16}/>}
                    >
                        GitHub
                    </Button>
                </Group>
            </Stack>
        </Container>
    )
}