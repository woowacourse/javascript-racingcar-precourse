export default function RacingCarGame() {
  addEventToCarNameSubmitBtn();
}
new RacingCarGame();

// 자동차 이름 제출 버튼에 이벤트 리스너 달기
function addEventToCarNameSubmitBtn() {
  const carNameSubmitBtn = document.getElementsByTagName("button")[0];
  carNameSubmitBtn.id = "car-names-submit";
  carNameSubmitBtn.addEventListener("click", onCarNameSubmit);
}

// 전체 자동차 이름 string으로 받기
function onCarNameSubmit() {
  const carNameInput = document.getElementsByTagName("input")[0];
  carNameInput.id = "car-names-input";

  let carNamesString = carNameInput.value;

  makeCarNameArray(carNamesString);
}

// string으로 받은 이름 콤마(,) 기준으로 어레이에 담기
function makeCarNameArray(carNamesString) {
  let carNames = carNamesString.split(",");

  makeCarObj(carNames);
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
  console.log(carsArr, carsArr.length);
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

// 실행 결과창에 자동차의 이름, 랜덤숫자 출력해보기
function makeResultBox(carsArr) {
  const resultHead = document.getElementsByTagName("h4")[1];
  resultHead.id = "result-head";

  const resultBox = document.createElement("div");
  resultBox.id = "result-box";
  resultHead.append(resultBox);

  printResult(resultBox, carsArr);
}

function printResult(resultBox, carsArr) {
  for (let i = 0; i < carsArr.length; i++) {
    resultBox.innerHTML += `${carsArr[i].name}: ${carsArr[i].randomNum}<br />`;
  }
}
