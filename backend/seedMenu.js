import mongoose from 'mongoose';
import dotenv from 'dotenv';
import menuData from "./menuData.json" with { type: "json" };
import MenuSchema from './models/MenuSchema.js';
dotenv.config();

try {
    await mongoose.connect(process.env.MONGODB_URI);

    await MenuSchema.deleteMany({});
    await MenuSchema.insertMany(menuData);

    console.log('Menu data seeded successfully');
    process.exit();
} catch (error) {
    console.error('Error seeding menu data:', error);
    process.exit(1);
}