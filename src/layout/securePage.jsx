import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

// -----------------------------------

const SecurePage = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        if (!user) {
            navigate('/account/login')
        }
    }, [user, navigate])

    return <Outlet />;

}

export default SecurePage;
