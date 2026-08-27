import {ActionIcon, Anchor, Button, Container, Divider, Group} from '@mantine/core'
import {IconArrowRight, IconBrandGithub, IconBrandX, IconBrandYoutube} from '@tabler/icons-react'
import {site} from '@core/site'
import Logo from './Logo'

const LINKS = [
    {href: site.websiteUrl, label: 'Website'},
    {href: site.blogUrl, label: 'Blog'},
    {href: site.careersUrl, label: 'Careers'},
]

const SOCIALS = [
    {href: site.githubUrl, Icon: IconBrandGithub, label: 'GitHub'},
    {href: site.xUrl, Icon: IconBrandX, label: 'X'},
    {href: site.youtubeUrl, Icon: IconBrandYoutube, label: 'YouTube'},
]

export default function Footer() {
    return (
        <footer className="footer">
            <Container size="lg" py="xl">
                {/* Top: logo left, Join us right */}
                <Group className="footer-row" justify="space-between" align="center" wrap="wrap" gap="xl">
                    <Logo variant="footer" size={56} withText={false}/>

                    <Button
                        component="a"
                        href={site.joinUsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accent-button"
                        size="sm"
                        rightSection={<IconArrowRight size={15}/>}
                    >
                        Join us
                    </Button>
                </Group>

                <Divider my="xl"/>

                {/* Bottom: tagline left, links then socials right */}
                <Group className="footer-row" justify="space-between" align="center" wrap="wrap" gap="md">
                    <Anchor component="span" size="sm" c="dimmed" underline="never">
                        Curious minds. Complex problems. Enduring success.
                    </Anchor>

                    <Group className="footer-row" gap="xl" wrap="wrap" align="center">
                        <Group gap="lg" wrap="wrap">
                            {LINKS.map(({href, label}) => (
                                <Anchor
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="sm"
                                    c="dimmed"
                                    underline="hover"
                                >
                                    {label}
                                </Anchor>
                            ))}
                        </Group>

                        <Group gap={4} wrap="nowrap">
                            {SOCIALS.map(({href, Icon, label}) => (
                                <ActionIcon
                                    key={label}
                                    component="a"
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="subtle"
                                    size="md"
                                    aria-label={label}
                                >
                                    <Icon size={16}/>
                                </ActionIcon>
                            ))}
                        </Group>
                    </Group>
                </Group>
            </Container>
        </footer>
    )
}