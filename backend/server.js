import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router  from './routes/router.js';
import cateringRouter from './routes/cateringRouter.js';
import bakedGoodsRouter   from './routes/bakedGoodsRouter.js';
import cors from 'cors';
import contactRouter from "./routes/contact.js";
dotenv.config();

const app = express();

const allowedOrigins = [
    'http://localhost:5173',
    'https://revolver-tau.vercel.app',
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin like curl or Postman
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

app.use(express.json());
app.use('/catering', cateringRouter);
app.use('/bakedgoods', bakedGoodsRouter);
app.use('/menu', router);
app.use('/contact', contactRouter);
app.use('/reservation', contactRouter)
app.use('/event', contactRouter)



const DB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8000;

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
console.log("Receiver:", process.env.EMAIL_RECEIVER);
console.log("Sender:", process.env.EMAIL_USER);