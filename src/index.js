import Input from './input/Input.js';

const ERROR_MESSAGE = '입력 오류! 공백을 포함하지 않은 5자 이하 이름만 입력해주세요!';

function onCarNamesSubmit(event, userInput) {
  event.preventDefault();
  userInput.setCarNames(document.querySelector('#car-names-input').value.split(','));
}

function onRepeatCountSubmit(event, userInput) {
  event.preventDefault();
  userInput.setRepeatCount(document.querySelector('#racing-count-input').value);
  // TODO: playGame
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

gameEventHandler();
