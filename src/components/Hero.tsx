import {Button, Container, Group, Stack, Text, Title} from '@mantine/core'
import {IconArrowDown, IconBrandGithub} from '@tabler/icons-react'
import {site} from '@core/site'

export default function Hero() {
    return (
        <section className="grid-bg">
            <Container size="lg" py={96}>
                {/* No max-width on the Stack itself: that would constrain the
                    button row too and force the buttons to wrap. Each text
                    block sets its own measure instead. */}
                <Stack className="hero-stack" gap="lg" align="flex-start">
                    <Text className="hero-eyebrow" c="dimmed">
                        Curious minds. Complex problems. Enduring success.
                    </Text>

                    {/* Two-tone headline. One h1 with a span inside, so screen
                        readers still read a single heading. */}
                    <Title order={1} maw="22ch">
                        <span className="accent-text">Open-Source Software</span>
                        <span className="hero-sub">at G-Research</span>
                    </Title>

                    <Text c="dimmed" size="lg" maw="46ch">
                        We play an active role in the open-source community. We take
                        responsibility for maintaining projects, contributing to the continual
                        development of essential software and supporting open-source foundations.
                    </Text>

                    <Group className="hero-cta" gap="sm" mt="md" wrap="wrap">
                        <Button
                            component="a"
                            href="#projects"
                            className="accent-button"
                            size="md"
                            leftSection={<IconArrowDown size={16}/>}
                        >
                            Explore our projects
                        </Button>

                        <Button
                            component="a"
                            href={site.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="default"
                            size="md"
                            leftSection={<IconBrandGithub size={16}/>}
                        >
                            GitHub
                        </Button>
                    </Group>
                </Stack>
            </Container>
        </section>
    )
}