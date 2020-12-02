export default class Car {
  constructor(name) {
    this.name = name;
    this.length = '';
  }

  plusLength() {
    if (this.isPlusLength()) {
      return (this.length += '-');
    }
  }

  isPlusLength() {
    if (this.createRandomNumber() >= 4) {
      return true;
    }

    return false;
  }

  createRandomNumber() {
    const MAX_NUMBER = 9;
    const randomNumber = Math.floor(Math.random() * MAX_NUMBER + 1);

    return randomNumber;
  }
}
