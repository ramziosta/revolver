// models/MenuCategory.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String
});

const SubCategorySchema = new mongoose.Schema({
    id: String,
    name: String,
    items: [ItemSchema]
});

const MenuCategorySchema = new mongoose.Schema({
    id: String,
    name: String,
    icon: String,
    description: String,
    subCategories: [SubCategorySchema]
});

export { MenuCategorySchema };