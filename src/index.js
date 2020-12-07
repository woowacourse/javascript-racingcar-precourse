import RacingCarGame from './RacingCarGame.js';
import GetUserInput from './GetUserInput.js';

const getUserInput = new GetUserInput();

document.addEventListener('click', function(event) {
  const id = event.target.id;
  if (id === 'car-names-submit') {
    getUserInput.getCars();
  }
  if (id === 'racing-count-submit') {
    const isValid = getUserInput.getCount();
    if (isValid === 1) {
      const game = new RacingCarGame(getUserInput.cars, getUserInput.count);
      game.play();
    }
  }
});
