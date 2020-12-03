import {
    isUnderFiveDigits,
    isOnlySpaceString
} from './utils.js';
import Car from './Car.js';

const isValidCarName = (carNames) => carNames.every(
    carName => (isUnderFiveDigits(carName) && !isOnlySpaceString(carName))
);


const getCarNameInput = () => {
    const carNameInput = document.getElementById('car-names-input');
    const carNames = carNameInput.value.split(',');
    if (isValidCarName(carNames)) {
        game.setCars(carNames.map(carName => carName.trim()));
    } else {
        alert("❌유효하지 않은 자동차 이름입니다.\n다시 입력해주세요.");
        carNameInput.value = '';
    }
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