import GameController from './GameController.js';

export default function playGame(userInput, view) {
  const controller = new GameController(userInput, view);

  view.initView();
  controller.repeatRace();
  controller.decideWinners();
}
