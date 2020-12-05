import RacingCarGame from "./racing_car_game.js";

const isInputEmpty = (input) => {
  let result = false;
  if (!input.length) {
    alert("입력된 값이 없습니다.");
    result = true;
  }

  return result;
};

const isValidNames = (namesArray) => {
  let result = true;
  for (let i = 0; i < namesArray.length; i++) {
    if (namesArray[i].length > 5) {
      alert("자동차의 이름은 5자 이하만 허용됩니다.");
      result = false;
      break;
    } else if (namesArray[i].length === 0) {
      alert("입력되지 않은 이름이 존재합니다.");
      result = false;
      break;
    }
  }

  return result;
};

const isValidCountNum = (input) => {
  let result = true;
  if (!input.length) {
    alert("숫자를 입력해주세요.");
    result = false;
  } else if (input === "0") {
    alert("1 이상의 수를 입력해주세요.");
    result = false;
  }

  return result;
};

const addRacingCountForm = (e) => {
  const racingCountForm = document.createElement("div");
  racingCountForm.innerHTML = `
  <h4>시도할 횟수를 입력해주세요.</h4>
  <input id="racing-count-input" type="number" />
  <button id="racing-count-submit">확인</button>
  `;
  e.target.closest(".car-game-container").append(racingCountForm);
};

const deactivateCarNameForm = (e) => {
  e.target.setAttribute("disabled", "disabled");
  e.target.parentNode.children[0].setAttribute("readonly", "readonly");
};

const deactivateRacingCountForm = (e) => {
  e.target.setAttribute("disabled", "disabled");
  e.target.parentNode.children[1].setAttribute("readonly", "readonly");
};

const getWinners = () => {
  const winners = [];
  const finalMoveStateArray = gameController.cars.map((_car) => {
    return _car.movedDistance;
  });
  let maxDistance = Math.max.apply(null, finalMoveStateArray);
  if (maxDistance === 0) {
    maxDistance = -1; // 모든 차량의 이동거리가 0일 경우 우승자 없음
  }
  gameController.cars.forEach((_car) => {
    if (_car.movedDistance === maxDistance) {
      winners.push(_car.name);
    }
  });

  return winners;
};

const stringifyListElements = (list) => {
  let resultString = "";
  list.forEach((_elem, i) => {
    if (i !== 0) {
      resultString += ", ";
    }
    resultString += _elem;
  });

  return resultString;
};

const getWinnersString = () => {
  const winners = getWinners();
  let resultString = "";
  if (winners.length) {
    resultString = stringifyListElements(winners);
  } else {
    resultString = "우승자가 없습니다.";
  }

  return resultString;
};

const getRacingRecord = (countInput) => {
  const racingRecord = [];
  for (let i = 0; i < countInput; i++) {
    racingRecord.push(gameController.play());
  }

  return racingRecord;
};

const getRacingStatusBars = (record) => {
  return record.map((_status) => {
    let statusBar = "";
    for (let i = 0; i < _status; i++) {
      statusBar += "-";
    }

    return statusBar;
  });
};

const getResultHTML = (record) => {
  const racingStatusBars = getRacingStatusBars(record);
  const resultContainer = document.createElement("div");
  resultContainer.style.marginBottom = "25px";
  for (let i = 0; i < racingStatusBars.length; i++) {
    resultContainer.innerHTML += `
      ${gameController.cars[i].name}: ${racingStatusBars[i]}
      <br />
    `;
  }

  return resultContainer;
};

const passNamesInputToGameController = (e) => {
  const nameInputStr = e.target.parentNode.children[0].value;
  const namesArray = nameInputStr.split(",").map((_name) => _name.trim());
  if (!isValidNames(namesArray) || isInputEmpty(nameInputStr)) {
    return;
  }

  gameController.setRacingCars(namesArray);
  addRacingCountForm(e);
  deactivateCarNameForm(e);
};

const renderRacingRecord = (e) => {
  const countInput = e.target.parentNode.children[1].value;
  if (!isValidCountNum(countInput)) {
    return;
  }

  const app = e.target.closest("#app").children[3];
  getRacingRecord(countInput).forEach((_record) => {
    app.append(getResultHTML(_record));
  });
  app.append(`최종 우승자: ${getWinnersString()}`);
  deactivateRacingCountForm(e);
};

const routeDocClickEvent = (e) => {
  if (e.target.id === "car-names-submit") {
    passNamesInputToGameController(e);
  } else if (e.target.id === "racing-count-submit") {
    renderRacingRecord(e);
  }
};

const gameController = new RacingCarGame();
document.addEventListener("click", routeDocClickEvent);
