export default function RacingCarGame() {
  addEventToCarNameSubmitBtn();
}
new RacingCarGame();

// 자동차 이름 제출 버튼에 이벤트 리스너 달기
function addEventToCarNameSubmitBtn() {
  const carNameSubmitBtn = document.getElementsByTagName("button")[0];
  carNameSubmitBtn.addEventListener("click", onCarNameSubmit);
}

// 전체 자동차 이름 string으로 받기
function onCarNameSubmit() {
  const carNameInput = document.getElementsByTagName("input")[0];
  let carNamesString = carNameInput.value;

  makeCarNameArray(carNamesString);
}

// string으로 받은 이름 콤마(,) 기준으로 어레이에 담기
function makeCarNameArray(carNamesString) {
  let carNamesArr = carNamesString.split(",");
}
