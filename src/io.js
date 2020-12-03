import Car from "./Car.js";
import {
    isDigits,
    pageRefresh
} from "./utils.js";
import RacingCarGame from "./index.js";

export const getCarNameInput = (e) => {
    const game = e.currentTarget.currGame;
    const carNameInput = document.getElementById('car-names-input');
    const carNames = carNameInput.value.split(',');
    if (game.isFinished) pageRefresh();
    if (Car.isValidCarName(carNames)) {
        game.cars = carNames.map(carName => new Car(carName.trim()));
        toggleDiplayNumOfTryArea();
    } else {
        alert("❌유효하지 않은 자동차 이름입니다.\n다시 입력해주세요.");
        carNameInput.value = '';
    }
};

export const getNumOfTryInput = (e) => {
    const numOfTryInput = document.getElementById("racing-count-input");
    const game = e.currentTarget.currGame;
    if (game.isFinished) pageRefresh();
    if (isDigits(numOfTryInput.value)) {
        game.numOfTry = (parseInt(numOfTryInput.value));
        toggleDiplayResultArea();
        RacingCarGame.racing(game);
        game.isFinished = true;
    } else {
        alert("❌유효하지 않은 시도 횟수입니다.\n다시 입력해주세요.");
        numOfTryInput.value = '';
    }
}

export const toggleDiplayNumOfTryArea = () => {
    const numOfTryArea = document.getElementById("app").querySelectorAll("div + div")[0];
    numOfTryArea.style.display = numOfTryArea.style.display === "none" ? "block" : "none";
}

export const toggleDiplayResultArea = () => {
    const resultArea = document.getElementById("app").querySelectorAll("div + div")[1];
    resultArea.style.display = resultArea.style.display === "none" ? "block" : "none";
}

export const printResultOfOneRound = (cars) => {
    const resultArea = document.getElementById("app").querySelectorAll("div + div")[1];
    const resultElem = document.createElement("p");
    let resText = '';
    for (const car of cars) {
        resText += `${car.carName}: ${'-'.repeat(car.forwardCnt)}\n`;
    }
    resultElem.innerText = resText + '\n';
    resultArea.appendChild(resultElem);
}

export const getWinnersName = (cars) => {
    let max = 0;
    let winnersName = [];
    for (const car of cars) {
        if (car.forwardCnt > max) {
            max = car.forwardCnt;
            winnersName = [car.carName];
        } else if (car.forwardCnt === max) {
            winnersName.push(car.carName);
        }
    }
    return winnersName;
}

export const printWinnersName = (winnersName) => {
    const resultArea = document.getElementById("app").querySelectorAll("div + div")[1];
    const resultElem = document.createElement("p");
    let resText = `최종 우승자: ${winnersName.join(", ")}`;

    resultElem.innerText = resText;
    resultArea.appendChild(resultElem);
}