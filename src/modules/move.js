import {MAX_RANDOM_NUMBER} from '../modules/utils.js';

const createRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * (MAX_RANDOM_NUMBER + 1));

  return randomNumber;
};

export default function isCarMove() {
  if (createRandomNumber() >= 4) {
    return true;
  }

  return false;
}
