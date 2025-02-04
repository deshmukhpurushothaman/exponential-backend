import { Request, Response } from 'express';
import { calculateRewards } from '../jobs/calculateRewards';
import { updateUserData } from '../services/user.service';

export const processClickController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const rewards = calculateRewards();
    const updatedUser = await updateUserData(userId, rewards);
    res.json({ message: 'Click processed', rewards, updatedUser });
  } catch (error) {
    console.error('Error in processClickController:', error);
    res.status(500).json({ error: 'Failed to process click' });
  }
};
