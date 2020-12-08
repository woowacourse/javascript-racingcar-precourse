import RacingCarGame from "./racing-car-game.js";

const isInputEmpty = (input) => {
  let result = false;
  if (!input.length) {
    alert("입력된 값이 없습니다.");
    result = true;
  }

  return result;
};

const isFiveOrLessLetter = (name) => {
  let result = true;
  if (name.length > 5) {
    alert("자동차의 이름은 5자 이하만 허용됩니다.");
    result = false;
  }

  return result;
};

const isOneOrMoreLetter = (name) => {
  let result = true;
  if (name.length === 0) {
    alert("입력되지 않은 이름이 존재합니다.");
    result = false;
  }

  return result;
};

const isDuplicated = (namesArray) => {
  const nameSet = new Set();
  let result = true;
  for (let i = 0; i < namesArray.length; i++) {
    if (nameSet.has(namesArray[i])) {
      alert("같은 이름이 사용되었습니다.");
      result = false;
      break;
    }
    nameSet.add(namesArray[i]);
  }

  return result;
};

const isValidNames = (namesArray) => {
  let result = true;
  for (let i = 0; i < namesArray.length; i++) {
    result = isFiveOrLessLetter(namesArray[i]);
    result = result === true ? isOneOrMoreLetter(namesArray[i]) : false;
    if (!result) {
      break;
    }
  }
  result = result === true ? isDuplicated(namesArray) : false;

  return result;
};

const isNumber = (input) => {
  let result = true;
  if (!input.length) {
    alert("숫자를 입력해주세요.");
    result = false;
  }

  return result;
};

const isInteger = (input) => {
  const inputToInt = parseInt(input);
  input *= 1;

  return input === inputToInt;
};

const isOneOrGreaterInteger = (input) => {
  let result = isInteger(input);
  result = result === true ? input * 1 > 0 : false;
  if (!result) {
    alert("1 이상의 자연수를 입력해주세요.");
  }

  return result;
};

const isValidCountNum = (input) => {
  let result = isNumber(input);
  result = result === true ? isOneOrGreaterInteger(input) : false;

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
  gameController.getRacingRecord(countInput).forEach((_record) => {
    app.append(gameController.getResultHTML(_record));
  });
  app.append(`최종 우승자: ${gameController.getWinnersString()}`);
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
