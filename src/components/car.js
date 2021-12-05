import { getRandomNumber } from '../functions/index.js'

export default class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  simulate(){
    if (getRandomNumber() >= 4) this.location += 1;
  }

  toString(){
    let str = `${this.name}: `
    for ( let i = 0; i < this.location; i++ ) {
      str += '-';
    }
    return str;
  }
}