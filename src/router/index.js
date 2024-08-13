import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "/src/pages/home";
import About from "/src/pages/about";
import ErrorPage from "/src/pages/error-page";
import LayoutWithMenu from "/src/components/layout/layoutWithMenu";
import EmptyPageLayout from "/src/components/layout/emptyPageLayout";

import LoginPage from "/src/pages/login";
import RegisterPage from "/src/pages/register";
import ForgotPasswordPage from "/src/pages/forgotPassword";

//------------------------------------------------------------------
const router = createBrowserRouter([{
    element: <LayoutWithMenu />,
    children: [{
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "about",
        element: <About />,
    }]
}, {
    element: <EmptyPageLayout />,
    children: [{
        path: "/account/login",
        element: <LoginPage />,
    }, {
        path: "/account/forgot-password",
        element: <ForgotPasswordPage />,
    }, {
        path: "/account/register",
        element: <RegisterPage />,
    }]
}]);

export default router;
