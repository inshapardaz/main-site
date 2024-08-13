import React from "react";
import { useTranslation } from "react-i18next";

import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

import ArrowForward from '@mui/icons-material/ArrowForward';

import TwoSidedLayout from '/src/components/layout/twoSidedLayout';
import { AccountContext } from "/src/contexts";
//----------------------------------------------

const Home = () => {
    const { t } = useTranslation();
    const { authenticated } = React.useContext(AccountContext);

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                margin: '0 auto',
                overflowY: 'scroll',
                scrollSnapType: 'y mandatory',
                '& > div': {
                    scrollSnapAlign: 'start',
                },
            }}
        >
            <TwoSidedLayout>
                <Typography color="primary" fontSize="lg" fontWeight="lg">
                    {t('home.subHeading')}
                </Typography>
                <Typography
                    level="h1"
                    fontWeight="xl"
                    fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                    {t('home.heading')}
                </Typography>
                <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                    {t('home.description')}
                </Typography>
                <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}
                    onClick={() => window.location.href = "https://libraries.nawishta.co.uk"}>
                    {t('home.gettingStarted')}
                </Button>
                {!authenticated &&
                    <Typography>
                        {t('registerPage.alreadyAMember')} <Link fontWeight="lg" href="/account/login">{t('loginPage.title')}</Link>
                    </Typography>}
                <Typography
                    level="body-xs"
                    sx={{
                        position: 'absolute',
                        top: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                </Typography>
            </TwoSidedLayout>
        </Box>);
};

export default Home;
