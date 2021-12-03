import { formEvent } from './components/formEvent.js';
import { gameStart } from './components/game.js';
import { NUMBER, RESULTSPAN_ID, WINNER, RESULTH1_ID } from './constants/constant.js';

export function Car(userInput) {
  this.userInput = userInput;
  const gameResultWrap = document.getElementById(RESULTH1_ID);
  const gameResultDiv = document.createElement("div");
  const gameResultSpan = document.createElement("span");
  const gameResult = gameStart(userInput);
  gameResultSpan.id = RESULTSPAN_ID;
  gameResultSpan.style.opacity = NUMBER.ZERO;
  gameResultDiv.innerHTML = `${gameResult.gameProcess}\n ${WINNER}: ${gameResult.gmaeWinner} `;
  gameResultSpan.textContent = gameResult.gmaeWinner;
  gameResultWrap.append(gameResultDiv, gameResultSpan)
}

formEvent()