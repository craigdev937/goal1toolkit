import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Dashboard } from "../containers/Dashboard";
import { Register } from "../containers/Register";
import { Login } from "../containers/Login";

export const Main = () => (
    <BrowserRouter>
        <main className="container">
            <ToastContainer />
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    </BrowserRouter>
);


