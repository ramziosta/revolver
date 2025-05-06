import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cateringMenuData from "./cateringMenuData.json" with { type: "json" };
import catering from './models/Catering.js';
dotenv.config();

try {
    await mongoose.connect(process.env.MONGODB_URI);

    await catering.deleteMany({});
    await catering.insertMany(cateringMenuData);

    console.log('Menu data seeded successfully');
    process.exit();
} catch (error) {
    console.error('Error seeding menu data:', error);
    process.exit(1);
}