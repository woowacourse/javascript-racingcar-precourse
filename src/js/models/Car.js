import { CAR } from '../utils/constants.js';
import getRandomNumber from '../utils/getRandomNumber.js';

export default function Car(name) {
  this.name = name;
  this.move = 0;

  this.setMove = () => {
    const randomNum = getRandomNumber();
    if (randomNum >= CAR.CAN_MOVE_NUM) {
      this.move += 1;
    }
  };
}
