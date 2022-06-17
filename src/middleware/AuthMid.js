import jwt from "jsonwebtoken";
import { UserModel } from "../models/Users.js";

export const protect = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await UserModel.findById(decoded.id)
                .select("-password");
            next();
            if (!token) res.status(401).json({msg: error.message});
        } catch (error) {
            res.status(401).json({msg: error.message});
            next(error);
        }
    };
};


