export default function RacingCarGame() {
  addEventToCarNameSubmitBtn();
}
new RacingCarGame();

function addEventToCarNameSubmitBtn() {
  const carNameSubmitBtn = document.getElementsByTagName("button")[0];
  carNameSubmitBtn.addEventListener("click", onCarNameSubmit);
}

function onCarNameSubmit() {
  const carNameInput = document.getElementsByTagName("input")[0];
  let carNamesString = carNameInput.value;

  console.log(carNamesString);
}
