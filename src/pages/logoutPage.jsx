import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(state => state.auth.tokenStatus)


    useEffect(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (status === 'succeeded' || status === 'failed') {
            navigate('/');
        }
    }, [status, navigate])
    return "";
}

export default LogoutPage;