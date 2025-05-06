// models/Menu.js
import mongoose from 'mongoose';
import { MenuCategorySchema } from './MenuCategory.js';

export default mongoose.model('Menu', MenuCategorySchema, 'menu');