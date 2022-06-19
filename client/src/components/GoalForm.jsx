import React from "react";
import { useDispatch } from "react-redux";
import { GOAL } from "../global/FetchGoalAPI";

export const GoalForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = React.useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(GOAL.create({ text }));
        setText("");
    };

    return (
        <main className="form">
            <form onSubmit={handleSubmit}>
                <aside className="form-group">
                    <label htmlFor="text">Goal</label>
                    <input 
                        type="text" 
                        name="text"
                        id="text"
                        value={text}
                        onChange={handleChange}
                    />
                </aside>
                <aside className="form-group">
                    <button 
                        className="btn btn-block" 
                        type="submit"
                        >Add Goal
                    </button>
                </aside>
            </form>
        </main>
    );
};



