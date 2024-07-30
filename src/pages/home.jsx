import React from "react";
import { useTranslation } from "react-i18next";
//----------------------------------------------

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="home">{t("app")}</div>
            <p>Welcome to our home page</p>
        </div>
    );
};

export default Home;
