import * as React from 'react';
import {Text, Container, ActionIcon, Group, rem, Anchor, Flex, Stack, Box, Button, Grid, Tooltip} from '@mantine/core';
import {
    IconUsersGroup as IconCareers,
    Icon,
    IconProps
} from '@tabler/icons-react';
import Logo from '@components/Logo';
import {dayjs} from '@core/dates';
import * as classes from './Footer.module.css';


type Props = {
    links: {
        label: string;
        link: string;
    }[];
    socials: {
        Icon: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<Icon>>;
        link: string;
    }[];
    joinUsUrl?: string;
    description: string;
    generatedAt: Date;
}

export default function FooterView({links, socials, joinUsUrl, description, generatedAt}: Props): React.JSX.Element {
    return <Box component="footer" className={classes.footer}>
        <Container py="xl">
            <Grid justify="stretch" align="center">
                <Grid.Col span={{
                    base: 5,
                    sm: 4,
                }}>
                    <Stack justify="center" align="flex-start">
                        <Logo alt="G-Research"
                              src="https://github.com/G-Research/brand/raw/main/logo/GR/logo.svg"
                              height={96}/>
                        <Text size="xs" c="gray" p={0}>
                            CREATE TODAY.
                        </Text>
                        <Text size="xs" c="gray" p={0}>
                            PREDICT TOMORROW.
                        </Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{
                    base: 7,
                    sm: 8,
                }}>
                    <Stack justify="stretch" align="flex-start">
                        <Text size="sm" c="gray">
                            We hire the brightest minds to tackle the biggest questions in finance. We pair our people’s
                            expertise with machine learning, big data, and emerging tech to predict movements in
                            financial
                            markets.
                        </Text>
                        {
                            joinUsUrl &&
                            <Button leftSection={<IconCareers size={20}/>}
                                    component="a"
                                    target="_blank" rel="noopener noreferrer"
                                    href={joinUsUrl}
                                    variant="light"
                                    size="md">
                                JOIN US
                            </Button>
                        }
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>
        <Container py="lg" className={classes.afterFooter}>
            <Flex justify="space-between"
                  align={{base: "center", sm: "space-between"}}
                  direction={{base: 'column', sm: 'row'}}
                  gap={{base: 'md', sm: 'lg'}}>
                <Tooltip label={`Generated at ${dayjs(generatedAt).format("lll")}`}>
                    <Text c="gray" size="sm">
                        {description}
                    </Text>
                </Tooltip>
                <Group gap="md">
                    {links?.filter(v => v?.link).map((v, ind) => (
                        <Anchor
                            target="_blank" rel="noopener noreferrer"
                            c="gray"
                            key={ind}
                            href={v.link}
                            lh={1}
                            size="sm"
                        >
                            {v.label}
                        </Anchor>
                    ))}
                </Group>
                <Group gap={4}>
                    {socials?.filter(v => v?.link).map((v, ind) => (
                        <ActionIcon
                            size="lg"
                            color="gray" variant="subtle"
                            component="a"
                            href={v.link}
                            target="_blank" rel="noopener noreferrer"
                            key={ind}>
                            <v.Icon style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                        </ActionIcon>
                    ))}
                </Group>
            </Flex>
        </Container>
    </Box>
}
