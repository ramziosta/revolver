// models/Catering.js
import mongoose from 'mongoose';
import { MenuCategorySchema } from './MenuSchema.js';

export default mongoose.model('Catering', MenuCategorySchema, 'cateringMenu');