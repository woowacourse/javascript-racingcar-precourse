import { cars } from '../model/cars.js';

const $app = document.querySelector('#app');
const countFormTitle = $app.querySelectorAll('h4')[0];
const racingCountInputForm = $app.querySelectorAll('form')[1];
const resultTitle = $app.querySelectorAll('h4')[1];

// 자동차 이름 입력만 렌더
const racingCountAndResultHide = () => {
  // 카운트 입력 숨기기
  countFormTitle.style.display = 'none';
  racingCountInputForm.style.display = 'none';

  // 결과 숨기기
  resultTitle.style.display = 'none';
};

// 시도 횟수 렌더
const racingCountInputRender = () => {
  countFormTitle.style.display = 'block';
  racingCountInputForm.style.display = 'block';
};

// 시도 과정 및 결과
const moveDistByOne = $racing => {
  for (const car of Object.keys(cars)) {
    $racing.innerHTML += `
      ${car}: ${cars[car].distRender()}<br>
    `;
  }
};

// 최종 결과가
const winnerCalc = () => {
  const winners = [];
  for (const car of Object.keys(cars)) {
    winners.push(cars[car].dist);
  }

  const finalWinners = [];
  const maxDist = Math.max(...winners);
  for (const car of Object.keys(cars)) {
    if (cars[car].dist === maxDist) {
      finalWinners.push(car);
    }
  }
  return finalWinners.join(', ');
};

const racingRender = racingCount => {
  const $racing = document.createElement('div');
  $racing.id = 'racing';

  for (let i = 0; i < racingCount; i++) {
    moveDistByOne($racing);
    $racing.innerHTML += '<br>';
  }
  $app.appendChild($racing);
};

const racingWinnerRender = () => {
  $app.innerHTML += `<div>최종 우승자: <span id="racing-winners">${winnerCalc()}</span></div>`;
};

const racingAndResultRender = racingCount => {
  resultTitle.style.display = 'block';
  racingRender(racingCount);
  racingWinnerRender(racingCount);
};

export {
  racingCountAndResultHide,
  racingCountInputRender,
  racingAndResultRender
};
