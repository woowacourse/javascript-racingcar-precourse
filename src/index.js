import { validateCarNames } from "./utils/validation.js";

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

    if (isError) {
      window.alert(errorMessage);
      carNamesInput.value = "";
      initialState.carNames = [];
      initialState.isCorrectCarNames = isCorrectCarNames;
      return;
    }

    initialState.carNames = carNames.map((name) => new Car(name));
    initialState.isCorrectCarNames = isCorrectCarNames;
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
