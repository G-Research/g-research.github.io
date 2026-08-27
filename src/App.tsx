import {get_featured_projects, load_repositories} from '@core/data'
import {site} from '@core/site'
import Header from '@components/Header'
import Hero from '@components/Hero'
import Featured from '@components/Featured'
import ProjectsSection from '@components/ProjectsSection'
import Footer from '@components/Footer'
import {Container, Title} from '@mantine/core'
import SectionHeading from '@components/SectionHeading'

export default function App() {
    // Called once: App holds no state, so it never re-renders.
    const repositories = load_repositories()
    const featured = get_featured_projects(repositories, [...site.featured]).slice(0, 3)

    return (
        <>
            <Header/>
            <Hero/>
            <Featured repositories={featured}/>
            <Container size="xl" py="xl" id="projects">
                <SectionHeading>All projects</SectionHeading>
                <ProjectsSection repositories={repositories}/>
            </Container>
            <Footer/>
        </>
    )
}