import { axiosPublic } from "/src/utils/axios.helpers";
import UrlRepository from "/src/domain/repository/urlRepository";
import { getUser, setUser, clearUser } from "/src/domain/repository/userRepository";

// ----------------------------------------------

const AuthService = {
    Login: ({ email, password }) => {
        return axiosPublic.post(UrlRepository.Auth.Login, {
            email,
            password,
        })
            .then((response) => {
                setUser(response.data);
            });
    },
    Logout: () => {
        clearUser()
    },
    Register: ({ username, password }) => {
    },
    ForgotPassword: ({ email }) => {
    },
    IsUserLoggedIn: () => {
        return getUser() !== null;
    },
};

export default AuthService;
