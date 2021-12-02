import { validateCarNames } from "./utils/validation.js";
import newId from "./utils/newId.js";
import ResultContainer from "./components/ResultContainer.js";

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

  const formatCarNames = (carNames) => {
    initialState.carNames = carNames.map((name) => {
      const newCar = new Car(name);
      newCar["id"] = newId();
      newCar["moveCount"] = 0;
      return newCar;
    });
  };

  const onSubmitCarNamesForm = (e) => {
    e.preventDefault();
    const carNamesInput = e.target[0];
    const { isError, errorMessage, carNames, isCorrectCarNames } =
      validateCarNames(carNamesInput.value);

    initialState.isCorrectCarNames = isCorrectCarNames;
    formatCarNames(carNames);

    if (isError) {
      window.alert(errorMessage);
      carNamesInput.value = "";
    }
  };

  const onSubmitRacingCountForm = (e) => {
    e.preventDefault();
    const racingCountInput = e.target[0];
    initialState.racingCount = Number(racingCountInput.value);
    const { isCorrectCarNames, carNames, racingCount } = initialState;

    if (isCorrectCarNames) {
      ResultContainer({ app, carNames, racingCount });
      return;
    }

    window.alert(`자동차 이름을 입력해 주세요.`);
  };

  carNamesForm.addEventListener("submit", onSubmitCarNamesForm);
  racingCountForm.addEventListener("submit", onSubmitRacingCountForm);
};

App();
