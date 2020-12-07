import { MAX, MIN } from '../constants/index.js';
export const randomMove = () => {
  const random = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  if (random <= 3) {
    return 0;
  }

  return 1;
};
