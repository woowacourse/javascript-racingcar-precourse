import RacingCarGame from "./racingCarGame.js";

function Car(name) {
  this.name = name;
  this.randomNumbers = [];
  this.move = "";
  this.update = function () {
    let randomNum = Math.floor(Math.random() * 10);
    this.randomNumbers.push(randomNum);
    if (randomNum >= 4) {
      this.move += "-";
    }
  };
}

export default function main() {
  let cars = [];

  // 인풋 연결하기
  initHTML();

  // 횟수 입력창, 실행 결과창 숨겨두기
  hideCode();

  // 자동차 이름 입력받기
  document.getElementById("car-names-submit").addEventListener("click", onNameSubmit);
  document.getElementById("racing-count-submit").addEventListener("click", onRoundSubmit);

  function onNameSubmit() {
    // 만약 input.value의 형태가 맞지 않으면 alert받기

    let alertMsg = verifyInput(document.getElementById("car-names-input").value);

    if (alertMsg !== "") {
      alert(alertMsg);
      document.getElementById("car-names-input").focus();

      return;
    }

    let carNames = document.getElementById("car-names-input").value.split(",");
    for (let i = 0; i < carNames.length; i++) {
      cars.push(new Car(carNames[i]));
    }

    // 횟수 입력창 보여주기
    showCountSubmitForm();
  }

  // 자동차 이름 검증
  function verifyInput(input) {
    let names = input.split(",");
    console.log(names);

    let alertMsg = "";

    for (let i = 0; i < names.length; i++) {
      if (names[i].length > 5) {
        alertMsg = "자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.";
      } else if (names[i].length === 0) {
        alertMsg = "자동차 이름을 1자 이상 입력해주세요.";
      }
    }

    return alertMsg;
  }

  // 횟수 입력받기
  function onRoundSubmit() {
    let round = document.getElementById("racing-count-input").value;

    for (let i = 0; i < round; i++) {
      for (let j = 0; j < cars.length; j++) {
        // let move = "";
        cars[j].update();

        // if (cars[j].randomNumbers >= 4 && cars[j].randomNumbers <= 9) {
        //   move = "-";
        // } else {
        //   move = "";
        // }

        // 라운드별로 랜덤 숫자 표기
        document.getElementById("print-result-form").innerHTML += `${cars[j].name}: ${cars[j].move}<br>`;
      }

      // 개행
      document.getElementById("print-result-form").innerHTML += "<br />";
      //
    }
    // 결과창 보여주기
    const game = new RacingCarGame();
    let winner = game.play(cars);
    document.getElementById("print-result-form").innerHTML += `최종 우승자: ${winner}`;
    showResultForm();
  }
}

function initHTML() {
  const carNameInput = document.getElementsByTagName("input")[0];
  carNameInput.id = "car-names-input";
  const raceCountInput = document.getElementsByTagName("input")[1];
  raceCountInput.id = "racing-count-input";
  const RaceCountSubmitBtn = document.getElementsByTagName("button")[1];
  RaceCountSubmitBtn.id = "racing-count-submit";
  const countSubmitForm = RaceCountSubmitBtn.parentNode;
  countSubmitForm.id = "count-submit-form";
  const resultHead = document.getElementsByTagName("h4")[1];
  resultHead.id = "result-head";
  const printResultForm = resultHead.parentNode;
  printResultForm.id = "print-result-form";
  const carNameSubmitBtn = document.getElementsByTagName("button")[0];
  carNameSubmitBtn.id = "car-names-submit";
}

function hideCode() {
  document.getElementById("count-submit-form").style.visibility = "hidden";
  document.getElementById("print-result-form").style.visibility = "hidden";
}

function showCountSubmitForm() {
  document.getElementById("count-submit-form").style.visibility = "visible";
}

function showResultForm() {
  document.getElementById("print-result-form").style.visibility = "visible";
}
