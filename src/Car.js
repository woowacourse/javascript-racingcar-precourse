import { genRandomNumber } from "./utils.js";

export default function Car(name, location) {
  this.name = name;
  this.location = location;
  this.locationLength = 0;

  this.move = () => {
    let randomNum = genRandomNumber();

    if (this.isForward(randomNum)) {
      this.location += "-";
      this.locationLength = this.location.length;
    }
  };

  this.isForward = (num) => (num >= 4 ? true : false);

  this.toString = () => `<span>${this.name}: ${this.location}</span>`;
}
