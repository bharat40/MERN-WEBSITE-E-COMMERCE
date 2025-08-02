import express from 'express';
const router = express.Router();
import { loginController, registerController } from '../controllers/authController.js';
import { requireLogin, isAdmin } from "../middlewares/authMiddleware.js";

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

export default router;