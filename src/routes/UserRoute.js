import express from "express";
import { USER } from "../controllers/UserCon.js";

export const UserRoute = express.Router();
    UserRoute.post("/register", USER.Register);


