import { $ } from './util/dom.js';

export const removeBeforeResult = () => {
  const checkbeforeGameResult = $('#result-div');
  const app = $('#app');

  if (checkbeforeGameResult !== null) {
    app.removeChild(checkbeforeGameResult);
  }
  let resultDiv = document.createElement('div');
  resultDiv.id = 'result-div';
  app.appendChild(resultDiv);
};

export const renderResult = cars => {
  let result_div = $('#result-div');
  for (let car in cars) {
    let point = '-'.repeat(cars[car].score);
    let carSpan = document.createElement('span');
    carSpan.innerHTML += `<br>${cars[car].name}: ${point}`;
    result_div.appendChild(carSpan);
  }
  let newBr = document.createElement('span');
  newBr.innerHTML = '<br>';
  result_div.appendChild(newBr);
};

export const getWinner = cars => {
  let maxScore = 0;
  for (let car in cars) {
    if (maxScore < cars[car].score) {
      maxScore = cars[car].score;
    }
  }
  let winners = cars.filter(car => car.score === maxScore);
  renderWinner(winners);
};

const renderWinner = winners => {
  const resultDiv = $('#result-div');
  let winnerSpan = document.createElement('span');
  let winnerFrontSpan = document.createElement('span');
  winnerFrontSpan.innerText = '<br>최종 우승자: ';
  winnerSpan.id = 'racing-winners';

  for (let winner in winners) {
    console.log(winners[winner].name);
    winnerSpan.innerText += `${winners[winner].name}, `;
  }
  const winnerText = winnerSpan.innerText;
  winnerSpan.innerText = winnerText.substring(0, winnerText.length - 2);

  resultDiv.appendChild(winnerFrontSpan);
  resultDiv.appendChild(winnerSpan);
};
