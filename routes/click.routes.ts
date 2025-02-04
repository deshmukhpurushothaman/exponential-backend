import express from 'express';
import { processClickController } from '../controllers/click.controller';

const router = express.Router();

// Route to handle click action
router.post('/', processClickController);

export default router;
