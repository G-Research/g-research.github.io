import * as React from "react"
import {Carousel} from "@mantine/carousel";
import {ProjectCard} from '@components/Project';
import type {Repository} from "@core/types";


type Props = {
    repos: Repository[];
}


export default function FeaturedSectionView({repos}: Props): React.JSX.Element {
    return <>
        <Carousel
            mt="lg"
            controlsOffset="lg"
            controlSize={40}
            loop
            align="start"
            slideSize={{base: '100%', sm: '33.333333%'}}
            slideGap={{base: 0, sm: 'lg'}}
            slidesToScroll={1}
        >
            {repos.map((repo, ind) => <Carousel.Slide key={ind}><ProjectCard repo={repo}/></Carousel.Slide>)}
        </Carousel>
    </>
}
