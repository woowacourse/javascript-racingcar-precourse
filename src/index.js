import { RacingCarGameView } from './modules/views';
import { RacingCarGameViewModel } from './modules/viewModels';
import { RacingCarGameModel } from './modules/models';

window.addEventListener('DOMContentLoaded', () => {
  const carNamesInput = document.getElementById('#car-names-inputs');
  const carNamesSubmitButtton = document.getElementById('#car-names-submit');
  const carRacingCountDiv = document.getElementById(
    '#car-racing-count-container',
  );
  const carRacingResultDiv = document.getElementById(
    '#car-racing-result-container',
  );

  const gameModel = new RacingCarGameModel();
  const gameViewModel = new RacingCarGameViewModel(gameModel);
  const gameView = new RacingCarGameView(
    gameViewModel,
    carNamesInput,
    carNamesSubmitButtton,
    carRacingCountDiv,
    carRacingResultDiv,
  );
});
