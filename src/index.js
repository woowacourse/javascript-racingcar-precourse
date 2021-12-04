import Car from './Car.js';

const $app = document.querySelector('#app');

// const $raceCountInput = $app.querySelector('input[type=number]');
// const $raceCountInputConfirm = $app.querySelector(
//   'input[type=number] ~ button'
// );

const car = {};

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
  // 5자 이내가 아니면 return
  // 띄어쓰기가 들어가면 return
  const splitCarNames = carNames.split(',');
  for (let i = 0; i < splitCarNames.length; i++) {
    const carName = splitCarNames[i].trim();
    if (carName.length > 5 || carName.length < 1) {
      return false;
    }
    car[carName] = new Car(carName);
  }
  return true;
};

$app.addEventListener('submit', e => {
  const $carNameInput = $app.querySelector('input[type=text]');
  const $carNameInputConfirm = $app.querySelector('input[type=text] ~ button');

  if (e.target !== $app.querySelector('form')) return;
  e.preventDefault();
  if (!carNameValidate($carNameInput.value)) {
    window.alert('차량 이름은 5자 이내 혹은 1자 이상을 입력해주세요');
    $carNameInput.focus();
    return;
  }
  $app.innerHTML += raceCountRender();
  console.log(car);
});

window.addEventListener('DOMContentLoaded', () => {
  $app.innerHTML = carNameInputRender();
});
