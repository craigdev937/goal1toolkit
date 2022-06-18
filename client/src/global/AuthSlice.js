import { createSlice } from "@reduxjs/toolkit";
import { AUTH } from "./FetchAuthAPI";

const user = JSON.stringify(localStorage.getItem("user"));
const initialState = {
    user: user ? user : null,
    message: "",
    isError: false,
    isLoading: false,
    isSuccess: false
};

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.isError = false,
            state.isLoading = false,
            state.isSuccess = false,
            state.message = ""
        },
    },
    extraReducers: {
        [AUTH.register.rejected]: (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload,
            state.user = null
        },
        [AUTH.register.pending]: (state) => {
            state.isLoading = true
        },
        [AUTH.register.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.user = action.payload
        },
        [AUTH.login.rejected]: (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.user = null,
            state.message = action.payload
        },
        [AUTH.login.pending]: (state) => {
            state.isLoading = true
        },
        [AUTH.login.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.user = action.payload
        },
        [AUTH.logout.fulfilled]: (state) => {
            state.user = null
        },
    },
});

export const AuthAction = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;




