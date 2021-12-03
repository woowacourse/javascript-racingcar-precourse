import Car from './car.js';

class RacingGame{
  constructor(){
    this.nameSubmitButton = document.getElementById('name-form-button');
    this.userInput = document.getElementById('name-form-input');
    this.cars = [];
    this.init();
  }

  init(){
    let names;
    this.nameSubmitButton.addEventListener('click', (e) => {
      e.preventDefault();
      names = this.userInput.value.split(',');
      names.forEach((element) => {
        this.cars.push(new Car(element, 0));
      });
      console.log(this.cars);
    });
  }
} 

new RacingGame();


