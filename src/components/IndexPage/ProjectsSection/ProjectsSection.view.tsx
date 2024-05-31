import * as React from "react"
import cx from 'clsx'
import {useState} from 'react'
import {
    Text,
    Table,
    ScrollArea,
    Grid,
    Fieldset,
    Chip,
    Group,
    Stack,
    MultiSelect,
    Select,
    Checkbox,
    Skeleton,
    TextInput,
    rem,
    ActionIcon,
    Card, Avatar, Button, SimpleGrid, NumberFormatter
} from '@mantine/core'
import {
    IconSearch,
    IconLayoutGrid,
    IconLayoutList,
    IconBrandGithub,
    IconHome,
    IconWorld
} from '@tabler/icons-react'
import * as classes from './ProjectsSection.module.css'
import {REPOS, TOPIC_OPTIONS, LANGUAGE_OPTIONS, SORT_BY_OPTIONS} from "@core/mock_data";


function ProjectsSectionView2(): React.JSX.Element {
    const [scrolled, setScrolled] = useState(false);

    const rows = REPOS.map((repo) => (
        <Table.Tr key={repo.full_name}>
            <Table.Td>{repo.full_name}</Table.Td>
            <Table.Td>{repo.stargazers_count}</Table.Td>
            <Table.Td>{repo.open_issues_count}</Table.Td>
        </Table.Tr>
    ));

    return <>
        <ScrollArea h={480} onScrollPositionChange={({y}) => setScrolled(y !== 0)}>
            <Table miw={700}>
                <Table.Thead className={cx(classes.header, {[classes.scrolled]: scrolled})}>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Stars</Table.Th>
                        <Table.Th>Open Issues</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    </>
}


export default function ProjectsSectionView(): React.JSX.Element {
    const [languages, setLanguages] = useState<string[]>([]);
    const [topics, setTopics] = useState<string[]>([]);
    const [isActive, setIsActive] = useState<boolean>(true);
    const [isArchived, setIsArchived] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [sortBy, setSortBy] = useState<string | null>(SORT_BY_OPTIONS[0]);
    const [layout, setLayout] = useState<string>("grid");

    return <>
        <Grid>
            <Grid.Col span={{
                base: 12,
                sm: 4,
            }}>
                <Fieldset legend="Filter By">
                    <Stack gap="lg" align="stretch" justify="center">
                        <Fieldset legend="Status">
                            <Stack gap="sm" align="stretch" justify="center">
                                <Checkbox
                                    size="sm"
                                    checked={isActive}
                                    onChange={(event) => setIsActive(event.currentTarget.checked)}
                                    label="Active"
                                />
                                <Checkbox
                                    size="sm"
                                    checked={isArchived}
                                    onChange={(event) => setIsArchived(event.currentTarget.checked)}
                                    label="Archived"
                                />
                            </Stack>
                        </Fieldset>

                        {/*<Chip.Group multiple value={languages} onChange={setLanguages}>*/}
                        {/*    {LANGUAGE_OPTIONS.map((language) => (*/}
                        {/*        <Chip key={language} value={language}>*/}
                        {/*            {language}*/}
                        {/*        </Chip>*/}
                        {/*    ))}*/}
                        {/*</Chip.Group>*/}
                        <MultiSelect
                            size="sm"
                            label="Languages"
                            placeholder="Languages"
                            data={LANGUAGE_OPTIONS}
                            value={languages}
                            onChange={setLanguages}
                            clearable
                            searchable
                            // nothingFoundMessage="Nothing found..."
                            checkIconPosition="right"
                            hidePickedOptions
                        />
                        <MultiSelect
                            size="sm"
                            label="Topics"
                            placeholder="Topics"
                            data={TOPIC_OPTIONS}
                            value={topics}
                            onChange={setTopics}
                            clearable
                            searchable
                            // nothingFoundMessage="Nothing found..."
                            checkIconPosition="right"
                            hidePickedOptions
                        />

                        {/*<Checkbox.Group  value={value} onChange={setValue}>*/}
                        {/*    <Checkbox value="react" label="React"/>*/}
                        {/*    <Checkbox value="svelte" label="Svelte"/>*/}
                        {/*</Checkbox.Group>*/}

                    </Stack>
                </Fieldset>
            </Grid.Col>
            <Grid.Col span={{
                base: 12,
                sm: 8,
            }}>
                <Grid gutter="xs" justify="stretch" align="flex-end">
                    <Grid.Col span={8}>
                        <TextInput
                            size="sm"
                            radius="sm"
                            label="Search"
                            placeholder="Find a project..."
                            leftSection={<IconSearch style={{width: rem(16), height: rem(16)}} stroke={1.5}/>}
                            value={search}
                            onChange={(event) => setSearch(event.currentTarget.value)}
                            // rightSectionWidth={42}
                            // leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                            // rightSection={
                            //     <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                            //         <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                            //     </ActionIcon>
                            // }
                            // {...props}
                        />
                    </Grid.Col>
                    <Grid.Col span='auto'>
                        <Select
                            size="sm"
                            label="Sort by"
                            placeholder="Sort by"
                            data={SORT_BY_OPTIONS}
                            allowDeselect={false}
                            value={sortBy}
                            onChange={setSortBy}
                        />
                    </Grid.Col>
                    <Grid.Col span='content'>
                        <ActionIcon.Group>
                            <ActionIcon
                                onClick={() => setLayout("grid")}
                                variant={
                                    layout === "grid" ? "outline" : "default"
                                } size={36} aria-label="Grid Layout">
                                <IconLayoutGrid style={{width: rem(20)}} stroke={1.5}/>
                            </ActionIcon>

                            <ActionIcon
                                onClick={() => setLayout("list")}
                                variant={
                                    layout === "list" ? "outline" : "default"
                                } size={36} aria-label="List Layout">
                                <IconLayoutList style={{width: rem(20)}} stroke={1.5}/>
                            </ActionIcon>
                        </ActionIcon.Group>
                    </Grid.Col>
                </Grid>
                {/*Add 10 lines of Skeleton*/}
                <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg" mt="lg">
                    {REPOS.map((repo) => (
                        <Card withBorder padding="xl" radius="md" onClick={(e) => {
                            console.log("Card clicked!");
                        }}>
                            <Card.Section
                                h={80}
                                style={{
                                    // backgroundImage:'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                                }}
                            />
                            <Avatar
                                // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
                                src={repo.owner.avatar_url}
                                size={80}
                                // radius={8}
                                mx="auto"
                                mt={-40}
                            />
                            <Text ta="center" size="lg" fw={700} mt="sm" tt="uppercase">
                                {repo.name}
                            </Text>
                            <Text ta="center" size="xs" tt="uppercase">
                                {repo.owner.login}
                            </Text>
                            <Text mt="xs" c="dimmed" size="sm" lineClamp={2}>
                                {repo.description}
                            </Text>
                            <Group mt="md" justify="space-evenly">
                                <Stack>
                                    <Text ta="center" fz="lg">
                                        <NumberFormatter value={repo.stargazers_count} thousandSeparator/>
                                    </Text>
                                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                        Stars
                                    </Text>
                                </Stack>
                                <Stack>
                                    <Text ta="center" fz="lg">
                                        <NumberFormatter value={repo.forks_count} thousandSeparator/>
                                    </Text>
                                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                        Forks
                                    </Text>
                                </Stack>
                                <Stack>
                                    <Text ta="center" fz="lg">
                                        <NumberFormatter value={repo.open_issues_count} thousandSeparator/>
                                    </Text>
                                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                        Open Issues
                                    </Text>
                                </Stack>
                            </Group>
                            <Group justify="flex-end" gap="sm" mt="xl">
                                <ActionIcon variant="default" size="xl"
                                            component="a"
                                            href={repo.homepage}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                console.log("ActionIcon clicked!");
                                            }}
                                            target="_blank" rel="noopener noreferrer"
                                >
                                    <IconWorld style={{width: rem(20)}} stroke={1.5}/>
                                </ActionIcon>
                                <ActionIcon variant="default" size="xl"
                                            component="a"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                console.log("ActionIcon clicked!");
                                            }}
                                            href={repo.html_url}
                                            target="_blank" rel="noopener noreferrer"
                                >
                                    <IconBrandGithub style={{width: rem(20)}} stroke={1.5}/>
                                </ActionIcon>
                            </Group>

                            {/*<Button fullWidth radius="md" mt="xl" size="md" variant="default" onClick={(e) => {*/}
                            {/*    e.stopPropagation();*/}
                            {/*    console.log("Button Follow clicked!");*/}
                            {/*}}>*/}
                            {/*    Follow*/}
                            {/*</Button>*/}
                        </Card>
                    ))}
                </SimpleGrid>
            </Grid.Col>
        </Grid>
    </>
}
