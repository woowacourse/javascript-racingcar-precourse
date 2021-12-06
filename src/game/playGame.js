import GameController from './GameController.js';

export default function playGame(userInput, view) {
  const controller = new GameController(userInput);

  view.initView();
  controller.repeatRace();
  controller.decideWinners();
}
