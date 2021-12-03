import { formEvent } from './components/formEvent.js';
import { gameStart } from './components/game.js';

export function Car(userInput) {
  this.userInput = userInput;
  const gameResultWrap = document.getElementById("racing-result");
  const gameResultDiv = document.createElement("div");
  const gameResultSpan = document.createElement("span");
  const gameResult = gameStart(userInput);
  gameResultSpan.id = "racing-winners";
  gameResultSpan.style.opacity = "0";
  gameResultDiv.innerHTML = `${gameResult.gameProcess}\n 최중 우승자: ${gameResult.gmaeWinner} `;
  gameResultSpan.textContent = gameResult.gmaeWinner;
  gameResultWrap.append(gameResultDiv, gameResultSpan)
}

formEvent()