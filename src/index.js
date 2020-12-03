import Car from './Car.js';
import {
    getCarNameInput,
    getNumOfTryInput,
    getWinnersName,
    printResultOfOneRound,
    printWinnersName,
    toggleDiplayResultArea,
    toggleDiplayNumOfTryArea
} from './io.js';

const init = (gameName) => {
    const carNameSubmitBtn = document.getElementById('car-names-submit');
    const numOfTrySubmitBtn = document.getElementById('racing-count-submit');

    carNameSubmitBtn.addEventListener('click', getCarNameInput);
    numOfTrySubmitBtn.addEventListener('click', getNumOfTryInput);

    carNameSubmitBtn.currGame = gameName;
    numOfTrySubmitBtn.currGame = gameName;

    toggleDiplayResultArea();
    toggleDiplayNumOfTryArea();
};

export default function RacingCarGame() {
    this.cars = [];
    this.numOfTry = 0;
    this.isFinished = false;
    this.roundStart = () => {
        for (let idx = 0; idx < this.cars.length; idx++) {
            this.cars[idx] = Car.forwardCar(this.cars[idx]);
        }
    }
}

RacingCarGame.racing = (gameName) => {
    while (gameName.numOfTry > 0) {
        gameName.roundStart();
        gameName.numOfTry--;
        printResultOfOneRound(gameName.cars);
    }
    printWinnersName(getWinnersName(gameName.cars));
}

const game = new RacingCarGame();
init(game);