import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

// -----------------------------------

const SecurePage = () => {
    const navigate = useNavigate();
    const userLoadStatus = useSelector((state) => state?.auth?.loadUserStatus)
    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        if (userLoadStatus === 'succeeded' && !user && !window.location.href.includes('/login')) {
            navigate(`$/account/login?returnUrl=${window.location.href}`)
        }
    }, [user, navigate, userLoadStatus])


    return <Outlet />;

}

export default SecurePage;
