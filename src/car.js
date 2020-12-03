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
  const MAX_NUMBER = 9;
  const randomNumber = Math.floor(Math.random() * MAX_NUMBER + 1);

  return randomNumber;
};
