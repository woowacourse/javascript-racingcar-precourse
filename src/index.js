import RacingCarGame from './racingCarGame.js';
import Scanner from './scanner.js';

const racingCarGame = new RacingCarGame();

// TODO: 이름 다시 세팅하면 게임 결과 지우기
const handleCarNamesSubmitBtn = function () {
  try {
    const carNamesList = Scanner.getCarNamesInputToList();
    racingCarGame.initCars(carNamesList);
    Scanner.setElemVisible(
      document.querySelector('#racing-count-container'),
      true,
    );
  } catch (e) {
    alert(e.message);
    if (e.errElem) {
      e.errElem.focus();
    }
  }
};

const printRoundResult = function (printContainer) {
  const carGameResultContainer = printContainer;
  const oneRoundResultDiv = document.createElement('div');
  racingCarGame.carList.forEach(car => {
    oneRoundResultDiv.innerHTML += `
    ${car.getName()}: ${'-'.repeat(car.getPosition())} <br/>`;
  });
  oneRoundResultDiv.innerHTML += '<br/>';
  carGameResultContainer.appendChild(oneRoundResultDiv);
};

const printWinner = function (printContainer) {
  const carGameResultContainer = printContainer;
  const winnerResultDiv = document.createElement('div');
  const winPosition = Math.max(
    ...racingCarGame.carList.map(car => car.getPosition()),
  );
  const winners = racingCarGame.carList
    .filter(car => car.getPosition() === winPosition)
    .map(car => car.getName());
  winnerResultDiv.innerHTML = `최종 우승자: ${winners.join(', ')}`;
  carGameResultContainer.appendChild(winnerResultDiv);
};

const handleCountSubmitBtn = function () {
  try {
    const racingCount = Scanner.getRacingCountFromUser();
    const carGameResultContainer = document.querySelector(
      '#car-game-result-container',
    );
    carGameResultContainer.innerHTML = '<h4>📄 실행 결과</h4>';
    racingCarGame.setRacingCount(racingCount);
    racingCarGame.clearCarPositions();
    while (racingCarGame.racingCount--) {
      racingCarGame.raceOneRound();
      printRoundResult(carGameResultContainer);
    }
    printWinner(carGameResultContainer);
    Scanner.setElemVisible(carGameResultContainer, true);
  } catch (e) {
    // TODO: 알림 메소드 따로 빼기
    alert(e.message);
    if (e.errElem) {
      e.errElem.focus();
    }
  }
};

const carNamesSubmitBtn = document.querySelector('#car-names-submit');
carNamesSubmitBtn.addEventListener('click', handleCarNamesSubmitBtn);

const racingCountSubmitbtn = document.querySelector('#racing-count-submit');
racingCountSubmitbtn.addEventListener('click', handleCountSubmitBtn);
