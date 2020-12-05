import { RacingCarGameViewModel } from './modules/models';
import { RacingCarGameView } from './modules/views';

window.addEventListener('DOMContentLoaded', () => {
  const carNamesInput = document.getElementById('#car-names-inputs');
  const carNamesSubmitButtton = document.getElementById('#car-names-submit');
  const carRacingCountDiv = document.getElementById(
    '#car-racing-count-container',
  );
  const carRacingResultDiv = document.getElementById(
    '#car-racing-result-container',
  );
  const gameViewModel = new RacingCarGameViewModel();

  const gameView = new RacingCarGameView(
    gameViewModel,
    carNamesInput,
    carNamesSubmitButtton,
    carRacingCountDiv,
    carRacingResultDiv,
  );
});
