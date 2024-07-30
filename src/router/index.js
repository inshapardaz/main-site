import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "/src/pages/home";
import About from "/src/pages/about";
import ErrorPage from "/src/pages/error-page";
import LayoutWithMenu from "/src/components/layout/layoutWithMenu";


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
}]);

export default router;
