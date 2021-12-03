import { $ } from './util/dom.js';

export const removeBeforeResult = () => {
  if ($('#result-div') !== null) {
    $('#app').removeChild($('#result-div'));
  }
  let resultDiv = document.createElement('div');
  resultDiv.id = 'result-div';
  $('#app').appendChild(resultDiv);
};

export const renderResult = cars => {
  for (let i = 0; i < cars.length; i++) {
    let newSpan = document.createElement('span');
    newSpan.innerHTML = `<br>${cars[i].name}: `;
    for (let j = 0; j < cars[i].score; j++) {
      newSpan.innerHTML += '-';
    }
    $('#result-div').appendChild(newSpan);
  }
  let newBr = document.createElement('span');
  newBr.innerHTML = '<br>';
  $('#result-div').appendChild(newBr);
};

export const getWinner = cars => {
  let maxScore = 0;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].score > maxScore) {
      maxScore = cars[i].score;
    }
  }
  let winners = [];
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].score === maxScore) {
      winners.push(cars[i].name);
    }
  }
  renderWinner(winners);
};

const renderWinner = winners => {
  let winnerSpan = document.createElement('span');
  let winnerFrontSpan = document.createElement('span');
  winnerFrontSpan.innerHTML = '<br>최종 우승자: ';
  winnerSpan.id = 'racing-winners';
  for (let i = 0; i < winners.length; i++) {
    if (i + 1 === winners.length) {
      winnerSpan.innerHTML += `${winners[i]}`;
    } else {
      winnerSpan.innerHTML += `${winners[i]}, `;
    }
  }
  $('#result-div').appendChild(winnerFrontSpan);
  $('#result-div').appendChild(winnerSpan);
};
