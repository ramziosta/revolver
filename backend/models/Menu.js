// models/Menu.js
import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    tags: [String],
});

const menuSchema = new mongoose.Schema({
    title: String,
    type: { type: String, required: true }, // 'weekly', 'catering', etc.
    items: [menuItemSchema],
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('menuCategory', menuSchema);