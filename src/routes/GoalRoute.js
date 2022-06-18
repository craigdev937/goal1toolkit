import express from "express";
import { protect } from "../middleware/AuthMid.js";
import { GOAL } from "../controllers/GoalCon.js";

export const GoalRoute = express.Router();
    GoalRoute.post("/", protect, GOAL.Create);
    GoalRoute.get("/", protect, GOAL.FetchAll);
    GoalRoute.put("/:id", protect, GOAL.Update);
    GoalRoute.delete("/:id", protect, GOAL.Delete);


