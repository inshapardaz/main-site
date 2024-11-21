import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

// local Imports
import { axiosPublic, axiosPrivate } from '@/utils/axios.helpers';
// ----------------------------------------------------------

const initialState = {
    user: null,
    status: "idle", // idle || loading || succeeded || failed
    error: null,
    forgetPasswordStatus: "idle", // idle || loading || succeeded || failed
    forgetPasswordError: null,
    resetPasswordStatus: "idle", // idle || loading || succeeded || failed
    resetPasswordError: null,
    tokenStatus: "idle",
    tokenError: null,
};

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { dispatch }) => {
        try {
            const response = await axiosPublic.post("/accounts/authenticate", {
                email,
                password,
            });
            dispatch(loadUser())
            return response.data;
        } catch (e) {
            return Promise.reject(e.message);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (user) => {
        try {
            const response = await axiosPublic.post("/accounts/revoke-token", {
                token: user?.accessToken
            });
            return response.data;
        } catch (e) {
            console.error(e.message);
            return Promise.reject(e.message);
        }
        finally {
            Cookies.remove('token')
            Cookies.remove('refreshToken')
        }
    }
);


export const verifyCode = createAsyncThunk(
    "auth/verify-code",
    async ({ code }) => {
        try {
            const response = await axiosPublic.get(
                `/accounts/invitation/${code}`
            );
            return response.data;
        } catch (e) {
            console.log(e.message);
            return Promise.reject(e.message);
        }
    }
);

export const resetPassword = createAsyncThunk(
    "auth/reset-password",
    async ({ code, password, confirmPassword }) => {
        try {
            const response = await axiosPublic.post(
                "/accounts/reset-password",
                {
                    token: code,
                    password,
                    confirmPassword,
                }
            );
            return response.data;
        } catch (e) {
            console.log(e.message);
            return Promise.reject(e.message);
        }
    }
);

export const loadUser = createAsyncThunk(
    "auth/user",
    async () => {
        try {
            const response = await axiosPrivate.get("/accounts/user");
            return response.data;
        } catch (e) {
            return Promise.reject(e);
        }
    }
);


export const init = createAsyncThunk("auth/init", async (_, { dispatch }) => {
    if (Cookies.get('refreshToken')) {
        dispatch(loadUser())
    }
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.error = null;
            state.status = "idle";
            state.loadUserStatus = "idle";
            state.loadUserError = null;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(init.pending, (state) => {
                state.tokenStatus = "loading";
            })
            .addCase(init.fulfilled, (state) => {
                state.tokenStatus = "succeeded";
            })
            .addCase(init.rejected, (state, action) => {
                state.tokenStatus = "failed";
                state.tokenError = action.error.message;
            })
            .addCase(login.pending, (state) => {
                state.status = "loading";
            })
            .addCase(login.fulfilled, (state) => {
                state.status = "succeeded";
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(logout.pending, (state) => {
                state.logoutStatus = "loading";
            })
            .addCase(logout.fulfilled, (state) => {
                state.logoutStatus = "succeeded";
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.logoutStatus = "failed";
                state.logoutUser = action.error.message;
                state.user = null;
            })
            .addCase(verifyCode.pending, (state) => {
                state.tokenStatus = "loading";
            })
            .addCase(verifyCode.fulfilled, (state) => {
                state.status = "succeeded";
            })
            .addCase(verifyCode.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(resetPassword.pending, (state) => {
                state.resetPasswordStatus = "loading";
            })
            .addCase(resetPassword.fulfilled, (state) => {
                state.resetPasswordStatus = "succeeded";
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.resetPasswordStatus = "failed";
                state.resetPasswordError = action.error.message;
            })
            .addCase(loadUser.pending, (state) => {
                state.loadUserStatus = "loading";
                state.loadUserError = null;
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.loadUserStatus = "succeeded";
                state.loadUserError = null;
                if (action.payload) {
                    state.user = action.payload;
                }
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.loadUserStatus = "failed";
                state.loadUserError = action.error.message;
            });
    },
});

export const getLoginStatus = (state) => state?.auth?.status;
export const getLoginError = (state) => state?.auth?.error;
export const getTokenStatus = (state) => state?.auth?.tokenStatus;
export const getTokenError = (state) => state?.auth?.tokenError;
export const getResetPasswordStatus = (state) => state?.auth?.resetPasswordStatus;
export const getResetPasswordError = (state) => state?.auth?.resetPasswordError;
export const getUserStatus = (state) => state?.auth?.loadUserStatus;
export const getUserError = (state) => state?.auth?.loadUserError;

export const { reset } = authSlice.actions;
