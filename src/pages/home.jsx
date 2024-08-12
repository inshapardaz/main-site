import React from "react";
import { useTranslation } from "react-i18next";

import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

import ArrowForward from '@mui/icons-material/ArrowForward';

import TwoSidedLayout from '/src/components/layout/twoSidedLayout';
//----------------------------------------------

const Home = () => {
    const { t } = useTranslation();

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
                    The power to do more
                </Typography>
                <Typography
                    level="h1"
                    fontWeight="xl"
                    fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                    A large headlinerer about our product features & services
                </Typography>
                <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                    A descriptive secondary text placeholder. Use it to explain your business
                    offer better.
                </Typography>
                <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
                    Get Started
                </Button>
                <Typography>
                    Already a member? <Link fontWeight="lg">Sign in</Link>
                </Typography>
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
