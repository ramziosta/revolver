import express from 'express';

const bakedGoodsRouter = express.Router();

import { getAllBakedGoodsMenu} from '../controllers/MenuController.js';

bakedGoodsRouter.get('/', getAllBakedGoodsMenu);

export default bakedGoodsRouter;