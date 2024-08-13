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

import PersonIcon from '@mui/icons-material/Person';
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BookIcon from '@mui/icons-material/Book';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PasswordIcon from '@mui/icons-material/Password';
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

    const links = [{
        text: t('header.links.libraries'),
        to: 'https://libraries.nawishta.co.uk/',
        icon: <AccountBalanceIcon />
    }, {
        text: t('header.links.dictionaries'),
        to: 'https://dictionary.nawishta.co.uk',
        icon: <BookIcon />
    }, {
        text: t('header.links.fonts'),
        to: 'https://fonts.nawishta.co.uk',
        icon: <FontDownloadIcon />
    }, {
        text: t('header.links.tools'),
        to: 'https://tools.nawishta.co.uk',
        icon: <HomeRepairServiceIcon />
    }];

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

    const userAvatar = () => {
        if (authenticated) {
            return (<Avatar alt={user.name} sx={{ borderRadius: "50%" }}>
                {user.name.substring(0, 2).toUpperCase()}
            </Avatar>);
        }

        return (<Avatar sx={{ borderRadius: "50%" }}>
            <PersonIcon />
        </Avatar>);
    }

    const userInfo = () => {
        if (authenticated) {
            return (<>
                {userAvatar()}
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
                </Box></>);
        }

        return (<>
            {userAvatar()}
            <Box sx={{ ml: 1.5 }}>
                <Typography
                    level="title-sm"
                    textColor="text.primary"
                >
                    {t('header.welcomeGuest')}
                </Typography>
            </Box></>
        );
    }


    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
            }}
        >
            <Box>
                <span className="header__logo">
                    <i className="header__logoImg" />
                    {t('app')}
                </span>
            </Box>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{ display: { xs: "none", sm: "flex" } }}
            >
                {links.map(l =>
                    <Button
                        key={l.text}
                        variant="plain"
                        color="neutral"
                        component="a"
                        href={l.to}
                        size="sm"
                        sx={{ alignSelf: "center" }}
                        startDecorator={l.icon}
                    >
                        {l.text}
                    </Button>
                )}
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
                        {userAvatar()}
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
                                {userInfo()}
                            </Box>
                        </MenuItem>
                        <ListDivider />
                        <MenuItem>
                            <HelpRoundedIcon />
                            {t('header.help')}
                        </MenuItem>
                        <MenuItem>
                            <SettingsRoundedIcon />
                            {t('header.settings')}
                        </MenuItem>
                        {authenticated &&
                            <MenuItem>
                                <PasswordIcon />
                                {t('header.changePassword')}
                            </MenuItem>
                        }
                        <ListDivider />
                        {loginButton}
                    </Menu>
                </Dropdown>
            </Box>
        </Box>
    );
};

export default Header;
