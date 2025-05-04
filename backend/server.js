import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import router  from './routes/router.js';
import cors from 'cors';


const app = express();

app.use(cors({
    origin: 'https://vue-app-frontend.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/traders', router);
app.use('/', router);


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