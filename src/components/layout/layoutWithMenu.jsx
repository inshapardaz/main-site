import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import i18n from "/src/i18n";
import { useTranslation } from "react-i18next";

// Local imports
import AuthService from "/src/services/auth.service";
import { AccountContext } from "/src/contexts";
//----------------------------------------------

const LayoutWithMenu = () => {
    const { t } = useTranslation();
    const { authenticated, setAuthenticated } = useContext(AccountContext);

    const loginButton = authenticated ? (
        <button
            onClick={() => {
                AuthService.Logout();
                setAuthenticated(true);
            }}
        >
            {" "}
            Logout
        </button>
    ) : (
        <Link to="/account/login">Login</Link>
    );

    return (
        <>
            <div className="header">
                <h1>{t("app")}</h1>
                <button onClick={() => i18n.changeLanguage("en")}>en</button>
                <button onClick={() => i18n.changeLanguage("ur")}>ur</button>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link> |{loginButton}
            </div>

            <Outlet />
        </>
    );
};

export default LayoutWithMenu;
