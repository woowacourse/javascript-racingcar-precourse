import { cars } from '../model/cars.js';

const $app = document.querySelector('#app');
const countFormTitle = $app.querySelectorAll('h4')[0];
const racingCountInputForm = $app.querySelectorAll('form')[1];
const racingResultTitle = $app.querySelectorAll('h4')[1];

// [자동차 이름 입력 창]만 렌더된 상황
const racingCountAndResultHide = () => {
  // [시도 횟수 입력 창] 및 [실행 결과] 숨기기
  countFormTitle.style.display = 'none';
  racingCountInputForm.style.display = 'none';
  racingResultTitle.style.display = 'none';
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

const moveOnce = $racing => {
  for (const car of Object.keys(cars)) {
    cars[car].calcDist();
    $racing.innerHTML += `
      ${car}: ${cars[car].distRender()}<br>
    `;
  }
  $racing.innerHTML += '<br>';
};

// [실행결과 : 레이싱] 렌더
const racingResultRender = racingCount => {
  const $racing = document.createElement('div');
  $racing.id = 'racing';

  for (let i = 0; i < racingCount; i++) {
    const $racingOneTime = document.createElement('div');
    moveOnce($racingOneTime);
    $racing.appendChild($racingOneTime);
  }
  $app.appendChild($racing);
};

const finalWinners = [];
const winnerPick = (finalWinners, winnerDist, car) => {
  if (cars[car].dist === winnerDist) finalWinners.push(car);
};

const winnerCalc = () => {
  const winnersDistArr = [];
  for (const car of Object.keys(cars)) {
    winnersDistArr.push(cars[car].dist);
  }

  const maxDist = Math.max(...winnersDistArr);
  for (const car of Object.keys(cars)) {
    winnerPick(finalWinners, maxDist, car);
  }
  return finalWinners.join(', ');
};

// [최종 우승자] 렌더
const winnersRender = () => {
  $app.innerHTML += `<div>최종 우승자: <span id="racing-winners">${winnerCalc()}</span></div>`;
};

const racingResultAndWinnersRender = racingCount => {
  const $racingCountInput = $app.querySelector('#racing-count-input');
  const $racingCountSubmit = $app.querySelector('#racing-count-submit');
  $racingCountInput.disabled = 'true';
  $racingCountSubmit.disabled = 'true';

  racingResultTitle.style.display = 'block';
  racingResultRender(racingCount);
  winnersRender(racingCount);
};

export {
  racingCountAndResultHide,
  racingCountInputRender,
  racingResultAndWinnersRender
};
