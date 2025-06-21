import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cateringMenuData from "./cateringMenuData.json" with { type: "json" };
import menuData from "./menuData.json" with { type: "json" };
import bakedGoodsMenuData from "./bakedGoodsMenuData.json" with { type: "json" };
import catering from './models/Catering.js';
import menu from "./models/Menu.js";
import bakedGoods from "./models/BakedGoods.js";
dotenv.config();

try {
    await mongoose.connect(process.env.MONGODB_URI);

    // await catering.deleteMany({});
    // await catering.insertMany(cateringMenuData);
    // await menu.deleteMany({});
    // await menu.insertMany(menuData);
    await menu.deleteMany({});
    await menu.insertMany(menuData);

    console.log('Menu data seeded successfully');
    process.exit();
} catch (error) {
    console.error('Error seeding menu data:', error);
    process.exit(1);
}