function Car(name) {
  this.name = name;
  this.randomNumbers = [];
  this.update = function () {
    this.randomNumbers.push(Math.floor(Math.random() * 10));
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

    let carNames = document.getElementById("car-names-input").value.split(",");

    for (let i = 0; i < carNames.length; i++) {
      cars.push(new Car(carNames[i]));
    }
    console.dir(cars);
    // 횟수 입력창 보여주기
    showCountSubmitForm();
  }

  function onRoundSubmit() {
    let round = document.getElementById("racing-count-input").value;

    for (let i = 0; i < round; i++) {
      for (let j = 0; j < cars.length; j++) {
        cars[j].update();
        document.getElementById("print-result-form").innerHTML += `${cars[j].name}: ${cars[j].randomNumbers}<br>`;
      }
      document.getElementById("print-result-form").innerHTML += "<br />";
      // 전진 여부 라운드마다 표시
    }
    // 결과창 보여주기
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
