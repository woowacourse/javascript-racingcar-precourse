import { makeCars } from "./utils.js";
import { showCountSubmitForm, showResultForm } from "./uiManager.js";

function onNameSubmit() {
  let alertMsg = verifyNameInput(document.getElementById("car-names-input").value);

  if (alertMsg !== "") {
    alert(alertMsg);
    document.getElementById("car-names-input").focus();

    return;
  }

  let carNames = document.getElementById("car-names-input").value.split(",");
  this.cars = makeCars(carNames);

  showCountSubmitForm();
}

function verifyNameInput(input) {
  let names = input.split(",");
  let alertMsg = "";

  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
      alertMsg = "자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.";
    } else if (names[i].length <= 0) {
      alertMsg = "자동차 이름을 1자 이상 입력해주세요.";
    }
  }

  return alertMsg;
}

function onRoundSubmit() {
  const cars = this.cars;
  let alertMsg = verifyRoundInput(document.getElementById("racing-count-input").value);

  if (alertMsg !== "") {
    alert(alertMsg);
    document.getElementById("racing-count-input").focus();

    return;
  }

  let round = document.getElementById("racing-count-input").value;

  // printRace(cars, round)

  for (let i = 0; i < round; i++) {
    for (let j = 0; j < cars.length; j++) {
      cars[j].update();
      document.getElementById("print-result-form").innerHTML += `${cars[j].name}: ${cars[j].move}<br>`;
    }
    document.getElementById("print-result-form").innerHTML += "<br />";
  }

  let winner = this.play(cars);
  document.getElementById("print-result-form").innerHTML += `최종 우승자: ${winner}`;
  showResultForm();
}

function verifyRoundInput(input) {
  let alertMsg = "";

  if (input <= 0) {
    alertMsg = "1 이상의 수를 입력해주세요.";
  }

  return alertMsg;
}

function countMoves(cars) {
  let winner = [];
  winner.push(cars[0]);

  for (let i = 1; i < cars.length; i++) {
    if (cars[i].move.length > winner[0].move.length) {
      winner = [];
      winner.push(cars[i]);
    } else if (cars[i].move.length == winner[0].move.length) {
      winner.push(cars[i]);
    }
  }

  return winner;
}

// function printRace(cars, round) {
//   for (let i = 0; i < round; i++) {
//     for (let j = 0; j < cars.length; j++) {
//       cars[j].update();
//       document.getElementById("print-result-form").innerHTML += `${cars[j].name}: ${cars[j].move}<br>`;
//     }
//     document.getElementById("print-result-form").innerHTML += "<br />";
//   }

//   let winner = this.play(cars);
//   document.getElementById("print-result-form").innerHTML += `최종 우승자: ${winner}`;
//   showResultForm();
// }

export { verifyNameInput, onNameSubmit, onRoundSubmit, countMoves };
