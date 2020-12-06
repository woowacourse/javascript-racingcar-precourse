import { getRandomNumber } from "./util";

export function Car(name, progress) {
  this.name = name;
  this.progress = progress;
  this.move = () => {
    const randomNumber = getRandomNumber();
    if (randomNumber >= 4) {
      this.progress++;
    }
  };
}
