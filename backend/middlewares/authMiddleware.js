import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import { errorResponse } from '../utils/response.js';

export const requireLogin = async (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET_KEY);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        return errorResponse(res, error, 500, "invalid token");
    }
}


// admin access

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user.userId);
        if (!user.role) {
            return errorResponse(res, null, 500, "unauthorize access, you are not admin");
        }
        else {
            next();
        }
    } catch (error) {
        console.log(error);
    }
}