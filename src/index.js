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
  //   console.log(MissionUtils.Random.pickNumberInRange(0, 9));
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
    initialState.racingCount(Number(racingCountInput.value));
  };

  carNamesForm.addEventListener("submit", onSubmitCarNamesForm);
  racingCountForm.addEventListener("submit", onSubmitRacingCountForm);
};

App();
