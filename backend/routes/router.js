import express from 'express';
const router = express.Router();

import { getAllTraders, getOneTrader, createTrader, updateTrader, deleteTrader } from '../controllers/TradersController.js';

router.get('/', getAllTraders);
router.get('/:id', getOneTrader);
router.post('/', createTrader);
router.put('/:id', updateTrader);
router.delete('/:id', deleteTrader);

export default router;