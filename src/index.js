import RacingCarGame from "./racing_car_game.js";

const isNamesArrayEmpty = (namesArray) => {
  let result = false;

  if (!namesArray.length) {
    alert("자동차의 이름을 임력해주세요");
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
    }
  }

  return result;
};

const passNamesInputToGameController = (e) => {
  const nameInputStr = e.target.parentNode.children[0].value;
  const namesArray = nameInputStr.split(",").map((_name) => _name.trim());

  if (!isValidNames(namesArray) || isNamesArrayEmpty(namesArray)) {
    return;
  }

  gameController.setRacingCars(namesArray);
};

const routeDocClickEvent = (e) => {
  if (e.target.id === "car-names-submit") {
    passNamesInputToGameController(e);
  }
};

const gameController = new RacingCarGame();
document.addEventListener("click", routeDocClickEvent);
