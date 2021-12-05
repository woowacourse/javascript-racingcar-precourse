import Car from './Car.js';

const $app = document.querySelector('#app');

const cars = {};

const carNameInputRender = () => `
  <h1>🏎️ 자동차 경주 게임</h1>
  <p>
    자동차 이름을 <strong>5자 이하로</strong> 콤마로 구분하여 입력해주세요.
    <br />
    올바른 예) east,west,south,north <br />
  </p>
  <form>
    <input type="text" id="car-names-input"/>
    <button id="car-names-submit">확인</button>
  </form>`;

const raceCountRender = () => `
  <h4>시도할 횟수를 입력해주세요.</h4>
  <form>
    <input type="number" id="racing-count-input"/>
    <button id="racing-count-submit">확인</button>
  </form>`;

const carNameValidate = carNames => {
  const splitCarNames = carNames.split(',');
  for (let i = 0; i < splitCarNames.length; i++) {
    const carName = splitCarNames[i].trim();
    if (carName.length > 5 || carName.length < 1) {
      return false;
    }
    cars[carName] = new Car(carName);
  }
  return true;
};

const raceCountValidate = count => {
  if (count < 0) return false;
  if (!count) return false;
  return true;
};

const raceRender = () => {
  let temp = '';
  for (const car of Object.keys(cars)) {
    cars[car].createRandomNumber();
    cars[car].forwardOrNot();

    temp += `<div>
      ${car} : ${cars[car].distRender()}
      </div>`;
  }
  return temp;
};

const victoryRender = () => {
  // class들 순회하면서 dist를 호출해서 sumDist를 비교하면서 더 크면 기존꺼를 다 뺴고 넣고 같으면 기존꺼에 같이넣는식
  let result = '';
  let MIN = Number.MIN_SAFE_INTEGER;
  let winner = [];

  for (const car of Object.keys(cars)) {
    if (MIN < cars[car].dist) {
      winner = [];
      winner.push(car);
      MIN = cars[car].dist;
    } else if (MIN === cars[car].dist) {
      winner.push(car);
    }
  }
  result = winner.join(', ');
  return result;
};

// 차량 번호 입력
$app.addEventListener('submit', e => {
  // $app.querySelector('input[type=text]').id = 'car-names-input';
  // $app.querySelector('input[type=text] ~ button').id = 'car-names-submit';

  const $carNamesInput = $app.querySelector('#car-names-input');
  const $carNamesSubmit = $app.querySelector('#car-names-submit');

  e.preventDefault();
  if (e.target !== $app.querySelectorAll('form')[0]) return;
  if (!carNameValidate($carNamesInput.value)) {
    window.alert('차량 이름은 5자 이내 혹은 1자 이상을 입력해주세요');
    $carNamesInput.focus();
    return;
  }
  $carNamesInput.disabled = true;
  $carNamesSubmit.disabled = true;

  $app.innerHTML += raceCountRender();
  console.log(cars);
});

// Count 입력
$app.addEventListener('submit', e => {
  // $app.querySelector('input[type=number]').id = 'racing-count-input';
  // $app.querySelector('input[type=number] ~ button').id = 'racing-count-submit';

  const $racingCountInput = $app.querySelector('#racing-count-input');
  const $racingCountSubmit = $app.querySelector('#racing-count-submit');

  e.preventDefault();
  if (e.target !== $app.querySelectorAll('form')[1]) return;
  if (!raceCountValidate($racingCountInput.value)) {
    window.alert('숫자, 양수를 입력해주세요');
    $racingCountInput.focus();
    return;
  }
  $racingCountInput.disabled = true;
  $racingCountSubmit.disabled = true;
  $app.innerHTML += `<h4>📄 실행 결과</h4>`;

  for (let i = 0; i < $racingCountInput.value; i++) {
    $app.innerHTML += `<div>${raceRender()}</div><br>`;
  }

  $app.innerHTML += `최종 우승자: <span id="racing-winners">${victoryRender()}</span>`;
});

window.addEventListener('DOMContentLoaded', () => {
  $app.innerHTML = carNameInputRender();
});
