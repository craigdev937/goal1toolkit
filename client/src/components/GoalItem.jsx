import React from "react";
import { useDispatch } from "react-redux";
import { GoalAction } from "../global/GoalSlice";

export const GoalItem = ({ goal }) => {
    const dispatch = useDispatch();

    return (
        <main className="goal">
            <section>
                {new Date(goal.createdAt)
                .toLocaleString("en-US")}
            </section>
            <h2>{goal.text}</h2>
            <button
                className="close"
                onClick={() => dispatch(GoalAction(goal._id))}
                >x
            </button>
        </main>
    );
};


