import { RacingCarGame } from './index.js';
import Car from './car.js';

export function startGame() {
    RacingCarGame().nowCount = 0;
}

export function setTotalCount(totalCount) {
    this.totalCount = totalCount;
}

export function createCars(carNameList) {
    let carList = new Array();
    for (const carName of carNameList) {
        let car = new Car(carName);
        carList.push(car);
    }
    this.carList = carList;
}

export function increaseCount() {
    this.nowCount = this.nowCount + 1;
}

export function isGameEnd() {
    return (this.totalCount == this.nowCount);
}

export function playGame() {
    // call car list
    let carList = this.carList;
    // play 
    for (const car of carList) {
        car.moveCar();
    }
    // increase 'nowCount'
    increaseCount();
}

export function endGame() {
    let winnerList = new Array(getWinner());
    printResult(winnerList);
}

export function getWinner() {
    let carList = this.carList;
    let winnerList = new Array();
    let maxCount = 0;
    for (const car of carList) {
        if (car.move > maxCount) {
            winnerList.length = 0;
            winnerList.push(car.name);
            maxCount = car.move;
        }
        if (car.move === maxCount) {
            winnerList.push(car.name);
        }
    }
    return winnerList;
}
