import { generateRandomNumber } from './generateRandomNumber.js';

export const isMove = () => {
  const randomNum = generateRandomNumber();
  if (randomNum >= 4) return true;
  return false;
};
