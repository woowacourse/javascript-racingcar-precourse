import {MAX_RANDOM_NUMBER} from './utils.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.length = '';
  }

  carMove() {
    if (isCarMove()) {
      return (this.length += '-');
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
  const randomNumber = Math.floor(Math.random() * MAX_RANDOM_NUMBER + 1);

  return randomNumber;
};
