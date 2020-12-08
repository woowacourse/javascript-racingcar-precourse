import RacingCarGame from './RacingCarGame.js';
import GetUserInput from './GetUserInput.js';

document.getElementById('try-count-form').hidden = true;
document.getElementById('game-result-container').hidden = true;

let getUserInput;

document.addEventListener('click', function(event) {
  const id = event.target.id;
  if (id === 'car-names-submit') {
    getUserInput = new GetUserInput();
    const isValid = getUserInput.getCars();
    document.getElementById('game-result-container').hidden = true;
    document.getElementById('racing-count-input').value = null;
    if (isValid === 1) {
      document.getElementById('try-count-form').hidden = false;
    }
  }
  if (id === 'racing-count-submit') {
    const isValid = getUserInput.getCount();
    document.getElementById('game-status').innerHTML = '';
    document.getElementById('game-result').innerHTML = '';
    if (isValid === 1) {
      const game = new RacingCarGame(getUserInput.cars, getUserInput.count);
      game.play();
      document.getElementById('game-result-container').hidden = false;
    }
  }
});
