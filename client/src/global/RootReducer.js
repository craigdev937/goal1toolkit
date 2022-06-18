import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthSlice";

export const RootReducer = configureStore({
    reducer: {
        auth: AuthReducer
    },
});


