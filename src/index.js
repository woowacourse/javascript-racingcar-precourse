export default function RacingCarGame() {
  const inputElements = document.querySelectorAll('.car-game-container input');
  const submitButtons = document.querySelectorAll('.car-game-container button');
  let carNamesInputElement = inputElements[0];
  let carNamesSubmitButton = submitButtons[0];
  carNamesInputElement.id = 'car-names-input';
  carNamesSubmitButton.id = 'car-names-submit';
  carNamesSubmitButton.addEventListener('click', handleCarNames);
}

const handleCarNames = () => {
  const separator = ',';
  const carNamesInputElement = document.querySelector('#car-names-input');
  let carNames = carNamesInputElement.value.split(separator);

  if (carNames.length <= 1 || carNames.length != new Set(carNames).size) {
    return requestInputAgain();
  }
  for (let name of carNames) {
    const errno = validateCarName(name);
    if (errno) {
      return requestInputAgain();
    }
  }
  createRacingCountTags();
};

const validateCarName = (name) => {
  // 5자 초과
  // 공백만
};

const requestInputAgain = () => {
  // alert
  // empty input
  // focus
};

new RacingCarGame();
