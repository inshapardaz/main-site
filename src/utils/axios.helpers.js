import axios from "axios";
import { Mutex } from "async-mutex";

// Local import
import { getUser, setUser, clearUser } from "/src/domain/repository/userRepository";
import UrlRepository from "/src/domain/repository/urlRepository";
import * as env from "env";

// ----------------------------------------------

export const axiosPublic = axios.create({
    baseURL: env.API_URL,
});
export const axiosPrivate = axios.create({
    baseURL: env.API_URL,
});


const mutex = new Mutex();

axiosPrivate.interceptors.request.use(
    async (config) => {
        await mutex.waitForUnlock();
        const release = await mutex.acquire();

        try {
            const user = getUser();
            let currentDate = new Date();
            if (user?.accessToken) {
                if (new Date(user.accessTokenExpiry) < currentDate.getTime()) {
                    try {
                        const response = await axiosPublic.post(
                            UrlRepository.Auth.TokenRefresh,
                            {
                                refreshToken: getUser().refreshToken,
                            }
                        );
                        setUser(response.data);
                    } catch (e) {
                        clearUser();
                        window.location.href = UrlRepository.Ui.Login;
                    }
                }

                if (config?.headers) {
                    config.headers["authorization"] = `Bearer ${getUser()?.accessToken
                        }`;
                }
            }
        } finally {
            release();
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
