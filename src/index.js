import Input from './input/Input.js';
import playGame from './game/playGame.js';

function gameEventHandler() {
  const $carNamesButton = document.querySelector('#car-names-submit');
  const $repeatCountButton = document.querySelector('#racing-count-submit');
  const userInput = new Input();

  $carNamesButton.addEventListener('click', (event) => {
    event.preventDefault();
    userInput.setCarNames(document.querySelector('#car-names-input').value);
  });
  $repeatCountButton.addEventListener('click', (event) => {
    event.preventDefault();
    userInput.setRepeatCount(document.querySelector('#racing-count-input').value);
    playGame(userInput);
  });
}

gameEventHandler();
