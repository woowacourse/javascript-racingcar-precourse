import {MAX_RANDOM_NUMBER} from '../modules/utils.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = '';
  }

  carMove() {
    if (isCarMove()) {
      return (this.distance += '-');
    }

    return null;
  }
}

const isCarMove = () => {
  if (createRandomNumber() >= 4) {
    return true;
  }

  return false;
};

const createRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * (MAX_RANDOM_NUMBER + 1));

  return randomNumber;
};
