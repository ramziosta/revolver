import express from 'express';

const cateringRouter = express.Router();

import {getAllCateringMenu } from '../controllers/MenuController.js';


cateringRouter.get('/', getAllCateringMenu);



export default  cateringRouter;