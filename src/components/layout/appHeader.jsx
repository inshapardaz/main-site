import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Ui Library Imports
import {
    Group,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Title,
    Text,
    ActionIcon,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';

// Local Imports
import classes from './appHeader.module.css';

import LanguageSwitch from './languageSwitch';
import DarkModeToggle from './darkModeToggle';
import Profile from './profile';
import { IconChevronDown, IconBrandGithub } from '../icon';
import LibrarySwitcher from '@/components/libraries/librarySwitcher';
import { LIBRARY_EDITOR_URL, TOOLS_URL, GITHUB_ORG_URL } from "@/config";

//----------------------------------------------

const AppHeader = () => {
    const { t } = useTranslation();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return (
        <Box>
            <header className={classes.header}>
                <Group justify="space-between" h="100%" wrap="nowrap">
                    <Link to="/" className={classes.brand}>
                        <Title order={4} className={classes.brandEn}>{t('brand.en')}</Title>
                        <Text className={classes.brandUr}>{t('brand.ur')}</Text>
                    </Link>

                    <Group h="100%" gap={0} visibleFrom="sm" className={classes.nav}>
                        <LibrarySwitcher className={classes.navLink}>
                            {t('header.libraries')}
                            <IconChevronDown size={14} className={classes.navChevron} />
                        </LibrarySwitcher>
                        <Link to={LIBRARY_EDITOR_URL} className={classes.navLink}>
                            {t('header.editor')}
                        </Link>
                        <Link to="/maktaba" className={classes.navLink}>
                            {t('header.maktaba')}
                        </Link>
                        <Link to={TOOLS_URL} className={classes.navLink}>
                            {t('header.tools')}
                        </Link>
                    </Group>

                    <Group visibleFrom="sm" gap="sm" wrap="nowrap">
                        <LanguageSwitch />
                        <DarkModeToggle />
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

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

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
                        <Group className={classes.link}>
                            {t('header.libraries')}
                            <IconChevronDown size={14} />
                        </Group>
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

                    <Divider my="sm" />

                    <Group my="sm">
                        <LanguageSwitch />
                        <DarkModeToggle />
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
        </Box >
    );
}

export default AppHeader;
