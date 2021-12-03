import { formEvent } from './components/formEvent.js';
import { gameStart } from './components/game.js';

export function Car(userInput) {
  this.userInput = userInput;
  const gameResult = gameStart(userInput)
}

formEvent()