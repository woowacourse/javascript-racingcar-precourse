export const createWinnerElement = (winner) => {
  const $resultContainer = document.querySelector('#result-container');
  const $winnerText = document.createElement('div');
  $winnerText.textContent = `최종 우승자: ${winner.join(', ')}`;
  $resultContainer.appendChild($winnerText);
};

export const createResultList = (carEntry) => {
  const $resultUl = document.body.querySelector('#result-list');
  const $resultLi = document.createElement('li');
  for (const car of carEntry) {
    $resultLi.appendChild(createResultText(car));
  }
  $resultLi.style.marginBottom = '30px';
  $resultUl.appendChild($resultLi);
};

const createResultText = (car) => {
  const $resultText = document.createElement('div');
  $resultText.textContent += `
    ${car.name}: ${car.distance}
    `;

  return $resultText;
};

export const createRestartBtn = () => {
  const $racingWrapper = document.body.querySelector('#app');
  const $restartBtn = document.createElement('button');
  $restartBtn.id = 'restart-btn';
  $restartBtn.textContent = '다시하기';
  $racingWrapper.appendChild($restartBtn);

  return $restartBtn;
};
