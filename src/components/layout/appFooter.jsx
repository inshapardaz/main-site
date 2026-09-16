// Ui Library Imports
import { Anchor, Container, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

// Local Imports
import Logo from '../logo';
import LanguageSwitch from './languageSwitch';
import DarkModeToggle from './darkModeToggle';
import { IconBrandGithub } from '../icon';
import { GITHUB_ORG_URL } from '@/config';

import classes from './appFooter.module.css';
import { useTranslation } from 'react-i18next';
//----------------------------------------------

const AppFooter = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
          <Logo showName={false} />
          {t('footer.copyrights')}
        </Group>
        <Group className={classes.links} gap="lg">
          <Anchor component={Link} to="/terms" c="dimmed" size="sm">
            {t('footer.terms')}
          </Anchor>
          <Anchor component={Link} to="/privacy" c="dimmed" size="sm">
            {t('footer.privacy')}
          </Anchor>
          <Anchor href={GITHUB_ORG_URL} target="_blank" rel="noreferrer" c="dimmed">
            <IconBrandGithub size={20} stroke={1.5} />
          </Anchor>
        </Group>
        <Group>
          <LanguageSwitch />
          <DarkModeToggle />
        </Group>
      </Container>
    </div>
  );
}


export default AppFooter;