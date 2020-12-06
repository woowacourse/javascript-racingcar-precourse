export default class RandomNumber {
  constructor() {
    this.STANDARDNUMBER = 4;
    this.MAXNUMBER = 9;
  }

  init() {
    const randomNumber = Math.floor(Math.random() * this.MAXNUMBER + 1);
    const goSign = this.goOrStop(randomNumber);

    return goSign;
  }

  goOrStop(number) {
    let goSign = false;

    if (number >= this.STANDARDNUMBER) {
      goSign = true;
    }

    // true면 go, false면 stop
    return goSign;
  }
}
