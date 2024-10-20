// Ui Library Imports
import { Container, Group } from '@mantine/core';

// Local Imports
import Logo from '../logo';
import LanguageSwitch from './languageSwitch';
import DarkModeToggle from './darkModeToggle';

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
        <Group>
          <LanguageSwitch />
          <DarkModeToggle />
        </Group>
      </Container>
    </div>
  );
}


export default AppFooter;