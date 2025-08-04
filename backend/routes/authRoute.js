import express from 'express';
const router = express.Router();
import { forgotPasswordController, loginController, registerController } from '../controllers/authController.js';
import { requireLogin, isAdmin } from "../middlewares/authMiddleware.js";
import { successResponse } from '../utils/response.js';

// routing

// register || post
router.post('/register', registerController);
// login || post
router.post('/login', loginController);
// dummy protected route ||  get
router.get('/password-reset', requireLogin, isAdmin, (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Welcome to Protected Route"
    });
});
// protected route || auth
router.get('/user-auth', requireLogin, (req, res) => {
    return successResponse(res, 200, null, "authorized");
});
// admin route || auth
router.get('/admin-auth', requireLogin, isAdmin, (req, res) => {
    return successResponse(res, 200, null, "Admin Authorized");
})
// forgot password route || POST
router.post('/forgot-password', forgotPasswordController);

export default router;