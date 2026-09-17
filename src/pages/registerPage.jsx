import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

// 3rd part library
import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
    Box,
    LoadingOverlay,
    Loader,
    Space,
    Alert,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

// Local imports
import classes from './loginPage.module.css';
import { useRegisterMutation } from "@/store/slices/auth.api";
import { IconInfoCircle } from '@/components/icon';

//-----------------------------------------

const RegisterPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [busy, handlers] = useDisclosure(false);
    const [register, { isLoading: isLoading }] = useRegisterMutation();

    const [searchParams] = useSearchParams();
    const code = searchParams.get('code') || '';
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

        validate: {
            name: (value) => (value == null || value == '' ? t('register.name.required') : null),
            email: (value) => {
                if (!value) {
                    return t('register.email.required');
                }

                return (/^\S+@\S+$/.test(value) ? null : t('register.email.error'));
            },
            password: (value) => (value == null || value == '' ? t('register.password.required') : null),
            confirmPassword: (value, values) => {
                if (value == null || value == '')
                    return t('register.confirmPassword.required')
                if (value !== values.password)
                    return t('register.confirmPassword.match')
                return null;
            },
        }
    });

    const onSubmit = ({ name, password }) => {
        handlers.open()
        setError(false)
        // Creating an account implies agreement to the Terms & Privacy Policy
        // linked directly below the submit button (no separate checkbox).
        register({ code, name, password, acceptTerms: true })
            .unwrap()
            .then(() => {
                notifications.show({
                    message: t('register.success'),
                    autoClose: 5000,
                    withBorder: true
                })
                navigate('/')
            })
            .catch(() => setError(true))
            .finally(() => handlers.close())
    };

    const errorMessage = error ?
        <>
            <Space h="md" />

            <Alert variant="white" color="red" title={t('register.error')}
                icon={<IconInfoCircle size={16} stroke={1.5} />}
                type="error" />
        </>
        : null

    return (
        <Box pos="relative">
            <LoadingOverlay visible={busy || isLoading} loaderProps={{ children: <Loader size={30} /> }} />
            <form onSubmit={form.onSubmit(onSubmit)}>
                <Container size={420} className={classes.container}>
                    <Paper shadow="md" p={40} radius="lg">
                        <Title className={classes.title}>
                            {t('register.heading')}
                        </Title>
                        <Text c="dimmed" size="sm" mt={4}>
                            {t('register.subtitle')}
                        </Text>

                        <TextInput
                            mt="xl"
                            label={t('register.name.label')}
                            placeholder={t('register.name.placeholder')}
                            key={form.key('name')}
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            mt="md"
                            label={t('register.email.label')}
                            placeholder={t('register.email.placeholder')}
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput
                            mt="md"
                            label={t('register.password.label')}
                            key={form.key('password')}
                            {...form.getInputProps('password')}
                        />
                        <PasswordInput
                            mt="md"
                            label={t('register.confirmPassword.label')}
                            key={form.key('confirmPassword')}
                            {...form.getInputProps('confirmPassword')}
                        />
                        {errorMessage}

                        <Button fullWidth mt="lg" color="red" type='submit'>
                            {t('register.submit')}
                        </Button>

                        <Text c="dimmed" size="sm" ta="center" mt="lg">
                            {t('register.agreementPrefix')}{' '}
                            <Anchor size="sm" c="red" component={Link} to="/terms">
                                {t('footer.terms')}
                            </Anchor>
                            {' '}{t('register.agreementAnd')}{' '}
                            <Anchor size="sm" c="red" component={Link} to="/privacy">
                                {t('register.privacyPolicy')}
                            </Anchor>.
                        </Text>

                        <Text c="dimmed" size="sm" ta="center" mt="md">
                            {t('register.loginMessage')}{' '}
                            <Anchor size="sm" c="red" component={Link} to="/account/login">
                                {t('login.submit')}
                            </Anchor>
                        </Text>
                    </Paper>
                </Container>
            </form>
        </Box >
    );
}

export default RegisterPage;
