import express from 'express';
import { configDotenv } from 'dotenv';
import connectDB from './config/db.js';
import cors from "cors";
import authRoutes from "./routes/authRoute.js";


// configure env
configDotenv();

// configure database
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());


// rest api
app.get('/', (req, res) => {
    res.status(200).json({
        succss: true,
        message: "Hello World"
    });
});

// routes
app.use('/api/v1/auth', authRoutes);


// port
const PORT = process.env.PORT

// dev mode
const DEV_MODE = process.env.DEV_MODE

// server running
app.listen(PORT, () => {
    console.log(`Server running on mode ${DEV_MODE} and on port ${PORT}`);
});