import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import clickRoutes from './routes/click.routes';
import { connectToDatabase } from './database/connect';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/api/user', userRoutes);
app.use('/api/click', clickRoutes);

const port = process.env.PORT || 8000;

// Start the server
app.listen(port, () => console.log(`Server running on ${port}`));
