// models/BakedGoodsMenu.js
import mongoose from 'mongoose';

const BakedGoodItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    isGlutenFree: Boolean,
    ingredients: [String],
    category: String // Optional, like "Pastries", "Cakes"
});

const BakedGoodsMenuSchema = new mongoose.Schema({
    name: String, // e.g., "Baked Goods"
    description: String,
    items: [BakedGoodItemSchema]
});

export default mongoose.model('BakedGoods', BakedGoodsMenuSchema, 'bakedgoods');