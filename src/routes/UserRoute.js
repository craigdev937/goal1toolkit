import express from "express";
import { protect } from "../middleware/AuthMid.js";
import { USER } from "../controllers/UserCon.js";

export const UserRoute = express.Router();
    UserRoute.post("/register", USER.Register);
    UserRoute.post("/login", USER.Login);
    UserRoute.get("/me", protect, USER.GetMe);



    