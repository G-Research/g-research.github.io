import {Container, SimpleGrid, Title} from '@mantine/core'
import type {Repository} from '@core/types'
import ProjectCard from './ProjectCard'

type Props = {
    repositories: Repository[]
}

// Static row, no carousel. Drops @mantine/carousel and embla-carousel-react.
export default function Featured({repositories}: Props) {
    if (repositories.length === 0) return null

    return (
        <Container size="xl" py="xl">
            <Title order={2} mb="md">Featured projects</Title>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}} spacing="md">
                {repositories.map(repo => (
                    <ProjectCard key={repo.id} repo={repo}/>
                ))}
            </SimpleGrid>
        </Container>
    )
}