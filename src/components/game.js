import { CARS_NAME, GMAE_COUNT, NUMBER } from "../constants/constant.js";

export function gameStart(userInput) {
  console.log(userInput)
  const gameWinCountArray = Array.from({length: userInput[CARS_NAME].split(",").length}, () => NUMBER.ZERO);
  const gameResultObject = {
    gameResult: "",
    gmaeWinner: ""
  }
  for (let i = 0; i < userInput[GMAE_COUNT]; i++) {
    const gameRandonNumberArray = setGameRandonNumber(userInput);
    const winGameCountArray = setWinGameCount(gameRandonNumberArray, gameWinCountArray);
    console.log(winGameCountArray)
  }
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