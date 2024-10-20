import { configureStore } from "@reduxjs/toolkit";

// Local Imports
import { uiSlice } from "./slices/uiSlice";
import { authSlice } from "./slices/authSlice";
import { authApi } from "./slices/auth.api";
// ----------------------------------------------

export const store = configureStore({
    reducer: {
        [uiSlice.name]: uiSlice.reducer,
        [authSlice.name]: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
});
