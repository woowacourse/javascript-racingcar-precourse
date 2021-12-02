import { validateCarNames } from "./utils/validation.js";
import newId from "./utils/newId.js";

function Car(name) {
  this.name = name;
}

const App = () => {
  const initialState = {
    isCorrectCarNames: false,
    carNames: [],
    racingCount: 0,
  };
  const app = document.querySelector("#app");
  const carNamesForm = document.querySelector("#car-names-form");
  const racingCountForm = document.querySelector("#racing-count-form");

  const onSubmitCarNamesForm = (e) => {
    e.preventDefault();
    const carNamesInput = e.target[0];
    const { isError, errorMessage, carNames, isCorrectCarNames } =
      validateCarNames(carNamesInput.value);

    initialState.isCorrectCarNames = isCorrectCarNames;
    initialState.carNames = carNames.map((name) => {
      const newCar = new Car(name);
      newCar["id"] = newId();
      return newCar;
    });

    if (isError) {
      window.alert(errorMessage);
      carNamesInput.value = "";
    }
  };

  const onSubmitRacingCountForm = (e) => {
    e.preventDefault();
    const racingCountInput = e.target[0];
    initialState.racingCount = Number(racingCountInput.value);

    if (initialState.isCorrectCarNames) {
      // TODO 실행결과 로직
      //   console.log(MissionUtils.Random.pickNumberInRange(0, 9));
      return;
    }

    window.alert(`자동차 이름을 입력해 주세요.`);
  };

  carNamesForm.addEventListener("submit", onSubmitCarNamesForm);
  racingCountForm.addEventListener("submit", onSubmitRacingCountForm);
};

App();
