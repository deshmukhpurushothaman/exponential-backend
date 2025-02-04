export const calculateRewards = (): { points: number; prize: boolean } => {
  const randomChance = Math.random();
  let points = 1;
  let prize = false;

  if (randomChance < 0.5) points += 10; // 50% chance for +10 points
  if (randomChance < 0.25) prize = true; // 25% chance for a prize

  return { points, prize };
};
