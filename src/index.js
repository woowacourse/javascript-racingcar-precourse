import Car from './Car.js';

const $app = document.querySelector('#app');

const cars = {};

const carNameInputRender = () => `
  <p>
    자동차 이름을 <strong>5자 이하로</strong> 콤마로 구분하여 입력해주세요.
    <br />
    올바른 예) east,west,south,north <br />
  </p>
  <form>
    <input type="text" />
    <button>확인</button>
  </form>`;

const raceCountRender = () => `
  <h4>시도할 횟수를 입력해주세요.</h4>
  <form>
    <input type="number" />
    <button>확인</button>
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
  return true;
};

const raceRender = () => {
  let temp = '';
  for (const car of Object.keys(cars)) {
    cars[car].createRandomNumber();
    cars[car].forwardOrNot();

    temp += `<div>
      ${car} : ${cars[car].dist()}
      </div>`;
  }
  return temp;
};

$app.addEventListener('submit', e => {
  const $carNameInput = $app.querySelector('input[type=text]');
  const $carNameInputConfirm = $app.querySelector('input[type=text] ~ button');

  e.preventDefault();
  if (e.target !== $app.querySelectorAll('form')[0]) return;
  if (!carNameValidate($carNameInput.value)) {
    window.alert('차량 이름은 5자 이내 혹은 1자 이상을 입력해주세요');
    $carNameInput.focus();
    return;
  }
  $carNameInput.disabled = true;
  $carNameInputConfirm.disabled = true;

  $app.innerHTML += raceCountRender();
  console.log(cars);
});

$app.addEventListener('submit', e => {
  const $raceCountInput = $app.querySelector('input[type=number]');
  const $raceCountInputConfirm = $app.querySelector(
    'input[type=number] ~ button'
  );

  e.preventDefault();
  if (e.target !== $app.querySelectorAll('form')[1]) return;
  if (!raceCountValidate($raceCountInput.value)) {
    window.alert('양수를 입력해주세요');
    $raceCountInput.focus();
    return;
  }
  $raceCountInput.disabled = true;
  $raceCountInputConfirm.disabled = true;
  $app.innerHTML += `<h4>📄 실행 결과</h4>`;

  // 객체들 입력된 input 숫자 만큼 반복되서 실행된다.
  // 3번 만큼 $app.innerHTML += raceCountRender()가 실행된다.
  // -> 인스틴스.createRandomNumber() 실행
  // -> 거기에 더해지는 내용 실행

  for (let i = 0; i < $raceCountInput.value; i++) {
    $app.innerHTML += `<div>${raceRender()}</div><br>`;
  }
});

window.addEventListener('DOMContentLoaded', () => {
  $app.innerHTML = carNameInputRender();
});
