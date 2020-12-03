import {
    isDigits,
    isOnlySpaceString,
    isUnderFiveDigits,
    isValidCarName
} from './utils.js';
import Car from './Car.js';


const getCarNameInput = () => {
    const carNameInput = document.getElementById('car-names-input');
    const carNames = carNameInput.value.split(',');
    if (isValidCarName(carNames)) {
        game.setCars(carNames.map(carName => carName.trim()));
        toggleDiplayNumOfTryArea();
    } else {
        alert("❌유효하지 않은 자동차 이름입니다.\n다시 입력해주세요.");
        carNameInput.value = '';
    }
};

const getNumOfTry = () => {
    const numOfTryInput = document.getElementById("racing-count-input");
    if (isDigits(numOfTryInput.value)) {
        game.setNumOfTry(numOfTryInput.value);
        toggleDiplayResultArea();
    } else {
        alert("❌유효하지 않은 시도 횟수입니다.\n다시 입력해주세요.");
        numOfTryInput.value = '';
    }
}

const toggleDiplayNumOfTryArea = () => {
    const numOfTryArea = document.getElementById("app").querySelectorAll("div + div")[0];
    numOfTryArea.style.display = numOfTryArea.style.display === "none" ? "block" : "none";
}

const toggleDiplayResultArea = () => {
    const resultArea = document.getElementById("app").querySelectorAll("div + div")[1];
    resultArea.style.display = resultArea.style.display === "none" ? "block" : "none";
}

const init = () => {
    const carNameSubmitBtn = document.getElementById('car-names-submit');
    const numOfTrySubmitBtn = document.getElementById('racing-count-submit');

    carNameSubmitBtn.addEventListener('click', getCarNameInput);
    numOfTrySubmitBtn.addEventListener('click', getNumOfTry);

    toggleDiplayNumOfTryArea();
    toggleDiplayResultArea();
};

export default function RacingCarGame() {
    let cars = [];
    let numOfTry = 0;
    init();

    this.setCars = (carNameArray) => {
        cars = carNameArray.map(carName => new Car(carName));
    }
    this.setNumOfTry = (numOfTryInput) => {
        numOfTry = parseInt(numOfTryInput);
    }

}

const game = new RacingCarGame();