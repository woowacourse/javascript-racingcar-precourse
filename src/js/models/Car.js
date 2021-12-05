import getRandomNumber from '../utils/getRandomNumber.js';

export default function Car(name) {
  this.name = name;
  this.move = 0;

  this.setMove = () => {
    const randomNum = getRandomNumber();
    if (randomNum >= 4) {
      this.move += 1;
    }
  };
}
