import {Group, Text} from '@mantine/core'
import headerDark from '../assets/logo-header-dark.png'
import headerWhite from '../assets/logo-header-white.png'
import footerDark from '../assets/logo-footer-dark.png'
import footerWhite from '../assets/logo-footer-white.png'
import {site} from '@core/site'

type Props = {
    /** Which logo pair to use. */
    variant?: 'header' | 'footer'
    /** Height of the logo mark in px. */
    size?: number
    /** Show the site name next to the mark. */
    withText?: boolean
}


export default function Logo({variant = 'header', size = 28, withText = true}: Props) {
    const forLightMode = variant === 'header' ? headerDark : footerDark
    const forDarkMode = variant === 'header' ? headerWhite : footerWhite

    return (
        <Group gap="xs" wrap="nowrap">
            <img
                className="logo-for-light"
                src={forLightMode}
                alt={withText ? '' : site.title}
                height={size}
            />
            <img
                className="logo-for-dark"
                src={forDarkMode}
                alt={withText ? '' : site.title}
                height={size}
            />
            {withText && (
                <Text fw={600} size="sm">{site.description}</Text>
            )}
        </Group>
    )
}