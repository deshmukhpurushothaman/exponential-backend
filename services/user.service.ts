import User from '../models/user'; // Assuming a MongoDB model exists

// Fetch user data by ID
export const getUserData = async (userId: string) => {
  try {
    let user = await User.findById(userId);
    if (!user) {
      user = new User({ _id: userId, score: 0, prizes: 0 });
      await user.save();
    }
    return user;
  } catch (error) {
    console.error('Error in getUserData:', error);
    throw error;
  }
};

// Update user data with rewards
export const updateUserData = async (
  userId: string,
  rewards: { points: number; prize: boolean }
) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');

    // Update user's points and prizes
    user.score += rewards.points;
    if (rewards.prize) user.prizes += 1;
    await user.save();

    return user;
  } catch (error) {
    console.error('Error in updateUserData:', error);
    throw error;
  }
};
