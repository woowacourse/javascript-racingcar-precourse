import { CARS_NAME, GMAE_COUNT, NUMBER } from "../constants/constant.js";

export function gameStart(userInput) {
  console.log(userInput)
  const gameWinCountArray = Array.from({length: userInput[CARS_NAME].split(",").length}, () => NUMBER.ZERO);
  const gameResultObject = {
    gameProcess: "",
    gmaeWinner: ""
  }
  for (let i = 0; i < userInput[GMAE_COUNT]; i++) {
    const gameRandonNumberArray = setGameRandonNumber(userInput);
    const winGameCountArray = setWinGameCount(gameRandonNumberArray, gameWinCountArray);
    if (i === userInput[GMAE_COUNT] - NUMBER.ONE) {
      gameResultObject.gmaeWinner = setGameWinner(userInput[CARS_NAME], winGameCountArray);
    }
    gameResultObject.gameProcess += `${setProcessTemplete(winGameCountArray, userInput[CARS_NAME])}<br/>`;
  }

  return gameResultObject;
}

function setGameRandonNumber(userInput) {
  const ramdomNumberArray = [];
  for (let i = 0; i < userInput[CARS_NAME].split(',').length; i++) { 
    ramdomNumberArray.push(MissionUtils.Random.pickNumberInRange(NUMBER.RANDOM_START, NUMBER.RANDOM_END))
  }
  
  return ramdomNumberArray;
}

function setWinGameCount(gameRandonNumberArray, gameWinCountArray) {
  for (let i = 0; i < gameRandonNumberArray.length; i++) {
    if (gameRandonNumberArray[i] >= NUMBER.GO_STANDARD) {
      gameWinCountArray[i]++;
    }
  }
  
  return gameWinCountArray;
}

function setGameWinner(carsName, winGameCountArray) {
  const topNumber = Math.max(...winGameCountArray);
  let topNumberCars = "";
  winGameCountArray.forEach((v, i) => {
    if (v === topNumber) {
      topNumberCars += `${carsName.split(",")[i]},`;
    }
  })
  
  return topNumberCars.slice(0, -1);
}

function setProcessTemplete(winGameCountArray, carsName) {
  let result = "";
  for (let i = 0; i < carsName.split(",").length; i++) {
    result += `${carsName.split(",")[i]}: ${gameProcessNumberReplaceText(winGameCountArray[i])}<br/>`;
  }
  
  return result;
}

function gameProcessNumberReplaceText(winGameCount) {
  let result = "";
  if (winGameCount > NUMBER.ZERO) {
    for (let i = 0; i < winGameCount; i++) {
      result += "-";
    }
  }

  return result;
}