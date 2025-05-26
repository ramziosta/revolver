const express = require('express');
const imageRouter = express.Router();
import imageController from '@/controllers/imageController';

imageRouter.get('/', imageController );

module.exports = imageRouter;