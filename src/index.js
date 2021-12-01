import { validateCarNames } from "./utils/validation.js";

function Car(name) {
  this.name = name;
}

const App = () => {
  const initialState = {
    isCorrectCarNames: false,
    carNames: [],
  };
  const app = document.querySelector("#app");
  //   const carNamesInput = document.querySelector("#car-names-input");
  //   const carNamesSubmit = document.querySelector("#car-names-submit");
  //   const racingCountInput = document.querySelector("#racing-count-input");
  //   const racingCountSubmit = document.querySelector("#racing-count-submit");

  const carNamesForm = document.querySelector("#car-names-form");

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

  carNamesForm.addEventListener("submit", onSubmitCarNamesForm);
};

App();
