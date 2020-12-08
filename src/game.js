import { createRandomNumber } from "./create.js";
import { makeResultEmpty } from "./check.js";

function printWinner(winnerName) {
  let winner = document.querySelector("#winner");
  
  if (!winner.innerText) {
    winner.innerText += `최종우승자: ${winnerName}`;
  } else {
    winner.innerText += `, ${winnerName}`;
  }
}

function findWinner(cars, carsLength, max) {
  let i;
  
  for (i = 0; i < carsLength; i++) {
    if (cars[i].result.length >= max) {
      printWinner(cars[i].name);
    }
  }
}

function findMaxResult(cars, carsLength) {
  let max = 0;
  let i;
  
  for (i = 0; i < carsLength; i++) {
    if (cars[i].result.length >= max) {
      max = cars[i].result.length;
    }
  }
  findWinner(cars, carsLength, max);
}

function printProgress(car) {
  const result = document.querySelector("#result");
  car.random = createRandomNumber();

  if (car.random >= 4) {
    car.result += '-';
  }
  result.innerText += `${car.name}: ${car.result} \n`;
}

export function racingCountPlay(carsLength, cars, racingCountInput) {
  makeResultEmpty();

  let i;
  let j;

  for (i = 0; i < racingCountInput; i++) {
    for (j = 0; j < carsLength; j++) {
      printProgress(cars[j]);
    }
  result.innerText += "\n";
  }
  findMaxResult(cars, carsLength);
}