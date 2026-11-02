import {Group, Text} from '@mantine/core'
// The dark mark sits on light backgrounds and vice versa; global.css swaps
// them by colour scheme, since `display` is not something light-dark() can do.
import markDark from '../assets/logo-header-dark.png'
import markLight from '../assets/logo-header-white.png'
import {site} from '@core/site'

type Props = {
    /** Height of the logo mark in px. */
    size?: number
    /** Show the site name next to the mark. */
    withText?: boolean
}

// Measured from the PNGs: 827x1020. Both dimensions are set so the browser
// reserves space instead of shifting the layout as the images arrive.
const ASPECT = 827 / 1020

export default function Logo({size = 28, withText = true}: Props) {
    return (
        <Group gap="xs" wrap="nowrap">
            <img
                className="logo-for-light"
                src={markDark}
                alt={withText ? '' : site.title}
                height={size}
                width={Math.round(size * ASPECT)}
            />
            <img
                className="logo-for-dark"
                src={markLight}
                alt={withText ? '' : site.title}
                height={size}
                width={Math.round(size * ASPECT)}
            />
            {withText && (
                <Text fw={600} size="sm">{site.description}</Text>
            )}
        </Group>
    )
}