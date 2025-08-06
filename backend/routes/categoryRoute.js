import express from 'express';
const router = express.Router();
import { requireLogin, isAdmin } from '../middlewares/authMiddleware.js';
import { createCategoryController, updateCategoryController, deleteCategoryController, getAllCategoryController, getCategory } from '../controllers/categoryController.js';

router.post('/create-category', requireLogin, isAdmin, createCategoryController);
router.put('/update-category/:id', requireLogin, isAdmin, updateCategoryController);
router.delete('/delete-category/:id', requireLogin, isAdmin, deleteCategoryController);
router.get('/get-all-categories', getAllCategoryController);
router.get('/get-category/:id', getCategory);

export default router;