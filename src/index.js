import { formEvent } from './components/formEvent.js';
import { gameStart } from './components/game.js';
import { NUMBER, WINNER } from './utils/constant.js';

export function Car(userInput) {
  this.userInput = userInput;
  const gameResultWrap = document.getElementById("racing-result");
  const gameResultDiv = document.createElement("div");
  const gameResultSpan = document.createElement("span");
  const gameResult = gameStart(userInput);
  gameResultSpan.id = "racing-winners";
  gameResultSpan.style.opacity = NUMBER.ZERO;
  gameResultDiv.innerHTML = `${gameResult.gameProcess}\n ${WINNER}: ${gameResult.gmaeWinner} `;
  gameResultSpan.textContent = gameResult.gmaeWinner;
  gameResultWrap.append(gameResultDiv, gameResultSpan)
}

formEvent()