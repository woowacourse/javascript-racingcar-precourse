export class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  randomNumber() {
    const maxNum = 9;
    const minNum = 0;
    let randomNumber = Math.random() * (maxNum - minNum + 1) + minNum;

    return randomNumber;
  }

  canMove() {
    const randomNumber = this.randomNumber();

    if (randomNumber >= 4) {
      return true;
    }

    return false;
  }

  move() {
    this.position += 1;
  }
}
