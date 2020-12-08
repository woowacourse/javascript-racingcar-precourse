import inputCarNames from './components/inputCarNames.js';
import inputRacingCount from './components/inputRacingCount.js';

export default function RacingCarGame($element) {
  this.$gameContainer = $element.querySelector('.car-game-container');
  this.cars = [];
  this.racingCount = 0;

  this.setCars = (newCars) => {
    this.cars = newCars;
  };

  this.setRacingCount = (count) => {
    this.racingCount = count;
  };

  this.init = () => {
    inputCarNames(this.$gameContainer, this.setCars);
    inputRacingCount(this.$gameContainer, this.setRacingCount);
  };

  this.init();
}
