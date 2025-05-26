import mongoose from 'mongoose';
import dotenv from 'dotenv';
import InstagramImage from './models/InstagramImages.js';
import "./instagramImagesData.js"
import {instagramImagesData} from "./instagramImagesData.js";
dotenv.config();
const seedInstagramImages = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        await InstagramImage.deleteMany({});
        await InstagramImage.insertMany(instagramImagesData);
        console.log('✅ Instagram images seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('❌ Error seeding Instagram images:', error.message);
        process.exit(1);
    }
};

seedInstagramImages().then(r => r);