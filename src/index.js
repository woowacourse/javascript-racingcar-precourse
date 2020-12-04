export default function RacingCarGame() {
  const carNamesSubmit = document.getElementById("car-names-submit");
  const racingCountSubmit = document.getElementById("racing-count-submit");

  this.getNamesFromInput = () => {
    const carNamesInput = document.getElementById("car-names-input");
    const names = carNamesInput.value.split(",");

    this.checkErrorNames(names);
  };

  this.checkErrorNames = (names) => {
    if (!this.checkNameLength(names)) {
      alert(
        "자동차 이름을 5자 이하로 써주세요. 한 개라도 5자 이상일 경우 다음단계로 넘어가지 않습니다."
      );
    } else {
      const racingCountContainer = document.getElementById(
        "racing-count-container"
      );
      racingCountContainer.style.visibility = "visible";
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

  this.getRacingCount = () => {
    const racingCountInput = document.getElementById("racing-count-input");
    const racingCount = racingCountInput.value;

    this.checkRacingCountError(racingCount);
  };

  this.checkRacingCountError = (racingCount) => {
    if (Number.isNaN(parseInt(racingCount))) {
      alert("숫자만 입력해주세요!");
    } else {
      //TODOS:make instance
      //TODOS:make random
    }
  };

  carNamesSubmit.addEventListener("click", this.getNamesFromInput);
  racingCountSubmit.addEventListener("click", this.getRacingCount);
}
new RacingCarGame();
