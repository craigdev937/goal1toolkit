import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://localhost:9000/api/goals";
class FetchGoalClass {
    create = createAsyncThunk("goal/create", 
    async (payload, token) => {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                text: payload.text, user: payload.user
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    fetchAll = createAsyncThunk("goals", 
    async (payload, token) => {
        const res = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                text: payload.text, user: payload.user
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return [...data];
    });

    deleteGoal = createAsyncThunk("goal/deleteGoal", 
    async (goalId, token) => {
        const res = await fetch(`${URL}/${goalId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });
};

export const GOAL = new FetchGoalClass();


