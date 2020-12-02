import { RacingCarModel } from './modules/models';
import { RacingCarView } from './modules/views';
// export default function RacingCarGame() {
// }
// export default class RacingCarGame {
// }

// new RacingCarGame();

window.addEventListener('DOMContentLoaded', () => {
  const carNamesInput = document.getElementById('#car-names-inputs');
  const carNamesSubmitButtton = document.getElementById('#car-names-submit');
  const carRacingCountDiv = document.getElementById(
    '#car-racing-count-container',
  );
  const gameModel = new RacingCarModel();
  const gameView = new RacingCarView(
    gameModel,
    carNamesInput,
    carNamesSubmitButtton,
    carRacingCountDiv,
  );
});
