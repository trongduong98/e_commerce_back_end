import express from 'express';
import {
    productController
} from '../controllers/_index.js';

const router = express.Router();
router.get('/get-products-with-thumbnail', productController.getProductsListWithThumbnail);
router.get('/product-detail/:id', productController.getProductById);
router.post('/upload-product', productController.uploadProduct);
router.put('/update-product/:id', productController.updateProduct);
router.delete('/delete-product/:id', productController.deleteProduct);

export default router;