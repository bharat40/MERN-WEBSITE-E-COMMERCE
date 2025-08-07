import { successResponse, errorResponse } from '../utils/response.js';
import categoryModel from '../models/categoryModel.js';

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return errorResponse(res, null, 400, "All fields are required");
        }
        const existedCategory = await categoryModel.findOne({ name: name });
        if (existedCategory) {
            return errorResponse(res, null, 400, "Category already exists");
        }
        const newCategory = new categoryModel({ name, name });
        await newCategory.save();
        return successResponse(res, 201, newCategory, "Category created");
    } catch (error) {
        console.log(error);
        return errorResponse(res, error, 500, "Error in creating category");
    }
};


export const updateCategoryController = async (req, res) => {
    try {
        const { updatedName } = req.body;
        const { id } = req.params;
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, { name: updatedName }, { new: true });
        return successResponse(res, 200, updatedCategory, "Category updated successfully");
    } catch (error) {
        console.log(error);
        return errorResponse(res, null, 500, "Error in updating category");
    }
};

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await categoryModel.findByIdAndDelete(id);
        return successResponse(res, 200, deletedCategory, "Category deleted successfully");
    } catch (error) {
        console.log(error);
        return errorResponse(res, null, 500, "Error in deleting category");
    }
};

export const getAllCategoryController = async (req, res) => {
    try {
        const allCategories = await categoryModel.find();
        return successResponse(res, 200, allCategories, "");
    } catch (error) {
        console.log(error);
        return errorResponse(res, null, 500, "Error in fetching categories");
    }
}

export const getCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryModel.findById(id);
        return successResponse(res, 200, category, "");
    } catch (error) {
        console.log(error);
        return errorResponse(res, null, 500, "Error in fetching category details");
    }
}