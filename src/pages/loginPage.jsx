import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// 3rd part library
import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Box,
    LoadingOverlay,
    Loader,
    Alert,
    Space,
} from '@mantine/core';
import { useForm } from '@mantine/form';

// Local imports
import { login, reset, getLoginStatus, getLoginError } from '@/store/slices/authSlice'
import classes from './loginPage.module.css';
import { IconInfoCircle } from '@/components/icon';

//--------------------------------
const LoginPage = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const loginStatus = useSelector(getLoginStatus)
    const loginError = useSelector(getLoginError)
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const returnUrl = searchParams.get("returnUrl");

    useEffect(() => {
        if (user) {
            if (returnUrl) {
                window.location.href = returnUrl;
            } else {
                navigate('/')
            }
        }
    });

    useEffect(() => {
        if (loginStatus === "succeeded") {
            if (returnUrl) {
                window.location.href = returnUrl;
            } else {
                navigate('/')
            }
        }
        else {
            dispatch(reset())
        }

    }, [dispatch, loginStatus, navigate, returnUrl])

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: ''
        },

        validate: {
            email: (value) => {
                if (!value) {
                    return t('login.email.required');
                }

                return (/^\S+@\S+$/.test(value) ? null : t('login.email.error'));
            },
            password: (value) => (value == null ? t('login.password.required') : null)
        }
    });


    const onSubmit = async ({ email, password }) => {
        await dispatch(login({ email, password }))
    };

    const errorMessage = loginError ? (
        <>
            <Space h="md" />
            <Alert variant="light" color="red" title={t('login.error')}
                icon={<IconInfoCircle size={16} stroke={1.5} />}
                type="error" />
        </>)
        : null

    return (
        <Box pos="relative">
            <form onSubmit={form.onSubmit(onSubmit)}>
                <LoadingOverlay visible={loginStatus === 'loading'} loaderProps={{ children: <Loader size={30} /> }} />
                <Container size={420} className={classes.container}>
                    <Paper shadow="md" p={40} radius="lg">
                        <Title className={classes.title}>
                            {t('login.message')}
                        </Title>
                        <Text c="dimmed" size="sm" mt={4}>
                            {t('login.subtitle')}
                        </Text>

                        <TextInput
                            mt="xl"
                            label={t('login.email.title')}
                            placeholder={t('login.email.placeholder')}
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput
                            mt="md"
                            label={t('login.password.title')}
                            key={form.key('password')}
                            {...form.getInputProps('password')}
                        />
                        {errorMessage}
                        <Group justify="flex-end" mt="sm">
                            <Anchor size="sm" component={Link} to="/account/forgot-password">
                                {t('forgotPassword.title')}
                            </Anchor>
                        </Group>
                        <Button fullWidth mt="lg" type='submit'>
                            {t('login.submit')}
                        </Button>
                        <Text c="dimmed" size="sm" ta="center" mt="lg">
                            {t('login.registerMessage')}{' '}
                            <Anchor size="sm" component={Link} to="/account/register">
                                {t('login.createAccount')}
                            </Anchor>
                        </Text>
                    </Paper>
                </Container>
            </form>
        </Box>
    );
}

export default LoginPage;
