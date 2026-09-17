import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Ui Library Imports
import { Container, Title, Text } from '@mantine/core';

// Local Imports
import classes from './authHeader.module.css';

//----------------------------------------------

const AuthHeader = () => {
    const { t } = useTranslation();

    return (
        <header className={classes.header}>
            <Container size="lg" className={classes.inner}>
                <Link to="/" className={classes.brand}>
                    <i className={classes.logo} />
                    <Title order={4} className={classes.brandEn}>{t('brand.en')}</Title>
                    <Text className={classes.brandUr}>{t('brand.ur')}</Text>
                </Link>
            </Container>
        </header>
    );
}

export default AuthHeader;
