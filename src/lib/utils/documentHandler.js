export const addIdToElements = () => {
  const [carNamesInput, racingCountInput] = document.getElementsByTagName(
    'input'
  );
  const [carNamesSubmit, racingCountSubmit] = document.getElementsByTagName(
    'button'
  );
  carNamesInput.id = 'car-names-input';
  racingCountInput.id = 'racing-count-input';
  carNamesSubmit.id = 'car-names-submit';
  racingCountSubmit.id = 'racing-count-submit';

  const childrenOfCarGameContainer = document.querySelector(
    '.car-game-container'
  ).children;
  childrenOfCarGameContainer[1].id = 'count-input-part';
  const childrenOfApp = document.querySelector('#app').children;
  childrenOfApp[3].id = 'result-part';
};

export const showElements = (elements) => {
  elements.forEach((element) => {
    element.style.display = 'block';
  });
};

export const showResult = (cars) => {
  let resultPart = document.querySelector('#result-part');
  let idx = 1;
  cars.forEach((car) => {
    let progressContainer = document.createElement('div');
    resultPart.appendChild(progressContainer);
    if (idx === cars.length) {
      progressContainer.innerHTML = `${car.name}: ${car.progress}<br/><br/>`;
    } else {
      progressContainer.innerHTML = `${car.name}: ${car.progress}`;
      idx++;
    }
  });
};

export const showWinners = (winners, numParticipants, maxProgress) => {
  let resultPart = document.querySelector('#result-part');
  let winnerContainer = document.createElement('div');
  resultPart.appendChild(winnerContainer);
  if (winners.length === numParticipants && maxProgress === 0) {
    winnerContainer.innerHTML = `최종 우승자: ${winners}<br/><br/>모두 출발점에 있네요. 모두가 우승자입니다! 👏`;
  } else {
    winnerContainer.innerHTML = `최종 우승자: ${winners}`;
  }
};
