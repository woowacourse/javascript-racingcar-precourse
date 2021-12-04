class Car {
  constructor(name) {
    this.name = name;
    this.advance = 0;
  }

  advanceCar() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) this.advance += 1;
  }

  printAdvance() {
    return `${this.name}: ${this.changeNumberToDash(this.advance)}`;
  }

  changeNumberToDash(advance) {
    let dash = '';
    for (let i = 0; i < advance; i += 1) {
      dash += '-';
    }
    return dash;
  }
}

export default Car;
