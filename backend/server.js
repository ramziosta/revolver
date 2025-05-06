import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import router  from './routes/router.js';
import cors from 'cors';


const app = express();

const allowedOrigins = [
    'http://localhost:8080',                // Local dev frontend
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());
app.use('/catering', router);
app.use('/menu', router);



const DB_URI = process.env.MONGODB_URI;
const PORT = 8000;

// Connect to MongoDB
mongoose.connect(DB_URI)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error.message);
    });