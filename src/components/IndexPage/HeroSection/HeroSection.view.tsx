import {Container, Text, Button, Flex, Space} from '@mantine/core'
import * as React from "react"
import {IconBrandGithub, IconChevronsDown} from '@tabler/icons-react'
import * as classes from './HeroSection.module.css'

export default function HeroSectionView(): React.JSX.Element {
    return <>
        <Container size='xl' className={classes.inner}>
            <h1 className={classes.title}>
                Open-Source Software at{' '}
                <Text component="span" variant="gradient" gradient={{from: 'blue', to: 'cyan'}} inherit
                      className={classes.brand}>
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

            <Flex pt='xl'
                  align={{base: "stretch", sm: "space-between"}}
                  direction={{base: 'column', sm: 'row'}}
                  gap={{base: 'md', sm: 'lg'}}
            >
                <Button
                    component='a'
                    href='#all-projects'
                    size="lg"
                    variant="gradient"
                    gradient={{from: 'blue', to: 'cyan'}}
                    leftSection={<IconChevronsDown size={20}/>}
                >
                    Explore our projects
                </Button>

                <Button
                    component="a"
                    href="https://github.com/G-Research"
                    target="_blank" rel="noopener noreferrer"
                    size="lg"
                    variant="default"
                    leftSection={<IconBrandGithub size={20}/>}
                >
                    GitHub
                </Button>
            </Flex>
        </Container>
    </>
}
