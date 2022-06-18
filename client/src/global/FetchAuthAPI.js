import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://localhost:9000/api/users";
class FetchAuthClass {
    register = createAsyncThunk("auth/register", 
    async (payload) => {
        const res = await fetch(`${URL}/register`, {
            method: "POST",
            headers: {"Content-Type": "application.json"},
            body: JSON.stringify({
                name: payload.name, 
                email: payload.email, 
                password: payload.password
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        localStorage.setItem("user", JSON.stringify(data))
        return data;
    });

    login = createAsyncThunk("auth/login", 
    async (payload) => {
        const res = await fetch(`${URL}/login`, {
            method: "POST",
            headers: {"Content-Type": "application.json"},
            body: JSON.stringify({
                email: payload.email, 
                password: payload.password
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        localStorage.setItem("user", JSON.stringify(data))
        return data;
    });

    logout = createAsyncThunk("auth/logout", 
    async () => {
        logout = () => {
            localStorage.removeItem("user");
        }
    });
};

export const AUTH = new FetchAuthClass();



