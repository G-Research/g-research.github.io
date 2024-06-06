import * as React from "react"
import type {PageProps, HeadProps} from "gatsby"
import type {DataProps} from "@core/types"
import {graphql} from 'gatsby'
import {Container, Divider, Title, rem} from '@mantine/core'
import {
    IconBrandX,
    IconBrandYoutube,
    IconBrandGithub,
} from '@tabler/icons-react';
import Footer from '@components/Footer'
import Header from '@components/Header'
import FeaturedSection from "@components/IndexPage/FeaturedSection"
import ProjectsSection from "@components/IndexPage/ProjectsSection"
import HeroSection from "@components/IndexPage/HeroSection"


const IndexPage = ({data}: PageProps<DataProps>) => {
    const joinUsUrl = data.site.siteMetadata.joinUsUrl;
    const description = data.site.siteMetadata.description;
    const generatedAt = data.site.siteMetadata.generatedAt;
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
            link: data.site.siteMetadata.githubUrl
        },
        {
            Icon: IconBrandX,
            link: data.site.siteMetadata.xUrl
        },
        {
            Icon: IconBrandYoutube,
            link: data.site.siteMetadata.youtubeUrl
        }
    ];
    return (
        <>
            <Header description={description} socials={socials}/>
            <HeroSection/>
            <Container component="main" pb="xl" size="xl" mb='xl'>
                <Divider
                    labelPosition="center"
                    label={
                        <Title id='featured-projects' size="h2" py="lg" ta="center" c="blue">FEATURED PROJECTS</Title>
                    }
                />
                <FeaturedSection/>
                <Divider
                    my={{base: rem(32), sm: rem(64)}}
                    labelPosition="center"
                    label={
                        <Title id='all-projects' size="h2" py="lg" ta="center" c="blue">ALL PROJECTS</Title>
                    }
                />
                <ProjectsSection/>
            </Container>
            <Footer
                joinUsUrl={joinUsUrl}
                description={description}
                generatedAt={generatedAt}
                links={links}
                socials={socials}
            />
        </>
    )
}

export default IndexPage

export const Head = ({data}: HeadProps<DataProps>) =>
    <title>{data.site.siteMetadata.description} · {data.site.siteMetadata.title}</title>

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                title
                description
                websiteUrl
                blogUrl
                careersUrl
                githubUrl
                xUrl
                youtubeUrl
                joinUsUrl
                generatedAt
            }
        }
    }
`
