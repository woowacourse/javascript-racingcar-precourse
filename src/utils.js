import Car from './car.js';

export function startGame(game) {
    game.nowCount = 0;
}

export function setTotalCount(game, totalCount) {
    game.totalCount = totalCount;
}

export function createCars(game, carNameList) {
    let carList = new Array();
    for (const carName of carNameList) {
        let car = new Car(carName);
        carList.push(car);
    }
    game.carList = carList;
}

export function increaseCount(game) {
    game.nowCount = game.nowCount + 1;
}

export function isGameEnd(game) {
    return (game.totalCount == game.nowCount);
}

export function playGame(carList) {
    for (const car of carList) {
        car.moveCar();
    }

    increaseCount();
}

export function endGame() {
    let winnerList = new Array(getWinner());
    printResult(winnerList);
}

export function getWinner(carList) {
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
