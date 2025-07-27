import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/database.js';
import userRouter from './routes/users/userRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/", userRouter);

// Connect to database before starting server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to database:', err);
    process.exit(1);
});
