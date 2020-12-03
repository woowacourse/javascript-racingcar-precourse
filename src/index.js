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

  //   console.log(carNameInput);
  let carNamesString = carNameInput.value;

  makeCarNameArray(carNamesString);
}

// string으로 받은 이름 콤마(,) 기준으로 어레이에 담기
function makeCarNameArray(carNamesString) {
  let carNamesArr = carNamesString.split(",");

  makeCarObj(carNamesArr);
}

// 자동차에 이름과 번호 부여
function makeCarObj(carNamesArr) {
  let carsArr = [];

  for (let i = 0; i < carNamesArr.length; i++) {
    let carObj = {
      name: `${carNamesArr[i]}`,
      index: `${i + 1}`,
    };
    carsArr.push(carObj);
  }
  console.log(carsArr);
}
