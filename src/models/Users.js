import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the Name"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter the Email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a Password"]
    },
}, { timestamps: true });

export const UserModel = mongoose.model("User", UserSchema);


