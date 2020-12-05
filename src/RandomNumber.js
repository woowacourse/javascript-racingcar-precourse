export default class RandomNumber {
  init() {
    const randomNumber = Math.floor(Math.random() * 9 + 1);
    const goSign = this.goOrStop(randomNumber);

    return goSign;
  }

  goOrStop(number) {
    let goSign = false;

    if (number >= 4) {
      goSign = true;
    }

    // true면 go, false면 stop
    return goSign;
  }
}
