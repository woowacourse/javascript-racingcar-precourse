export default function RacingCarGame() {}

function Car(name) {
  this.name = name;
}
console.log("east, west, south, north");
const btnCarNames = document.getElementById("car-names-submit");
const inputCarNames = document.getElementById("car-names-input");

function isCorrectCarNames(carName) {
  if (carName.length > 0 && carName.length <= 5) {
    return true;
  }

  return false;
}

btnCarNames.onclick = function () {
  const carNames = inputCarNames.value.split(",");
  const correctCarNames = carNames.map(function (carName) {
    carName = carName.trim();
    if (!isCorrectCarNames(carName)) {
      alert("모든 자동차의 이름을 5자 이하로 입력해주세요.");
      inputCarNames.value = "";

      return;
    }

    return carName;
  });
  console.log(correctCarNames);
  const racingBox = document.getElementById("racing-count-box");
  if (!correctCarNames.includes(undefined)) {
    racingBox.style.display = "block";
  }
};
new RacingCarGame();
