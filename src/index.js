export default function RacingCarGame() {
  const carNamesInput = document.getElementById("car-names-input");
  const carNamesSubmit = document.getElementById("car-names-submit");

  this.getNamesFromInput = () => {
    const names = carNamesInput.value.split(",");
    this.checkErrorNames(names);
  };

  this.checkErrorNames = (names) => {};

  carNamesSubmit.addEventListener("click", this.getNamesFromInput);
}
new RacingCarGame();
