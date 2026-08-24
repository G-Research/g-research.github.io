import {Container, Title} from '@mantine/core'
import {load_repositories} from '@core/data'
import ProjectsSection from '@components/ProjectsSection'

export default function App() {
    // Called once: App holds no state, so it never re-renders.
    const repositories = load_repositories()

    return (
        <Container size="xl" py="xl">
            <Title order={2} ta="center" mb="xl">All Projects</Title>
            <ProjectsSection repositories={repositories}/>
        </Container>
    )
}