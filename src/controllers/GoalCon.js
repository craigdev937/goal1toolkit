import { GoalModel } from "../models/Goals.js";

class GoalClass {
    Create = async (req, res, next) => {
        try {
            if (!req.body.text) {
                res.status(400)
                throw new Error("Please enter in text.");
            };
            const goal = await GoalModel.create({
                text: req.body.text,
                user: req.user.id
            });
            res.status(200).json(goal);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    FetchAll = async (req, res, next) => {
        try {
            const goals = await GoalModel.find({
                user: req.user.id
            });
            res.status(200).json(goals);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Update = async (req, res, next) => {
        try {
            const goal = await GoalModel.findById(req.params.id);
            if (!goal) throw new Error("Goal not found");
            if (!req.user) throw new Error("User not found");
            if (goal.user.toString() !== req.user.id) {
                res.status(401);
                throw new Error("Not Authorized");
            };
            const updatedGoal = await GoalModel.findByIdAndUpdate(
                req.params.id, 
                req.body, { new: true }
            );
            res.status(200).json(updatedGoal);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Delete = async (req, res, next) => {
        try {
            const goal = await GoalModel.findById(req.params.id);
            if (!goal) throw new Error("Goal not found!");
            if (!req.user) throw new Error("User not found!");
            if (goal.user.toString() !== req.user.id) {
                res.status(401);
                throw new Error("Not Authorized");
            };
            await goal.remove();
            res.status(200).json({id: req.params.id});
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };
};

export const GOAL = new GoalClass();



