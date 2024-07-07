import * as React from "react"
import type {PageProps, HeadProps} from "gatsby"
import type {DataProps} from "@core/types"
import {graphql} from 'gatsby'
import {Container, Divider, Title, rem} from '@mantine/core'
import {useScrollIntoView} from '@mantine/hooks'
import {
    IconBrandX,
    IconBrandYoutube,
    IconBrandGithub,
} from '@tabler/icons-react'
import {
    SORT_BY_OPTIONS,
    load_repositories,
    get_featured_projects,
    get_language_options,
    get_topic_options
} from '@core/data'
import Footer from '@components/Footer'
import Header from '@components/Header'
import FeaturedSection from "@components/IndexPage/FeaturedSection"
import ProjectsSection from "@components/IndexPage/ProjectsSection"
import HeroSection from "@components/IndexPage/HeroSection"


const IndexPage = ({data}: PageProps<DataProps>) => {
    const joinUsUrl = data.site.siteMetadata.joinUsUrl;
    const description = data.site.siteMetadata.description;
    const generatedAt = data.site.siteMetadata.generatedAt;
    const featured = data.site.siteMetadata.featured;
    const repositories = load_repositories();
    const featuredProjects = get_featured_projects(repositories, featured);
    const language_options = get_language_options(repositories);
    const topic_options = get_topic_options(repositories);
    const sort_by_options = SORT_BY_OPTIONS;
    const links = [
        {
            label: 'Website',
            link: data.site.siteMetadata.websiteUrl
        },
        {
            label: 'Blog',
            link: data.site.siteMetadata.blogUrl
        },
        {
            label: 'Careers',
            link: data.site.siteMetadata.careersUrl
        }
    ];
    const socials = [
        {
            Icon: IconBrandGithub,
            link: data.site.siteMetadata.githubUrl,
            label: 'GitHub'
        },
        {
            Icon: IconBrandX,
            link: data.site.siteMetadata.xUrl,
            label: 'X (fka Twitter)'
        },
        {
            Icon: IconBrandYoutube,
            link: data.site.siteMetadata.youtubeUrl,
            label: 'YouTube'
        }
    ];
    const {scrollIntoView: scrollIntoProjectsSection, targetRef: projectsSectionRef}
        = useScrollIntoView<HTMLDivElement>({offset: 8});

    return (
        <>
            <Header description="Create today. Predict tomorrow." socials={socials}/>
            <HeroSection onExploreProjectsClick={() =>
                scrollIntoProjectsSection({
                    alignment: 'start',
                })}/>
            <Container component="main" pb="xl" size="xl" mb='xl'>
                <Divider
                    labelPosition="center"
                    label={<Title size="h2" py="lg" ta="center" c="blue">FEATURED PROJECTS</Title>}
                />
                <FeaturedSection repos={featuredProjects}/>
                <Divider
                    mt={{base: rem(32), sm: rem(96)}}
                    mb={rem(32)}
                    labelPosition="center"
                    label={<Title size="h2" py="lg" ta="center" c="blue">ALL PROJECTS</Title>}
                    ref={projectsSectionRef}
                />
                <ProjectsSection all_repos={repositories} language_options={language_options}
                                 sort_by_options={sort_by_options} topic_options={topic_options}
                                 generated_at={generatedAt}/>
            </Container>
            <Footer
                joinUsUrl={joinUsUrl}
                description={description}
                links={links}
                socials={socials}
            />
        </>
    )
}

export default IndexPage

//noinspection JSUnusedGlobalSymbols
export const Head = ({data}: HeadProps<DataProps>) =>
    <title>{data.site.siteMetadata.description} · {data.site.siteMetadata.title}</title>

//noinspection JSUnusedGlobalSymbols
export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                title
                description
                siteUrl
                repositoryUrl
                generatedAt
                githubUrl
                xUrl
                youtubeUrl
                joinUsUrl
                websiteUrl
                blogUrl
                careersUrl
                featured
            }
        }
    }
`
