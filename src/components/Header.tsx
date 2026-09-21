import {ActionIcon, Burger, Container, Group, Menu, useComputedColorScheme, useMantineColorScheme} from '@mantine/core'
import {IconBrandGithub, IconBrandX, IconBrandYoutube, IconMoon, IconSun} from '@tabler/icons-react'
import {useDisclosure, useMediaQuery} from '@mantine/hooks'
import {site} from '@core/site'
import Logo from './Logo'

const SOCIALS = [
    {href: site.githubUrl, Icon: IconBrandGithub, label: 'GitHub'},
    {href: site.xUrl, Icon: IconBrandX, label: 'X'},
    {href: site.youtubeUrl, Icon: IconBrandYoutube, label: 'YouTube'},
]

export default function Header() {
    const {setColorScheme} = useMantineColorScheme()
    // getInitialValueInEffect: false avoids a flash of the wrong icon on load.
    const computed = useComputedColorScheme('dark', {getInitialValueInEffect: false})
    const isDark = computed === 'dark'

    // Below 48em the social icons collapse into a burger menu.
    const isMobile = useMediaQuery('(max-width: 48em)')
    const [opened, {toggle, close}] = useDisclosure(false)

    const themeToggle = (
        <ActionIcon
            variant="default"
            size="lg"
            onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {isDark ? <IconSun size={18}/> : <IconMoon size={18}/>}
        </ActionIcon>
    )

    return (
        <header className="nav">
            <Container size="xl" py="md">
                <Group justify="space-between" wrap="nowrap">
                    <Logo variant="header" size={36}/>

                    {isMobile ? (
                        <Group gap="xs" wrap="nowrap">
                            {themeToggle}
                            <Menu
                                opened={opened}
                                onChange={toggle}
                                onClose={close}
                                position="bottom-end"
                                withinPortal
                            >
                                <Menu.Target>
                                    <Burger
                                        opened={opened}
                                        onClick={toggle}
                                        size="sm"
                                        aria-label="Open menu"
                                    />
                                </Menu.Target>
                                <Menu.Dropdown>
                                    {SOCIALS.map(({href, Icon, label}) => (
                                        <Menu.Item
                                            key={label}
                                            component="a"
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            leftSection={<Icon size={16}/>}
                                        >
                                            {label}
                                        </Menu.Item>
                                    ))}
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                    ) : (
                        <Group gap="xs" wrap="nowrap">
                            {SOCIALS.map(({href, Icon, label}) => (
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
                            {themeToggle}
                        </Group>
                    )}
                </Group>
            </Container>
        </header>
    )
}