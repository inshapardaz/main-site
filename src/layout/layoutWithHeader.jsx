import { Outlet } from "react-router-dom";

// 3rd party libraries
import { AppShell, rem } from '@mantine/core';

// Local imports
import AppFooter from "@/components/layout/appFooter";
import AppHeader from "@/components/layout/appHeader";
// -----------------------------------------

const LayoutWithHeader = () => {

    return (
        <AppShell>
            <AppShell.Header>
                <AppHeader />
            </AppShell.Header>
            <AppShell.Main pt={`calc(${rem(45)} + var(--mantine-spacing-md))`}>
                <Outlet />
            </AppShell.Main>
            <AppFooter />
        </AppShell>)
}

export default LayoutWithHeader;
