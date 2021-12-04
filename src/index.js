import { formEvent } from './components/formEvent.js';
import { gameStart } from './components/game.js';
import { NUMBER, WINNER, ELEMENT_ID } from './utils/constant.js';

export function Car(userInput) {
  this.userInput = userInput;
  const gameResultWrap = document.getElementById(ELEMENT_ID.RESULTH1_ID);
  const gameResultDiv = document.createElement("div");
  const gameResultSpan = document.createElement("span");
  const gameResult = gameStart(userInput);
  gameResultSpan.id = ELEMENT_ID.RESULTSPAN_ID;
  gameResultSpan.style.opacity = NUMBER.ZERO;
  gameResultDiv.innerHTML = `${gameResult.gameProcess}\n ${WINNER}: ${gameResult.gmaeWinner} `;
  gameResultSpan.textContent = gameResult.gmaeWinner;
  gameResultWrap.append(gameResultDiv, gameResultSpan)
}

formEvent()