class Util {
  getRandomNumbers(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const util = new Util();

export default util;
