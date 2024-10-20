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
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';

// Local Imports
import classes from './appHeader.module.css';

import Logo from '../logo';
import LanguageSwitch from './languageSwitch';
import DarkModeToggle from './darkModeToggle';
import Profile from './profile';
import { IconBooks, IconDictionary, IconFont, IconHome, IconTools } from '../icon';
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
            <Link to="https://libraries.nawishta.co.uk" className={classes.link}>
              <IconBooks size={18} stroke={1.5} />
              <Space w="md" />
              {t('header.libraries')}
            </Link>
            <Link to="https://dictionaries.nawishta.co.uk" className={classes.link}>
              <IconDictionary size={18} stroke={1.5} />
              <Space w="md" />
              {t('header.dictionaries')}
            </Link>
            <Link to="https://fonts.nawishta.co.uk" className={classes.link}>
              <IconFont size={18} stroke={1.5} />
              <Space w="md" />
              {t('header.fonts')}
            </Link>
            <Link to="https://tools.nawishta.co.uk" className={classes.link}>
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
          <Link to="https://libraries.nawishta.co.uk" className={classes.link}>
            <IconBooks size={18} stroke={1.5} />
            <Space w="md" />
            {t('header.libraries')}
          </Link>
          <Link to="https://dictionaries.nawishta.co.uk" className={classes.link}>
            <IconDictionary size={18} stroke={1.5} />
            <Space w="md" />
            {t('header.dictionaries')}
          </Link>
          <Link to="https://fonts.nawishta.co.uk" className={classes.link}>
            <IconFont size={18} stroke={1.5} />
            <Space w="md" />
            {t('header.fonts')}
          </Link>
          <Link to="https://tools.nawishta.co.uk" className={classes.link}>
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