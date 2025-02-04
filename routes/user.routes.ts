import express from 'express';
import { getUserController } from '../controllers/user.controller';

const router = express.Router();

// Route to get user data
router.get('/:id', getUserController);

export default router;
