import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Ui Library Imports
import { Anchor, Container, Group } from '@mantine/core';

// Local Imports
import LanguageSwitch from './languageSwitch';
import DarkModeToggle from './darkModeToggle';
import classes from './authFooter.module.css';

//----------------------------------------------

const AuthFooter = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.footer}>
            <Container size="lg" className={classes.inner}>
                <Group gap="lg">
                    <Anchor component={Link} to="/terms" c="dimmed" size="sm">
                        {t('footer.terms')}
                    </Anchor>
                    <Anchor component={Link} to="/privacy" c="dimmed" size="sm">
                        {t('footer.privacy')}
                    </Anchor>
                </Group>
                <Group gap="sm">
                    <LanguageSwitch />
                    <DarkModeToggle />
                </Group>
            </Container>
        </div>
    );
}

export default AuthFooter;
