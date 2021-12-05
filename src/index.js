import Car from './lib/Car.js';
import RacingGame from './lib/RacingGame.js';

let racingGame = null;

const $carNamesInput = document.getElementById('car-names-input');
const $carNamesSubmit = document.getElementById('car-names-submit');

const isValidateCarNames = carNamesInput => {
  const carNames = carNamesInput.split(',');

  return carNames.every(carName => carName.length <= 5);
};

$carNamesSubmit.onclick = e => {
  e.preventDefault();

  if (!isValidateCarNames($carNamesInput.value)) {
    alert('자동차 이름은 쉼표(,)를 기준으로 5자 이하만 입력 가능합니다.');
    $carNamesInput.value = '';
  }

  const carList = $carNamesInput.value
    .split(',')
    .map(carName => ({ ...new Car(carName), moveCount: 0 }));

  racingGame = new RacingGame(carList);
  console.log(racingGame);
};
