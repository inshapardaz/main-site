import * as React from "react";
import { useTranslation } from "react-i18next";

// Joy imports
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Avatar from "@mui/joy/Avatar";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Tooltip from "@mui/joy/Tooltip";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import ListDivider from "@mui/joy/ListDivider";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import DialogTitle from "@mui/joy/DialogTitle";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

// Local imports

import Navigation from "./navigation";
import ColorSchemeToggle from "/src/components/colorSchemeToggle";
import LanguageSelector from "/src/components/languageSelector";
import AuthService from "/src/services/auth.service";
import { AccountContext } from "/src/contexts";
import { getUser } from "/src/domain/repository/userRepository";
import { Link } from "react-router-dom";

//-----------------------------------------

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const { t } = useTranslation();
    const { authenticated, setAuthenticated } =
        React.useContext(AccountContext);
    const user = getUser();

    const loginButton = authenticated ? (
        <MenuItem
            onClick={() => {
                AuthService.Logout();
                setAuthenticated(true);
            }}
        >
            <LogoutRoundedIcon />
            {t("actions.logout")}
        </MenuItem>
    ) : (
        <MenuItem component={Link} to="/account/login">
            <LoginRoundedIcon />
            {t("actions.login")}
        </MenuItem>
    );
    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
            }}
        >
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{ display: { xs: "none", sm: "flex" } }}
            >
                <Button
                    variant="plain"
                    color="neutral"
                    component="a"
                    href="/joy-ui/getting-started/templates/email/"
                    size="sm"
                    sx={{ alignSelf: "center" }}
                >
                    Email
                </Button>
                <Button
                    variant="plain"
                    color="neutral"
                    component="a"
                    href="/joy-ui/getting-started/templates/team/"
                    size="sm"
                    sx={{ alignSelf: "center" }}
                >
                    Team
                </Button>
                <Button
                    variant="plain"
                    color="neutral"
                    aria-pressed="true"
                    component="a"
                    href="/joy-ui/getting-started/templates/files/"
                    size="sm"
                    sx={{ alignSelf: "center" }}
                >
                    Files
                </Button>
            </Stack>
            <Box sx={{ display: { xs: "inline-flex", sm: "none" } }}>
                <IconButton
                    variant="plain"
                    color="neutral"
                    onClick={() => setOpen(true)}
                >
                    <MenuRoundedIcon />
                </IconButton>
                <Drawer
                    sx={{ display: { xs: "inline-flex", sm: "none" } }}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <ModalClose />
                    <DialogTitle>Acme Co.</DialogTitle>
                    <Box sx={{ px: 1 }}>
                        <Navigation />
                    </Box>
                </Drawer>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.5,
                    alignItems: "center",
                }}
            >
                <Input
                    size="sm"
                    variant="outlined"
                    placeholder="Search anything…"
                    startDecorator={<SearchRoundedIcon color="primary" />}
                    endDecorator={
                        <IconButton
                            variant="outlined"
                            color="neutral"
                            sx={{ bgcolor: "background.level1" }}
                        >
                            <Typography level="title-sm" textColor="text.icon">
                                ⌘ K
                            </Typography>
                        </IconButton>
                    }
                    sx={{
                        alignSelf: "center",
                        display: {
                            xs: "none",
                            sm: "flex",
                        },
                    }}
                />
                <IconButton
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    sx={{
                        display: { xs: "inline-flex", sm: "none" },
                        alignSelf: "center",
                    }}
                >
                    <SearchRoundedIcon />
                </IconButton>
                <Tooltip title="Joy UI overview" variant="outlined">
                    <IconButton
                        size="sm"
                        variant="plain"
                        color="neutral"
                        component="a"
                        href="/blog/first-look-at-joy/"
                        sx={{ alignSelf: "center" }}
                    >
                        <BookRoundedIcon />
                    </IconButton>
                </Tooltip>
                <LanguageSelector
                    variant="outlined"
                    color="neutral"
                    sx={{
                        display: { xs: "none", sm: "inline-flex" },
                        borderRadius: "50%",
                    }}
                />
                <ColorSchemeToggle />
                <Dropdown>
                    <MenuButton
                        variant="plain"
                        size="sm"
                        sx={{
                            maxWidth: "32px",
                            maxHeight: "32px",
                            borderRadius: "9999999px",
                        }}
                    >
                        <Avatar alt={user.name} sx={{ borderRadius: "50%" }}>
                            {user.name.substring(0, 2).toUpperCase()}
                        </Avatar>
                    </MenuButton>
                    <Menu
                        placement="bottom-end"
                        size="sm"
                        sx={{
                            zIndex: "99999",
                            p: 1,
                            gap: 1,
                            "--ListItem-radius": "var(--joy-radius-sm)",
                        }}
                    >
                        <MenuItem>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Avatar
                                    alt={user.name}
                                    sx={{ borderRadius: "50%" }}
                                >
                                    {user.name.substring(0, 2).toUpperCase()}
                                </Avatar>
                                <Box sx={{ ml: 1.5 }}>
                                    <Typography
                                        level="title-sm"
                                        textColor="text.primary"
                                    >
                                        {user.name}
                                    </Typography>
                                    <Typography
                                        level="body-xs"
                                        textColor="text.tertiary"
                                    >
                                        {user?.email}
                                    </Typography>
                                </Box>
                            </Box>
                        </MenuItem>
                        <ListDivider />
                        <MenuItem>
                            <HelpRoundedIcon />
                            Help
                        </MenuItem>
                        <MenuItem>
                            <SettingsRoundedIcon />
                            Settings
                        </MenuItem>
                        <ListDivider />
                        {loginButton}
                    </Menu>
                </Dropdown>
            </Box>
        </Box>
    );
};

export default Header;
