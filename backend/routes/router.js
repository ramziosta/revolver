import express from 'express';
const router = express.Router();

import {getAllMenu, } from '../controllers/MenuController.js';

router.get('/', getAllMenu);



export default router;