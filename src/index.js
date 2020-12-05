import RacingCarGame from './racingCarGame.js';
import Scanner from './scanner.js';
import Printer from './printer.js';

const racingCarGame = new RacingCarGame();

const handleCarNamesSubmitBtn = function () {
  try {
    const carNamesList = Scanner.getCarNamesInputToList();
    racingCarGame.initCars(carNamesList);
    Scanner.setElemVisible(
      document.querySelector('#racing-count-container'),
      true,
    );
    Printer.initCarGameResultContainer();
  } catch (e) {
    alert(e.message);
    if (e.errElem) {
      e.errElem.focus();
    }
  }
};

const handleCountSubmitBtn = function () {
  try {
    const racingCount = Scanner.getRacingCountFromUser();
    const carGameResultContainer = document.querySelector(
      '#car-game-result-container',
    );
    racingCarGame.setRacingCount(racingCount);
    racingCarGame.clearCarPositions();
    Printer.initCarGameResultContainer(carGameResultContainer);
    while (racingCarGame.racingCount--) {
      racingCarGame.raceOneRound();
      Printer.printOneRoundResult(
        carGameResultContainer,
        racingCarGame.carList,
      );
    }
    Printer.printWinner(carGameResultContainer, racingCarGame.carList);
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
