import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected to mongodb ${response.connection.host}`);
    } catch (error) {
        console.error(`Error in connected mongodb ${error}`);
    }
};

export default connectDB;