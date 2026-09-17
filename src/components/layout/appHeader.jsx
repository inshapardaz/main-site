import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Ui Library Imports
import {
    Group,
    Divider,
    Container,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Title,
    ActionIcon,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';

// Local Imports
import classes from './appHeader.module.css';

import Profile from './profile';
import { IconChevronDown, IconBrandGithub } from '../icon';
import LibrarySwitcher from '@/components/libraries/librarySwitcher';
import { LIBRARY_EDITOR_URL, TOOLS_URL, GITHUB_ORG_URL } from "@/config";

//----------------------------------------------

const AppHeader = () => {
    const { t } = useTranslation();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return (
        <header className={classes.header}>
            <Container size="lg" className={classes.inner}>
                <Link to="/" className={classes.brand}>
                    <i className={classes.logo} />
                    <Title order={4} className={classes.brandEn}>{t('brand.en')}</Title>
                </Link>

                <Group gap={5} visibleFrom="sm">
                    <LibrarySwitcher className={classes.link}>
                        {t('header.libraries')}
                        <IconChevronDown size={14} className={classes.navChevron} />
                    </LibrarySwitcher>
                    <Link to={LIBRARY_EDITOR_URL} className={classes.link}>
                        {t('header.editor')}
                    </Link>
                    <Link to="/maktaba" className={classes.link}>
                        {t('header.maktaba')}
                    </Link>
                    <Link to={TOOLS_URL} className={classes.link}>
                        {t('header.tools')}
                    </Link>
                </Group>

                <Group visibleFrom="sm" gap="sm" wrap="nowrap">
                    <Profile />
                    <ActionIcon
                        component="a"
                        href={GITHUB_ORG_URL}
                        target="_blank"
                        rel="noreferrer"
                        variant="default"
                        size="lg"
                        radius="md"
                        aria-label="GitHub"
                    >
                        <IconBrandGithub size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>

                <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" size="sm" aria-label="Toggle navigation" />
            </Container>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title={t('app')}
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <LibrarySwitcher>
                        <Group className={classes.drawerLink}>
                            {t('header.libraries')}
                            <IconChevronDown size={14} />
                        </Group>
                    </LibrarySwitcher>
                    <Link to={LIBRARY_EDITOR_URL} className={classes.drawerLink}>
                        {t('header.editor')}
                    </Link>
                    <Link to="/maktaba" className={classes.drawerLink}>
                        {t('header.maktaba')}
                    </Link>
                    <Link to={TOOLS_URL} className={classes.drawerLink}>
                        {t('header.tools')}
                    </Link>

                    <Divider my="sm" />

                    <Group justify="center" my="sm">
                        <ActionIcon
                            component="a"
                            href={GITHUB_ORG_URL}
                            target="_blank"
                            rel="noreferrer"
                            variant="default"
                            size="lg"
                            radius="md"
                            aria-label="GitHub"
                        >
                            <IconBrandGithub size={18} stroke={1.5} />
                        </ActionIcon>
                    </Group>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Profile />
                    </Group>
                </ScrollArea>
            </Drawer>
        </header>
    );
}

export default AppHeader;
