import React from "react";
import { useTranslation } from "react-i18next";
//----------------------------------

import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import IconButton from "@mui/joy/IconButton";

// Icons
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
//----------------------------------
const LanguageSelector = (props) => {
    const { ...other } = props;
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.body.dir = i18n.dir();
        window.localStorage.i18nextLng = lng;
    };

    console.dir(i18n);

    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { ...other } }}
            >
                <LanguageRoundedIcon />
            </MenuButton>
            <Menu>
                <MenuItem
                    selected={i18n.language === "en"}
                    onClick={() => changeLanguage("en")}
                >
                    EN
                </MenuItem>
                <MenuItem
                    selected={i18n.language === "ur"}
                    onClick={() => changeLanguage("ur")}
                >
                    UR
                </MenuItem>
            </Menu>
        </Dropdown>
    );
};

export default LanguageSelector;
