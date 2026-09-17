// Third party libraries
import { Outlet } from "react-router-dom";

// local imports
import AuthHeader from "@/components/layout/authHeader";
import AuthFooter from "@/components/layout/authFooter";
import classes from './layoutWithFooter.module.css';

// -----------------------------------

const LayoutWithFooter = () => {
    return <div className={classes.page}>
        <AuthHeader />
        <div className={classes.content}>
            <Outlet />
        </div>
        <AuthFooter />
    </div>;
}

export default LayoutWithFooter;
