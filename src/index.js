export default function RacingCarGame() {}

function Car(name) {
  this.name = name;
}

const btnCarNames = document.getElementById("car-names-submit");
const inputCarNames = document.getElementById("car-names-input");
btnCarNames.onclick = function () {
  console.log(inputCarNames.value);
  let carNames = inputCarNames.value.split(",");
  console.log(carNames);
};
new RacingCarGame();
