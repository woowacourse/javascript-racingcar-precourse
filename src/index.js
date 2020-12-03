import {
    isUnderFiveDigits,
    isOnlySpaceString
} from './utils.js';
import Car from './Car.js';

const getCarNameInput = () => {
    const carNameInput = document.getElementById('car-names-input');
    const carNames = carNameInput.value.split(',');

    game.setCars(carNames);
};

const init = () => {
    const carNameSubmitBtn = document.getElementById('car-names-submit');
    carNameSubmitBtn.addEventListener('click', getCarNameInput);
};

export default function RacingCarGame() {
    let cars = [];
    init();

    this.setCars = (carNameArray) => {
        cars = carNameArray.map(carName => new Car(carName));
        console.log(cars.map(car => car.getCarName()));
    }
}

const game = new RacingCarGame();