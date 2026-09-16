import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

// UI libraries
import { createTheme, DirectionProvider, Loader, LoadingOverlay, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';

// Local imports
import Router from "./router";
import { selectedLanguage } from "@/store/slices/uiSlice";
import { init } from './store/slices/authSlice';
// ------------------------------------------------------------------

function App() {
    const lang = useSelector(selectedLanguage);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const theme = createTheme({
        // fontFamily: 'MehrNastaleeq, Segoe UI, sans-serif',
        primaryColor: 'red',
        scale: 0.9
    });

    useEffect(() => {
        dispatch(init());
    }, [dispatch]);

    return (
        <HelmetProvider>
            <Helmet htmlAttributes={{ lang: lang ? lang.locale : 'en' }}>
                <title>{t('app')}</title>
            </Helmet>
            <DirectionProvider >
                <MantineProvider theme={theme}>
                    <Notifications limit={5} position="bottom-center" />
                    <ModalsProvider>
                        <LoadingOverlay visible={status === 'loading'} loaderProps={{ children: <Loader size={30} /> }} />
                        <Router />
                    </ModalsProvider>
                </MantineProvider>;
            </DirectionProvider>
        </HelmetProvider>
    )
}

export default App
