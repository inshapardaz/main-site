import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

// Ui Library imports
import {
    Text,
    Button,
    UnstyledButton,
    Group,
    rem,
    Collapse,
    Center,
    Card,
    Anchor,
    SimpleGrid,
    Divider,
    Popover
}
    from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

// Local Imports
import { useGetLibrariesQuery } from '@/store/slices/libraries.api'
import classes from './librarySwitcher.module.css';
import { IconRefreshAlert, IconLibrary, IconLibraryEditor } from '@/components/icon';
import If from '@/components/if';
import { LIBRARIES_URL, LIBRARY_EDITOR_URL } from "@/config";

//------------------------------------

const LibrarySwitcher = ({ className, onClick = () => { }, children }) => {
    const { t } = useTranslation();
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { data: libraries, isFetching, isError: errorLoadingLibraries, refetch: refetchLibraries } = useGetLibrariesQuery({})
    const canEdit = useMemo(() => {
        if (libraries?.data) {
            return libraries.data.some((item) => item.links.update);
        }
        return false;
    }, [libraries]);

    if (errorLoadingLibraries) {
        return <Button onClick={refetchLibraries}
            leftSection={<IconRefreshAlert style={{ color: 'var(--mantine-color-red-9)' }} />}
        />
    }

    const links = libraries ? libraries.data.map((item) => (
        <UnstyledButton key={item.id} className={classes.item} onClick={onClick}
            component={Link} to={`${LIBRARIES_URL}/libraries/${item.id}`}>
            <IconLibrary style={{
                width: rem(22), height: rem(22)
            }} />
            <Text size="xs" mt={7}>
                {item.name}
            </Text>
        </UnstyledButton>
    )) : [];


    return (
        <>
            <Popover width={600} position="bottom" radius="md" shadow="md" mx="md" disabled={isFetching} withinPortal visibleFrom="sm" >
                <Popover.Target>
                    <Center className={className}>
                        {children}
                    </Center>
                </Popover.Target>

                <Popover.Dropdown style={{ overflow: 'hidden' }}>
                    <Card radius="md" className={classes.card}>
                        <Group justify="space-between">
                            <Text visibleFrom="lg" fw={500} className={classes.title}>
                            </Text>
                            <Anchor size="xs" component={Link} to={`${LIBRARIES_URL}`} c="dimmed" style={{ lineHeight: 1 }}>
                                {t('libraries.viewAll')}
                            </Anchor>
                        </Group>
                        <Divider my="sm" />
                        <SimpleGrid cols={3} mt="md">
                            {links}
                        </SimpleGrid>
                    </Card>
                    <If condition={canEdit}>
                        <div className={classes.dropdownFooter}>
                            <Group justify="space-between">
                                <div>
                                    <Group>
                                        <IconLibraryEditor height="24px" />
                                        <Text fw={500} fz="sm">
                                            {t('libraryEditor.title')}
                                        </Text>
                                    </Group>
                                    <Text size="xs" c="dimmed">
                                        {t('libraryEditor.edit')}
                                    </Text>
                                </div>
                                <Button variant="default"
                                    component={Link}
                                    to={LIBRARY_EDITOR_URL}>
                                    {t('libraryEditor.title')}
                                </Button>
                            </Group>
                        </div>
                    </If>
                </Popover.Dropdown>
            </Popover>
            <UnstyledButton className={classes.link} onClick={toggleLinks} hiddenFrom="sm">
                {children}
            </UnstyledButton>
            <Collapse in={linksOpened} hiddenFrom="sm">{links}</Collapse>
        </>);
}

LibrarySwitcher.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
};

export default LibrarySwitcher;
