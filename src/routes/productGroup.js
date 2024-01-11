import express from 'express';
import {
    productGroupController
} from '../controllers/_index.js';

const router = express.Router();
router.get('/get-product-group-name', productGroupController.getProductGroupList);

export default router;