import { Request, Response } from 'express';
import { getUserData } from '../services/user.service';

export const getUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userData = await getUserData(userId);
    console.log(userData);
    res.json(userData);
  } catch (error) {
    console.error('Error in getUserController:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
};
