import express from 'express';
import {
    imagesController
} from '../controllers/_index.js';

const router = express.Router();
router.post('/upload_images', imagesController.uploadImage);
router.post('/upload_thumbnail_images', imagesController.uploadImageThumbnail);
router.put('/update_images/:id', imagesController.updateImage);
router.put('/update_thumbnail_images/:id', imagesController.updateImageThumbnail);

export default router;