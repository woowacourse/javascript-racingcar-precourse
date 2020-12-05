const carNameSubmitBtn = document.getElementsByTagName("button")[0];
carNameSubmitBtn.id = "car-names-submit";
const RaceCountSubmitBtn = document.getElementsByTagName("button")[1];
RaceCountSubmitBtn.id = "racing-count-submit";
const resultHead = document.getElementsByTagName("h4")[1];
resultHead.id = "result-head";
const raceCountInput = document.getElementsByTagName("input")[1];
raceCountInput.id = "racing-count-input";
const countSubmitForm = RaceCountSubmitBtn.parentNode;
countSubmitForm.id = "count-submit-form";
const printResultForm = resultHead.parentNode;
printResultForm.id = "print-result-form";

export default function RacingCarGame() {
  addEventToCarNameSubmitBtn();
  addEventToRaceCountSubmitBtn();
  hideCode();
}
new RacingCarGame();

// 횟수 입력창, 실행 결과창 숨겨두기
function hideCode() {
  document.getElementById("count-submit-form").style.visibility = "hidden";
  document.getElementById("print-result-form").style.visibility = "hidden";
}

// 횟수 입력창 보여주기
function showCountSubmitForm() {
  document.getElementById("count-submit-form").style.visibility = "visible";
}

// 실행 결과창 보여주기
function showResultForm() {
  document.getElementById("print-result-form").style.visibility = "visible";
}

// 자동차 이름 제출 버튼에 이벤트 리스너 달기
function addEventToCarNameSubmitBtn() {
  carNameSubmitBtn.addEventListener("click", onCarNameSubmit);
}

// 전체 자동차 이름 string으로 받기
function onCarNameSubmit() {
  const carNameInput = document.getElementsByTagName("input")[0];
  carNameInput.id = "car-names-input";

  let carNamesString = carNameInput.value;
  const carObj = makeCarNameArray(carNamesString);

  carObj && showCountSubmitForm();
}

// string으로 받은 이름 콤마(,) 기준으로 어레이에 담기
function makeCarNameArray(carNamesString) {
  let carNames = carNamesString.split(",");

  makeCarObj(carNames);
  return makeCarObj;
}

// 각 자동차에 이름과 인덱스, 랜덤 넘버 부여한 객체 어레이 생성
function makeCarObj(carNames) {
  const randoms = makeRandomNumber(carNames);
  let carsArr = [];

  for (let i = 0; i < carNames.length; i++) {
    let carObj = {
      name: `${carNames[i]}`,
      index: `${i + 1}`,
      randomNum: randoms[i],
    };
    carsArr.push(carObj);
  }
  makeResultBox(carsArr);
}

// 랜덤 숫자 생성
function makeRandomNumber(carNames) {
  let randoms = [];

  for (let i = 0; i < carNames.length; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    randoms.push(randomNumber);
  }
  return randoms;
}

// 실행 결과창 생성
function makeResultBox(carsArr) {
  const resultBox = document.createElement("div");
  resultBox.id = "result-box";
  resultHead.append(resultBox);

  printResult(resultBox, carsArr);
}

// 실행 결과창에 자동차의 이름, 랜덤숫자 출력해보기
onRaceCountSubmit();

function printResult(resultBox, carsArr) {
  let raceCars = [];
  let printMove = "";

  for (let i = 0; i < carsArr.length; i++) {
    let moveCars = {
      name: `${carsArr[i].name}`,
      move: 0,
    };
    // 실행 결과창에 랜덤숫자가 4~9인 경우 전진 출력
    if (carsArr[i].randomNum <= 9 && carsArr[i].randomNum >= 4) {
      printMove = "-";
      moveCars.move += 1;
    } else {
      printMove = "";
    }
    raceCars.push(moveCars);

    resultBox.innerHTML += `${carsArr[i].name}: ${printMove}<br>`;
  }

  console.log(raceCars);
}

// 횟수 입력 버튼에 이벤트 리스너 달기
function addEventToRaceCountSubmitBtn() {
  RaceCountSubmitBtn.addEventListener("click", onRaceCountSubmit);
}

// 횟수 입력 받기
function onRaceCountSubmit() {
  let raceCount = raceCountInput.value;
  raceCount && showResultForm();
  return raceCount;
}
