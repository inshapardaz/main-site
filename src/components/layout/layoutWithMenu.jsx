import React from "react";
import { Link, Outlet } from "react-router-dom";
import i18n from "/src/i18n";
import { useTranslation } from "react-i18next";

//----------------------------------------------

const LayoutWithMenu = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="header">
                <h1>{t("app")}</h1>
                <button onClick={() => i18n.changeLanguage("en")}>en</button>
                <button onClick={() => i18n.changeLanguage("ur")}>ur</button>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <Outlet />
        </>
    );
};

export default LayoutWithMenu;
