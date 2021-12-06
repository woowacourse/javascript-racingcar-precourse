import { MIN_NUM_TO_GO } from "./constants.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  shouldGo(randomNum) {
    return (randomNum >= MIN_NUM_TO_GO);
  }
  
  go() {
    this.position += 1;
  }
}