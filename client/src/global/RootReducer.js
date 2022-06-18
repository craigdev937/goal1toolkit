import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthSlice";
import { GoalReducer } from "./GoalSlice";

export const RootReducer = configureStore({
    reducer: {
        auth: AuthReducer,
        goals: GoalReducer
    },
});


