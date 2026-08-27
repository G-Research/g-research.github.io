import {Group, Title} from '@mantine/core'

type Props = {
    children: React.ReactNode
    /** Heading level. Defaults to 2. */
    order?: 1 | 2 | 3
}

/**
 * Centred section heading with a hairline rule running out to both sides.
 * The rules are decorative divs rather than borders on the heading, so the
 * text keeps its natural width and the lines fill whatever is left.
 */
export default function SectionHeading({children, order = 2}: Props) {
    return (
        <Group gap="lg" wrap="nowrap" mb="xl">
            <span className="section-rule" aria-hidden="true"/>
            <Title order={order} className="section-heading" c="">
                {children}
            </Title>
            <span className="section-rule" aria-hidden="true"/>
        </Group>
    )
}