export default function RacingCarGame() {
  const carNamesInput = document.getElementById("car-names-input");
  const carNamesSubmit = document.getElementById("car-names-submit");

  this.getNamesFromInput = () => {
    const names = carNamesInput.value.split(",");
    this.checkErrorNames(names);
  };

  this.checkErrorNames = (names) => {
    if (!this.checkNameLength(names)) {
      alert(
        "자동차 이름을 5자 이하로 써주세요. 한 개라도 5자 이상일 경우 다음단계로 넘어가지 않습니다."
      );
    }
  };

  this.checkNameLength = (names) => {
    let result = true;

    names.forEach((name) => {
      if (name.length > 5) {
        result = false;
      }
    });

    return result;
  };

  carNamesSubmit.addEventListener("click", this.getNamesFromInput);
}
new RacingCarGame();
