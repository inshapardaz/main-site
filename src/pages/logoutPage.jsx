import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

const LogoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(state => state.auth.tokenStatus)

    const [searchParams] = useSearchParams();
    const returnUrl = searchParams.get("returnUrl");

    useEffect(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (status === 'succeeded' || status === 'failed') {
            if (returnUrl) {
                window.location.href = returnUrl;
            } else {
                navigate('/')
            }
        }
    }, [status, navigate, returnUrl])
    return "";
}

export default LogoutPage;