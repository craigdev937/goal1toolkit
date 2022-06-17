import express from "express";
import { IndexHome } from "../controllers/UserCon.js";

export const UserRoute = express.Router();
    UserRoute.get("/", IndexHome);


