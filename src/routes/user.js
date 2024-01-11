import express from 'express';
import {
    userController
} from '../controllers/_index.js';

const router = express.Router();
router.get('/check_token', userController.check_token);

export default router;