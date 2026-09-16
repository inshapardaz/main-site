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
    Space,
    Text,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';

// Local Imports
import classes from './appHeader.module.css';

import Logo from '../logo';
import LanguageSwitch from './languageSwitch';
import DarkModeToggle from './darkModeToggle';
import Profile from './profile';
import { IconLibrary, IconLibraryEditor, IconDictionary, IconFont, IconHome, IconTools, IconDeviceDesktop, IconChevronDown } from '../icon';
import LibrarySwitcher from '@/components/libraries/librarySwitcher';
import { DICTIONARY_URL, LIBRARY_EDITOR_URL, FONTS_URL, TOOLS_URL } from "@/config";

//----------------------------------------------

const AppHeader = () => {
    const { t } = useTranslation();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return (
        <Box>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Group>
                        <Logo showName />
                    </Group>
                    <Group h="100%" gap={0} visibleFrom="sm">
                        <Link to="/" className={classes.link}>
                            <IconHome size={18} stroke={1.5} />
                            <Space w="md" />
                            {t('header.home')}
                        </Link>
                        <LibrarySwitcher className={classes.link} >
                            <IconLibrary height="24px" />
                            <Space w="md" />
                            <Text visibleFrom="lg" size="xs">
                                {t('header.libraries')}
                            </Text>
                            <IconChevronDown size={16} />
                        </LibrarySwitcher>
                        <Link to={LIBRARY_EDITOR_URL} className={classes.link}>
                            <IconLibraryEditor size={18} stroke={1.5} />
                            <Space w="md" />
                            {t('header.editor')}
                        </Link>
                        <Link to="/maktaba" className={classes.link}>
                            <IconDeviceDesktop size={18} stroke={1.5} />
                            <Space w="md" />
                            {t('header.maktaba')}
                        </Link>
                        <Link to={DICTIONARY_URL} className={classes.link}>
                            <IconDictionary size={18} stroke={1.5} />
                            <Space w="md" />
                            {t('header.dictionaries')}
                        </Link>
                        <Link to={FONTS_URL} className={classes.link}>
                            <IconFont size={18} stroke={1.5} />
                            <Space w="md" />
                            {t('header.fonts')}
                        </Link>
                        <Link to={TOOLS_URL} className={classes.link}>
                            <IconTools size={18} stroke={1.5} />
                            <Space w="md" />
                            {t('header.tools')}
                        </Link>
                    </Group>
                    <Group visibleFrom="sm">
                        <LanguageSwitch />
                        <DarkModeToggle />
                        <Profile />
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

                    <Link to="/" className={classes.link}>
                        <IconHome size={18} stroke={1.5} />
                        <Space w="md" />
                        {t('header.home')}
                    </Link>
                    <LibrarySwitcher >
                        <Group className={classes.link}>
                            <IconLibrary height="24px" />
                            {t('header.libraries')}
                            <IconChevronDown />
                        </Group>
                    </LibrarySwitcher>
                    <Link to={LIBRARY_EDITOR_URL} className={classes.link}>
                        <IconLibraryEditor size={18} stroke={1.5} />
                        <Space w="md" />
                        {t('header.editor')}
                    </Link>
                    <Link to="/maktaba" className={classes.link}>
                        <IconDeviceDesktop size={18} stroke={1.5} />
                        <Space w="md" />
                        {t('header.maktaba')}
                    </Link>
                    <Link to={DICTIONARY_URL} className={classes.link}>
                        <IconDictionary size={18} stroke={1.5} />
                        <Space w="md" />
                        {t('header.dictionaries')}
                    </Link>
                    <Link to={FONTS_URL} className={classes.link}>
                        <IconFont size={18} stroke={1.5} />
                        <Space w="md" />
                        {t('header.fonts')}
                    </Link>
                    <Link to={TOOLS_URL} className={classes.link}>
                        <IconTools size={18} stroke={1.5} />
                        <Space w="md" />
                        {t('header.tools')}
                    </Link>

                    <Divider my="sm" />

                    <Group my="sm" >
                        <LanguageSwitch />
                        <DarkModeToggle />
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
