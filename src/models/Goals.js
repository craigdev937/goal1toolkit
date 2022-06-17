import mongoose from "mongoose";

const GoalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "Please enter the Text"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
});

export const GoalModel = mongoose.model("Goal", GoalSchema);


