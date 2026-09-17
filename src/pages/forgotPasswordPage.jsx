import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ui libraries
import {
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Anchor,
    Box,
    Alert,
    LoadingOverlay,
    Loader,
    Space,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

// Local Import
import classes from './loginPage.module.css';
import { useForgetPasswordMutation } from '@/store/slices/auth.api';
import { IconInfoCircle } from '@/components/icon';
//-------------------------------

const ForgotPasswordPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const [busy, handlers] = useDisclosure(false);
    const [forgotPassword, { isLoading: isLoading }] = useForgetPasswordMutation();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: ''
        },

        validate: {
            email: (value) => {
                if (!value) {
                    return t('forgotPassword.email.required');
                }

                return (/^\S+@\S+$/.test(value) ? null : t('forgotPassword.email.error'));
            }
        }
    });

    const onSubmit = ({ email }) => {
        handlers.open()
        setError(false)
        forgotPassword({ email })
            .unwrap()
            .then(() => {
                notifications.show({
                    message: t('forgotPassword.success'),
                    autoClose: 5000,
                    withBorder: true
                })
                navigate('/account/login')
            })
            .catch(() => setError(true))
            .finally(() => handlers.close())
    };

    const errorMessage = error ? (
        <>
            <Space h="md" />
            <Alert variant="light" color="red" title={t('forgotPassword.error')}
                icon={<IconInfoCircle />}
                type="error" />
        </>)
        : null

    return (
        <Box pos="relative">
            <LoadingOverlay visible={busy || isLoading} loaderProps={{ children: <Loader size={30} /> }} />
            <form onSubmit={form.onSubmit(onSubmit)}>
                <Container size={420} className={classes.container}>
                    <Paper shadow="md" p={40} radius="lg">
                        <Title className={classes.title}>
                            {t('forgotPassword.heading')}
                        </Title>
                        <Text c="dimmed" size="sm" mt={4}>
                            {t('forgotPassword.message')}
                        </Text>

                        <TextInput
                            mt="xl"
                            label={t('forgotPassword.email.title')}
                            placeholder={t('forgotPassword.email.placeholder')}
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                        />
                        {errorMessage}
                        <Button fullWidth mt="lg" type="submit">
                            {t('forgotPassword.submit')}
                        </Button>
                        <Text ta="center" mt="lg">
                            <Anchor size="sm" component={Link} to="/account/login">
                                {t('forgotPassword.backToLogin')}
                            </Anchor>
                        </Text>
                    </Paper>
                </Container>
            </form>
        </Box>
    );
}

export default ForgotPasswordPage;
