export const successResponse = (res, statusCode, data, message) => {
    return res.status(statusCode).json({
        success: true,
        data: data,
        message: message
    });
};

export const errorResponse = (res, error, statusCode, message) => {
    return res.status(statusCode).json({
        success: false,
        error: error,
        message: message
    });
};