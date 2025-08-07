import express from 'express';
import { isAdmin, requireLogin } from '../middlewares/authMiddleware.js';
import { createProductController, getAllProductsController, getSingleProductController, deleteProductController, updateProductController } from '../controllers/productController.js';
import { upload } from '../middlewares/multerMiddleware.js';

const router = express.Router();

router.post('/create-product', requireLogin, isAdmin, upload.single('photo'), createProductController);
router.get('/get-all-products', getAllProductsController);
router.get('/get-product/:id', getSingleProductController);
router.delete('/delete-product/:id', requireLogin, isAdmin, deleteProductController);
router.put('/update-product/:id', requireLogin, isAdmin, upload.single('photo'), updateProductController);

export default router;