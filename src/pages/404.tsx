import * as React from "react"
import {Link, HeadFC, PageProps} from "gatsby"
import {Container, Title, Text, Button, Stack} from '@mantine/core'
import Logo from "@components/Logo"


const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Container py="xl" my="xl">
                <Stack justify="flex-start" align="center">
                    <Logo
                        alt="G-Research"
                        src="https://github.com/G-Research/brand/raw/main/logo/GR-OSS/logo.svg"
                        height={128}/>
                    <Title ta="center" c="gray">Nothing to see here</Title>
                    <Text c="dimmed" size="lg" p="lg" ta="center">
                        The page you are trying to open does not exist. You may have mistyped the address, or the
                        page has been moved to another URL. If you think this is an error contact support.
                    </Text>
                    <Button component={Link} to="/" size="md" variant="light">
                        Take me back to home page
                    </Button>
                </Stack>
            </Container>
        </main>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Page not found</title>
