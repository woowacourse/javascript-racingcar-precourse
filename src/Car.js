import { getRandomNumber } from "./util.js";

export class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  canMoveForward() {
    const MIN = 0;
    const MAX = 9;
    const BASE_POINT = 4;
    
    const randomNumber = getRandomNumber(MIN, MAX);
  
    return randomNumber >= BASE_POINT;
  }

  move() {
    this.position++;
  }

  getName() {
    
    return this.name;
  }

  getPosition() {
    
    return this.position;
  }

  getCurrentStateHTML() {
    return `
      <div class="car-current-state">
        <span class="car-current-state__name-container">
          <span>${this.name}</span>
          <span>:</span>
        </span>
        <span>${"-".repeat(this.position)}</span>
      </div>
    `;
  }
}