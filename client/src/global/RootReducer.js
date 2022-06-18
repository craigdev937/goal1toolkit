import { configureStore } from "@reduxjs/toolkit";

export const RootReducer = configureStore({
    reducer: {
        goals: () => "MERN Redux-Toolkit!"
    },
});


