import {printResultMessage, printStatusMessage} from './output.js';

export function startGame(game) {
  game.nowCount = 0;
}

export function playGame(game, carList) {
  console.log(carList);
  while (!isGameEnd(game)) {
    for (const car of carList) {
      car.moveCar();
    }
    printStatusMessage(carList);
    increaseCount(game);
  }
}

export function endGame(carList) {
  const winnerList = getWinner(carList);
  printResultMessage(winnerList);
}

// setters
export function setTotalCount(game, totalCount) {
  game.totalCount = totalCount;
}

export function setCarList(game, carList) {
  game.carList = carList;
}

export function setWinnerList(game, winnerList) {
  game.winnerList = winnerList;
}

export function increaseCount(game) {
  game.nowCount = game.nowCount + 1;
}

export function isGameEnd(game) {
  return game.nowCount === game.totalCount;
}

export function getWinner(carList) {
  const winnerList = new Array();
  let maxCount = 0;
  for (const car of carList) {
    console.log(car.name, car.move);
    if (car.move > maxCount) {
      winnerList.length = 0;
      winnerList.push(car.name);
      maxCount = car.move;
    } else if (car.move === maxCount) {
      winnerList.push(car.name);
    }
  }
  return winnerList;
}
