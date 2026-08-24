import {ActionIcon, Container, Group, Text, useComputedColorScheme, useMantineColorScheme} from '@mantine/core'
import {IconBrandGithub, IconBrandX, IconBrandYoutube, IconMoon, IconSun} from '@tabler/icons-react'
import {site} from '@core/site'

export default function Header() {
    const {setColorScheme} = useMantineColorScheme()
    // getInitialValueInEffect: false avoids a flash of the wrong icon on load.
    const computed = useComputedColorScheme('dark', {getInitialValueInEffect: false})
    const isDark = computed === 'dark'

    const socials = [
        {href: site.githubUrl, Icon: IconBrandGithub, label: 'GitHub'},
        {href: site.xUrl, Icon: IconBrandX, label: 'X'},
        {href: site.youtubeUrl, Icon: IconBrandYoutube, label: 'YouTube'},
    ]

    return (
        <Container size="xl" py="sm">
            <Group justify="space-between">
                <Text fw={600}>{site.description}</Text>

                <Group gap="xs">
                    {socials.map(({href, Icon, label}) => (
                        <ActionIcon
                            key={label}
                            component="a"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="subtle"
                            size="lg"
                            aria-label={label}
                        >
                            <Icon size={18}/>
                        </ActionIcon>
                    ))}

                    <ActionIcon
                        variant="default"
                        size="lg"
                        onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
                        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                    >
                        {isDark ? <IconSun size={18}/> : <IconMoon size={18}/>}
                    </ActionIcon>
                </Group>
            </Group>
        </Container>
    )
}