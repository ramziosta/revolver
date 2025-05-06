// models/BakedGoodsMenu.js
import mongoose from 'mongoose';
import { MenuCategorySchema } from './MenuCategory.js';

export default mongoose.model('BakedGoods', MenuCategorySchema, 'bakedgoods');