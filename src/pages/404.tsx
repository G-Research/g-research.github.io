import * as React from "react"
import type {DataProps} from "@core/types"
import {PageProps, HeadProps, graphql} from "gatsby"
import {Link} from "gatsby"
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
                    <Title ta="center" c="gray" py='xl'>Nothing to see here</Title>
                    <Text c="dimmed" size="lg" ta="center">
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

export const Head = ({data}: HeadProps<DataProps>) => <title>Page not found · {data.site.siteMetadata.title}</title>

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
