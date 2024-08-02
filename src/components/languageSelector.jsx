import React from "react";
import { useTranslation } from "react-i18next";
//----------------------------------

import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";

// Icons
import LanguageIcon from "@mui/icons-material/Language";
//----------------------------------
const LanguageSelector = (props) => {
    const { ...other } = props;
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.body.dir = i18n.dir();
    };

    console.dir(i18n);

    return (
        <Dropdown>
            <MenuButton {...other}>
                <LanguageIcon />
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
