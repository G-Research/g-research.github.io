import {Anchor, Container, Group, Stack, Text} from '@mantine/core'
import {site} from '@core/site'

export default function Footer() {
    const links = [
        {href: site.websiteUrl, label: 'Website'},
        {href: site.blogUrl, label: 'Blog'},
        {href: site.careersUrl, label: 'Careers'},
    ]

    return (
        <Container size="xl" py="xl">
            <Stack gap="sm">
                <Group justify="space-between" wrap="wrap">
                    <Text size="sm" c="dimmed">{site.description}</Text>
                    <Group gap="lg">
                        {links.map(({href, label}) => (
                            <Anchor
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="sm"
                                c="dimmed"
                            >
                                {label}
                            </Anchor>
                        ))}
                    </Group>
                </Group>
            </Stack>
        </Container>
    )
}