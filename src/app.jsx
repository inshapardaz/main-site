import React, { useState } from "react";
import { Helmet } from "react-helmet";
//----------------------------------------------

import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Sheet from "@mui/joy/Sheet";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
//----------------------------------------------

import router from "/src/router";
import { RouterProvider } from "react-router-dom";
import { AccountContext } from "/src/contexts";
import AuthService from "/src/services/auth.service";
import { useTranslation } from "react-i18next";
//----------------------------------------------

const rtlCache = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
    key: "mui",
});

//----------------------------------------------

const App = () => {
    const { i18n } = useTranslation();

    const [authenticated, setAuthenticated] = useState(
        AuthService.IsUserLoggedIn()
    );

    document.body.dir = i18n.dir();

    return (
        <CacheProvider value={i18n.dir() === "rtl" ? rtlCache : ltrCache}>
            <CssVarsProvider disableTransitionOnChange>
                <CssBaseline />
                <GlobalStyles
                    styles={{
                        ":root": {
                            "--Form-maxWidth": "800px",
                            "--Transition-duration": "0.4s", // set to `none` to disable transition
                        },
                    }}
                />
                <Sheet variant="outlined">
                    <AccountContext.Provider
                        value={{ authenticated, setAuthenticated }}
                    >
                        <RouterProvider router={router} />
                    </AccountContext.Provider>
                </Sheet>
            </CssVarsProvider>
        </CacheProvider>
    );
};

export default App;
