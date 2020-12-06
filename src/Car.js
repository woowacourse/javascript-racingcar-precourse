import { genRandomNumber } from "./utils.js";

export default function Car(name, location) {
  this.name = name;
  this.location = location;
  this.locationLength = location.length;

  this.move = () => {
    let randomNum = genRandomNumber();
    if (this.isForward(randomNum)) {
      this.location += "-";
      this.locationLength += 1;
    }
  };

  this.isForward = (num) => (num >= 4 ? true : false);
}
