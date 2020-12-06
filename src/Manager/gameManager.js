import { makeCars } from "./utils.js";
import { showCountSubmitForm, showResultForm } from "./uiManager.js";

function verifyInput(input) {
  let names = input.split(",");
  console.log(names);

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

function onNameSubmit() {
  // 만약 input.value의 형태가 맞지 않으면 alert받기

  let alertMsg = verifyInput(document.getElementById("car-names-input").value);

  if (alertMsg !== "") {
    alert(alertMsg);
    document.getElementById("car-names-input").focus();

    return;
  }

  let carNames = document.getElementById("car-names-input").value.split(",");

  this.cars = makeCars(carNames);

  // 횟수 입력창 보여주기
  showCountSubmitForm();
}

// 횟수 입력받기
function onRoundSubmit() {
  let round = document.getElementById("racing-count-input").value;

  const cars = this.cars;

  for (let i = 0; i < round; i++) {
    for (let j = 0; j < cars.length; j++) {
      cars[j].update();

      // 라운드별로 랜덤 숫자 표기
      document.getElementById("print-result-form").innerHTML += `${cars[j].name}: ${cars[j].move}<br>`;
    }

    // 개행
    document.getElementById("print-result-form").innerHTML += "<br />";
  }
  // 결과창 보여주기

  let winner = this.play(cars);
  document.getElementById("print-result-form").innerHTML += `최종 우승자: ${winner}`;
  showResultForm();
}

export { verifyInput, onNameSubmit, onRoundSubmit };
