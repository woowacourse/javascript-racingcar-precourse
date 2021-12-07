import { cars } from '../model/cars.js';

const $app = document.querySelector('#app');
const countFormTitle = $app.querySelectorAll('h4')[0];
const racingCountInputForm = $app.querySelectorAll('form')[1];
const resultTitle = $app.querySelectorAll('h4')[1];

// [자동차 이름 입력 창]만 렌더된 상황
const racingCountAndResultHide = () => {
  // [시도 횟수 입력 창] 및 [실행 결과] 숨기기
  countFormTitle.style.display = 'none';
  racingCountInputForm.style.display = 'none';
  resultTitle.style.display = 'none';
};

// [시도 횟수 입력 창] 추가 렌더
const racingCountInputRender = () => {
  const $carNamesInput = $app.querySelector('#car-names-input');
  const $carNamesSubmit = $app.querySelector('#car-names-submit');
  $carNamesInput.disabled = 'true';
  $carNamesSubmit.disabled = 'true';

  countFormTitle.style.display = 'block';
  racingCountInputForm.style.display = 'block';
};

const moveDistByOne = $racing => {
  for (const car of Object.keys(cars)) {
    cars[car].calcDist();
    $racing.innerHTML += `
      ${car}: ${cars[car].distRender()}<br>
    `;
  }
};

// [레이싱] 렌더
const racingRender = racingCount => {
  const $racing = document.createElement('div');
  $racing.id = 'racing';

  for (let i = 0; i < racingCount; i++) {
    moveDistByOne($racing);
    $racing.innerHTML += '<br>';
  }
  $app.appendChild($racing);
};

const finalWinners = [];
const winnerPick = (finalWinners, winnerDist, car) => {
  if (cars[car].dist === winnerDist) finalWinners.push(car);
};

const winnerCalc = () => {
  const winners = [];
  for (const car of Object.keys(cars)) {
    winners.push(cars[car].dist);
  }

  const winnerDist = Math.max(...winners);
  for (const car of Object.keys(cars)) {
    winnerPick(finalWinners, winnerDist, car);
  }
  return finalWinners.join(', ');
};

// [최종 우승자] 렌더
const racingWinnerRender = () => {
  $app.innerHTML += `<div>최종 우승자: <span id="racing-winners">${winnerCalc()}</span></div>`;
};

const racingAndResultRender = racingCount => {
  const $racingCountInput = $app.querySelector('#racing-count-input');
  const $racingCountSubmit = $app.querySelector('#racing-count-submit');
  $racingCountInput.disabled = 'true';
  $racingCountSubmit.disabled = 'true';

  resultTitle.style.display = 'block';
  racingRender(racingCount);
  racingWinnerRender(racingCount);
};

export {
  racingCountAndResultHide,
  racingCountInputRender,
  racingAndResultRender
};
