import { createSlice } from "@reduxjs/toolkit";
import { GOAL } from "./FetchGoalAPI";

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

const GoalSlice = createSlice({
    name: "goals",
    initialState: initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: {
        [GOAL.fetchAll.rejected]: (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload
        },
        [GOAL.fetchAll.pending]: (state) => {
            state.isLoading = true
        },
        [GOAL.fetchAll.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.goals = action.payload
        },
        [GOAL.create.rejected]: (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload
        },
        [GOAL.create.pending]: (state) => {
            state.isLoading = true
        },
        [GOAL.create.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.goals.push(action.payload)
        },
        [GOAL.deleteGoal.rejected]: (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload
        },
        [GOAL.deleteGoal.pending]: (state) => {
            state.isLoading = true
        },
        [GOAL.deleteGoal.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.goals = state.goals.filter(
                (goal) => goal._id !== action.payload.id);
        },
    },
});

export const GoalAction = GoalSlice.actions;
export const GoalReducer = GoalSlice.reducer;


