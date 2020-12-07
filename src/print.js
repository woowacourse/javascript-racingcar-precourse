const resultContainer = document.querySelector('.result-container');

export const showResult = (cars) => {
  const racingResult = document.createElement('div');
  let resultString = '';

  cars.forEach((car) => {
    resultString += `${car.name}: ${printBar(car.forwardCount)} <br>`;
  });
  resultString += `<br>`;

  racingResult.innerHTML = resultString;
  resultContainer.appendChild(racingResult);
};

const printBar = (count) => {
  let forwardBar = '';

  for (let i = 0; i < count; i++) {
    forwardBar += '-';
  }

  return forwardBar;
};

export const showWinner = (winners) => {
  const winner = document.createElement('div');

  winner.innerHTML += `최종 우승자 : ${winners.join(',')}`;
  resultContainer.appendChild(winner);
};
