import {Container, Text, Button, Group, Space} from '@mantine/core'
import * as React from "react"
import {IconBrandGithub, IconChevronsDown} from '@tabler/icons-react'
import * as classes from './HeroSection.module.css'

export default function HeroSectionView(): React.JSX.Element {
    return <>
        <Container size='xl' className={classes.inner}>
            <h1 className={classes.title}>
                Open-Source Software at{' '}
                <Text component="span" variant="gradient" gradient={{from: 'blue', to: 'cyan'}} inherit>
                    G-Research
                </Text>
            </h1>

            <Text className={classes.description} c="dimmed">
                We play an active role in the open-source community. We take responsibility for maintaining projects,
                contributing to the continual development of essential software and supporting open-source foundations.
                <Space/>
                Our work focuses on data science and machine learning tools, as well as the infrastructure and security
                to
                support them.
            </Text>

            <Group className={classes.controls}>
                <Button
                    component='a'
                    href='#projects'
                    size="md"
                    variant="gradient"
                    className={classes.control}
                    gradient={{from: 'blue', to: 'cyan'}}
                    leftSection={<IconChevronsDown size={20}/>}
                >
                    Explore our projects
                </Button>

                <Button
                    component="a"
                    href="https://github.com/G-Research"
                    target="_blank" rel="noopener noreferrer"
                    size="md"
                    variant="default"
                    className={classes.control}
                    leftSection={<IconBrandGithub size={20}/>}
                >
                    GitHub
                </Button>
            </Group>
        </Container>
    </>
}
