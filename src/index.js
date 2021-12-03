import Input from './input/Input.js';
import hideNextInput from './view/hideNextInput.js';
import showNextInput from './view/showNextInput.js';
import playGame from './game/playGame.js';

const NAME_ERROR_MESSAGE = '입력 오류! 공백을 포함하지 않은 5자 이하 이름만 입력해주세요!';
const NO_INPUT_ERROR_MESSAGE = '입력 오류! 자동차 이름과 반복할 횟수 모두 입력해주세요!';

function onCarNamesSubmit(event, userInput) {
  event.preventDefault();
  const $carNamesInput = document.querySelector('#car-names-input');

  userInput.setCarNames($carNamesInput.value.split(','));
  if (!userInput.getCarNames()) {
    alert(NAME_ERROR_MESSAGE);
    $carNamesInput.value = '';
    return;
  }
  showNextInput();
}

function onRepeatCountSubmit(event, userInput) {
  event.preventDefault();
  userInput.setRepeatCount(document.querySelector('#racing-count-input').value);
  if (userInput.getCarNames() && userInput.getRepeatCount()) {
    playGame(userInput);
    return;
  }
  alert(NO_INPUT_ERROR_MESSAGE);
}

function gameEventHandler() {
  const $carNamesButton = document.querySelector('#car-names-submit');
  const $repeatCountButton = document.querySelector('#racing-count-submit');
  const userInput = new Input();

  $carNamesButton.addEventListener('click', (event) => {
    onCarNamesSubmit(event, userInput);
  });
  $repeatCountButton.addEventListener('click', (event) => {
    onRepeatCountSubmit(event, userInput);
  });
}

hideNextInput();
gameEventHandler();
