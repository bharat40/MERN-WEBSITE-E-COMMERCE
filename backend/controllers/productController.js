import productModel from "../models/productModel.js";
import { errorResponse, successResponse } from "../utils/response.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import fs from "fs";


export const createProductController = async (req, res) => {
    try {
        const { name, description, price, category, quantity, shipping } = req.body;
        const photo = req.file;
        if (!photo) {
            return errorResponse(res, null, 500, "Photo is required");
        }
        if (!name) {
            return errorResponse(res, null, 500, "Name is required");
        }
        if (!description) {
            return errorResponse(res, null, 500, "Description is required");
        }
        if (!price) {
            return errorResponse(res, null, 500, "Price is required");
        }
        if (!category) {
            return errorResponse(res, null, 500, "Category is required");
        }
        if (!quantity) {
            return errorResponse(res, null, 500, "Quantity is required");
        }
        const cloudinaryResponse = await uploadOnCloudinary(photo.path);
        if (cloudinaryResponse === null) {
            return errorResponse(res, null, 500, "Cloudinary upload failed!");
        }
        fs.unlinkSync(photo.path);
        const newProduct = new productModel({
            name: name,
            description: description,
            price: price,
            category: category,
            quantity: quantity,
            photo: cloudinaryResponse.secure_url,
            shipping: shipping
        });
        await newProduct.save();
        return successResponse(res, 201, newProduct, "Product created successfully");
    } catch (error) {
        console.log(error);
        return errorResponse(res, error, 500, "Error while creating product");
    }
};


export const getAllProductsController = async (req, res) => {
    try {
        const products = await productModel.find().populate("category");
        return successResponse(res, 200, products, "");
    } catch (error) {
        console.log(error);
        return errorResponse(res, error, 500, "Error while fetching products");
    }
};

export const getSingleProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id).populate("category");
        return successResponse(res, 200, product, "");
    } catch (error) {
        console.log(error);
        return errorResponse(res, error, 500, "Error while fetching single product");
    }
};

export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await productModel.findByIdAndDelete(id);
        return successResponse(res, 200, deletedProduct, "Product deleted successfully");
    } catch (error) {
        console.log(error);
        return errorResponse(res, error, 500, "Error while deleting product");
    }
};


export const updateProductController = async (req, res) => {
    try {
        const { updatedName, updatedDescription, updatedPrice, updatedCategory, updatedQuantity, updatedShipping } = req.body;
        const photo = req.file;
        const { id } = req.params;
        if (!photo) {
            return errorResponse(res, null, 500, "Photo is required");
        }
        if (!updatedName) {
            return errorResponse(res, null, 500, "Name is required");
        }
        if (!updatedDescription) {
            return errorResponse(res, null, 500, "Description is required");
        }
        if (!updatedPrice) {
            return errorResponse(res, null, 500, "Price is required");
        }
        if (!updatedCategory) {
            return errorResponse(res, null, 500, "Category is required");
        }
        if (!updatedQuantity) {
            return errorResponse(res, null, 500, "Quantity is required");
        }
        const cloudinaryResponse = await uploadOnCloudinary(photo.path);
        if (cloudinaryResponse === null) {
            return errorResponse(res, null, 500, "Cloudinary upload failed!");
        }
        fs.unlinkSync(photo.path);
        const updatedProduct = await productModel.findByIdAndUpdate(id, {
            name: updatedName,
            description: updatedDescription,
            price: updatedPrice,
            category: updatedCategory,
            quantity: updatedQuantity,
            shipping: updatedShipping,
            photo: cloudinaryResponse.secure_url
        }, { new: true });
        return successResponse(res, 201, updatedProduct, "Product updated successfully");
    } catch (error) {
        console.log(error);
        return errorResponse(res, error, 500, "Error while updating product");
    }
};