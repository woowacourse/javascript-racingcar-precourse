import { CARS_NAME, COMMA, DASH, EMPTY, GMAE_COUNT, NUMBER } from "../utils/constant.js";

export function gameStart(userInput) {
  const gameResult = setGameResult(userInput);
  return gameResult;
}

function setGameResult(userInput) {
  const gameWinCountArray = Array.from({length: userInput[CARS_NAME].split(COMMA).length}, () => NUMBER.ZERO);
  const gameResultObject = {
    gameProcess: EMPTY,
    gmaeWinner: EMPTY
  };
  for (let i = 0; i < userInput[GMAE_COUNT]; i++) {
    const winGameCountArray = setWinGameCount(setGameRandonNumber(gameWinCountArray), gameWinCountArray);
    gameResultObject.gameProcess += `${setProcessTemplete(winGameCountArray, userInput[CARS_NAME])}<br/>`;
  }
  gameResultObject.gmaeWinner = setGameWinner(userInput[CARS_NAME], gameWinCountArray);

  return gameResultObject;
}

function setGameRandonNumber(gameWinCountArray) {
  const ramdomNumberArray = [];
  for (let i = 0; i < gameWinCountArray.length; i++) { 
    ramdomNumberArray.push(MissionUtils.Random.pickNumberInRange(NUMBER.RANDOM_START, NUMBER.RANDOM_END));
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
  winGameCountArray.forEach((winNumber, i) => {
    if (winNumber === topNumber) {
      topNumberCars += `${carsName.split(COMMA)[i]},`;
    }
  })
  
  return topNumberCars.slice(0, -1);
}

function setProcessTemplete(winGameCountArray, carsName) {
  let result = EMPTY;
  for (let i = 0; i < carsName.split(COMMA).length; i++) {
    result += `${carsName.split(COMMA)[i]}: ${gameProcessNumberReplaceText(winGameCountArray[i])}<br/>`;
  }
  
  return result;
}

function gameProcessNumberReplaceText(winGameCount) {
  let result = EMPTY;
  if (winGameCount > NUMBER.ZERO) {
    for (let i = 0; i < winGameCount; i++) {
      result += DASH;
    }
  }

  return result;
}