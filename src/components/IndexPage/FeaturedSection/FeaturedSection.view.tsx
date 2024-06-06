import * as React from "react"
import {useState} from 'react'
import {
    SimpleGrid,
} from '@mantine/core'
import {REPOS} from "@core/mock_data";
import {ProjectCard} from '@components/Project';


export default function ProjectsSectionView(): React.JSX.Element {
    const [repos] = useState(() => {
        return REPOS.toSorted((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);
    });

    return <>
        <SimpleGrid cols={{
            base: 1,
            sm: 3,
        }} spacing="lg" verticalSpacing="lg" mt="lg">
            {repos.map((repo) => <ProjectCard repo={repo}/>)}
        </SimpleGrid>
    </>
}
