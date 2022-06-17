import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const generateToken = (id) => {
    return jwt.sign({id}, 
        process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
};

class UserClass {
    Register = async (req, res, next) => {
        const { name, email, password } = req.body;
        try {
            if (!name || !email || !password) {
                res.status(400);
                throw new Error("Please enter all fields.");
            };
            const userExists = await UserModel.findOne({email});
            if (userExists) {
                res.status(400);
                throw new Error("User already exists.");
            };
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = await UserModel.create({
                name, email, password: hashedPassword
            });
            if (user) {
                res.status(201).json({
                    _id: user.id, name: user.name,
                    email: user.email, 
                    token: generateToken(user._id)
                })
            };
        } catch (error) {
            res.status(401).json({msg: error.message});
            next(error);
        }
    };

    Login = async (req, res, next) => {
        const { email, password } = req.body;
        try {
            const user = await UserModel.findOne({email});
            if (user && (await bcrypt.compare(password, user.password))) {
                res.json({
                    _id: user.id, name: user.name,
                    email: user.email,
                    token: generateToken(user._id)
                });
            };
        } catch (error) {
            res.status(401).json({msg: error.message});
            next(error);
        }
    };

    GetMe = async (req, res, next) => {
        try {
            const { _id, name, email } = 
                await UserModel.findById(req.user.id);
            res.status(200).json({
                id: _id, name, email
            });
        } catch (error) {
            res.status(401).json({msg: error.message});
            next(error);
        }
    };
};

export const USER = new UserClass();



