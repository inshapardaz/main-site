import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

// joy imports
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";

// Local Imports
import AuthService from "../services/auth.service";
import { AccountContext } from "/src/contexts";
//----------------------------------------------

const LoginPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { authenticated, setAuthenticated } = useContext(AccountContext);
    const onSubmit = (event) => {
        event.preventDefault();
        const formElements = event.currentTarget.elements;
        AuthService.Login({
            email: formElements.email.value,
            password: formElements.password.value,
        }).then(() => {
            setAuthenticated(true);
            navigateAway();
        });
    };

    const navigateAway = () => {
        navigate("/");
    };

    useEffect(() => {
        if (authenticated) {
            navigateAway();
        }
    }, []);

    return (
        <>
            <Stack gap={4} sx={{ mb: 2 }}>
                <Stack gap={1}>
                    <Typography component="h1" level="h3">
                        {t("forgotPasswordPage.title")}
                    </Typography>
                    <Typography level="body-sm">
                        {t("forgotPasswordPage.subTitle")}{" "}
                    </Typography>
                </Stack>
            </Stack>
            <Stack gap={4} sx={{ mt: 2 }}>
                <form onSubmit={onSubmit}>
                    <FormControl required>
                        <FormLabel>{t("loginPage.email.label")}</FormLabel>
                        <Input type="email" name="email" />
                    </FormControl>
                    <Stack gap={4} sx={{ mt: 2 }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Link to="/account/login">
                                {t("loginPage.title")}
                            </Link>
                        </Box>
                        <Button type="submit" fullWidth>
                            {t("loginPage.actions.signIn.label")}
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </>
    );
};

export default LoginPage;
