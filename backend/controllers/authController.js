import { errorResponse, successResponse } from '../utils/response.js';
import userModel from '../models/userModel.js';
import { hashPassword, comparePassword } from "../utils/hashPassword.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address} = req.body;

        // validations
        if (!name) {
            return errorResponse(res, null, 500, "name is required");
        }
        if (!email) {
            return errorResponse(res, null, 500, "email is required");
        }
        if (!password) {
            return errorResponse(res, null, 500, "password is required");
        }
        if (!phone) {
            return errorResponse(res, null, 500, "phone is required");
        }
        if (!address) {
            return errorResponse(res, null, 500, "address is required");
        }

        // existing user
        const user = await userModel.findOne({ email: email });
        if (user) {
            return errorResponse(res, null, 200, "User already exists with this email, Please login");
        }

        // register user
        const hashedPassword = await hashPassword(password);
        const newUser = new userModel({ name: name, email: email, password: hashedPassword, phone: phone, address: address });
        await newUser.save();
        return successResponse(res, 201, newUser, "User registered");
    } catch (error) {
        console.log(error);
        return errorResponse(res, error, 500, "Error while registering user");
    }
};


export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        // validation
        if (!email) {
            return errorResponse(res, null, 500, "email is required");
        }
        if (!password) {
            return errorResponse(res, null, 500, "password is required");
        }

        // already existed user
        const user = await userModel.findOne({ email: email });
        if (!user) {
            return errorResponse(res, null, 500, "User does not exists with this email id");
        }
        if (! await comparePassword(password, user.password)) {
            return errorResponse(res, null, 500, "Password is wrong");
        }
        const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1hr' });
        return successResponse(res, 200, { name: user.name, email: user.email, token: jwtToken }, "user logged in");
    } catch (error) {
        console.log(error);
        return errorResponse(res, error, 500, "Error while logging user");
    }
};