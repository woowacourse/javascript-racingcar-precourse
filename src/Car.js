export class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
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