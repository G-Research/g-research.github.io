import * as React from 'react'
import {
    Text,
    Container,
    ActionIcon,
    Group,
    Box,
    Grid,
    Center,
    Tooltip,
} from '@mantine/core';
import {IconProps, Icon} from '@tabler/icons-react';
import Logo from '@components/Logo';
import * as classes from './Header.module.css';


type Props = {
    description: string;
    socials: {
        Icon: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<Icon>>;
        label: string;
        link: string;
    }[];
}


export default function HeaderView({description, socials}: Props): React.JSX.Element {
    return <Box component="header" className={classes.header}>
        <Container fluid mx="xl" px="xl" py={{
            base: 0,
            xs: 'xs',
        }}>
            <Grid justify="space-between" align="center" gutter={0}>
                <Grid.Col span={4} visibleFrom="xs">
                    <Group justify="flex-start">
                        <Text c="gray" size="sm">
                            {description}
                        </Text>
                    </Group>
                </Grid.Col>
                <Grid.Col span={{
                    base: 12,
                    xs: 4,
                }}>
                    <Center py={12}>
                        <Logo alt="G-Research"
                              src="https://github.com/G-Research/brand/raw/main/logo/GR-OSS/logo.svg"
                              height={72}/>
                    </Center>
                </Grid.Col>
                <Grid.Col span={4} visibleFrom="xs">
                    <Group gap={4} justify="flex-end">
                        {socials?.filter(v => v?.link).map((v, ind) => (
                            <Tooltip label={v.label} key={ind}>
                                <ActionIcon
                                    size="xl"
                                    color="gray" variant="subtle"
                                    component="a"
                                    href={v.link}
                                    target="_blank" rel="noopener noreferrer">
                                    <v.Icon size={20}/>
                                </ActionIcon>
                            </Tooltip>
                        ))}
                    </Group>
                </Grid.Col>
            </Grid>
        </Container>
    </Box>
}
