import inputCarNames from './components/inputCarNames.js';

export default function RacingCarGame($element) {
  this.$gameContainer = $element.querySelector('.car-game-container');
  this.cars = [];

  this.setCars = (newCars) => {
    this.cars = newCars;
  };

  this.init = () => {
    inputCarNames(this.$gameContainer, this.setCars);
  };

  this.init();
}
