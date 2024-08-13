import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Joy Imports
import { Box } from "@mui/joy";

// Local imports
import Header from "/src/components/layout/header";

// Local import
import Layout from "./layout";
import Navigation from "./navigation";

//----------------------------------------------

const LayoutWithMenu = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            {drawerOpen && (
                <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
                    <Navigation />
                </Layout.SideDrawer>
            )}
            <Layout.Root
                sx={{
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "minmax(64px, 200px) minmax(450px, 1fr)",
                        md: "minmax(160px, 300px) minmax(600px, 1fr) minmax(300px, 420px)",
                    },
                    ...(drawerOpen && {
                        height: "100vh",
                        overflow: "hidden",
                    }),
                }}
            >
                <Layout.Header>
                    <Header />
                </Layout.Header>
                <Layout.Main>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: 2,
                        }}
                    >
                        <Outlet />
                    </Box>
                </Layout.Main>
            </Layout.Root>
        </>
    );
};

export default LayoutWithMenu;
