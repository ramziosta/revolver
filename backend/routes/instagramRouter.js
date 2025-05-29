import express from 'express';
import getAllImages from '../controllers/ImageController.js';

const instagramRouter = express.Router();

instagramRouter.get('/', getAllImages);
console.log("✅ /images route mounted");
export default instagramRouter;