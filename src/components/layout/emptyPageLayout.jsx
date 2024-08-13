import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

// Joy Import
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

// Icons
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";

// Local Imports
import ColorSchemeToggle from "/src/components/colorSchemeToggle";
import LanguageSelector from "/src/components/languageSelector";
//----------------------------------------------

const EmptyPageLayout = () => {
    const { t } = useTranslation();

    return (
        <>
            <Box
                sx={(theme) => ({
                    width: { xs: "100%", md: "50vw" },
                    transition: "width var(--Transition-duration)",
                    transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "flex-end",
                    backdropFilter: "blur(12px)",
                    backgroundColor: "rgba(255 255 255 / 0.2)",
                    [theme.getColorSchemeSelector("dark")]: {
                        backgroundColor: "rgba(19 19 24 / 0.4)",
                    },
                })}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100dvh",
                        width: "100%",
                        px: 2,
                    }}
                >
                    <Box
                        component="header"
                        sx={{
                            py: 3,
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                gap: 2,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <IconButton
                                variant="soft"
                                color="primary"
                                size="sm"
                            >
                                <BadgeRoundedIcon />
                            </IconButton>
                            <Typography level="title-lg">{t("app")}</Typography>
                        </Box>
                        <Stack direction="row">
                            <ColorSchemeToggle variant="plain" />
                            <LanguageSelector variant="plain" />
                        </Stack>
                    </Box>
                    <Box
                        component="main"
                        sx={{
                            my: "auto",
                            py: 2,
                            pb: 5,
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            width: 400,
                            maxWidth: "100%",
                            mx: "auto",
                            borderRadius: "sm",
                            "& form": {
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            },
                            [`& .MuiFormLabel-asterisk`]: {
                                visibility: "hidden",
                            },
                        }}
                    >
                        <Outlet />
                    </Box>
                    <Box component="footer" sx={{ py: 3 }}>
                        <Typography level="body-xs" textAlign="center">
                            © {t("app")} {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={(theme) => ({
                    height: "100%",
                    position: "fixed",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    left: { xs: 0, md: "50vw" },
                    transition:
                        "background-image var(--Transition-duration), left var(--Transition-duration) !important",
                    transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
                    backgroundColor: "background.level1",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
                    [theme.getColorSchemeSelector("dark")]: {
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)",
                    },
                })}
            />
        </>
    );
};

export default EmptyPageLayout;
