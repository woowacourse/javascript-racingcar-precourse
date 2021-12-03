import { formEvent } from './components/formEvent.js';
import { gameStart } from './components/game.js';

export function Car(userInput) {
  this.userInput = userInput;
  const gameResultWrap = document.getElementById("racing-result");
  const gameResultDiv = document.createElement('div');
  const gameResultSpan = document.createElement('span');
  gameResultSpan.setAttribute("id", "racing-winners")
  const gameResult = gameStart(userInput);
  gameResultDiv.innerHTML = `${gameResult.gameProcess}\n 최중 우승자: ${gameResult.gmaeWinner} `;
  gameResultSpan.textContent = gameResult.gmaeWinner;
  gameResultWrap.appendChild(gameResultDiv)
}

formEvent()