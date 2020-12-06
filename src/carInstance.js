import { getRandomNumber } from "./util";

export function Car(name) {
  this.name = name;
  this.progress = "";
  this.move = () => {
    const randomNumber = getRandomNumber();
    if (randomNumber >= 4) {
      this.progress += "-";
    }
  };
}
