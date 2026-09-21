import {Button, Container, Stack, Text, Title} from '@mantine/core'
import {IconArrowLeft} from '@tabler/icons-react'

/**
 * Shown for any path other than the home page. On GitHub Pages this is
 * reached via 404.html, which the build copies from index.html. Copy
 * matches the original Gatsby 404 page.
 */
export default function NotFound() {
    return (
        <Container size="sm" py={120}>
            <Stack align="center" gap="md" ta="center">
                <Title order={1}>404 Oops!</Title>
                <Text c="dimmed" size="lg">
                    The page you are trying to open does not exist. You may have mistyped
                    the address, or the page has been moved to another URL.
                </Text>
                <Button
                    component="a"
                    href={import.meta.env.BASE_URL}
                    size="md"
                    mt="md"
                    leftSection={<IconArrowLeft size={16}/>}
                >
                    Take me back to home page
                </Button>
            </Stack>
        </Container>
    )
}