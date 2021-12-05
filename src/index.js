import { validateCarNames } from "./utils/validation.js";
import newId from "./utils/newId.js";
import ResultContainer from "./components/ResultContainer.js";
import getGameResultData from "./utils/getGameResultData.js";

function Car(name) {
  this.name = name;
}

const App = () => {
  const initialState = {
    isCorrectCarNames: false,
    carNames: [],
  };
  const app = document.querySelector("#app");
  const carNamesForm = document.querySelector("#car-names-form");
  const racingCountForm = document.querySelector("#racing-count-form");
  const racingCountInput = document.querySelector("#racing-count-input");

  const useAttributeInit = () => {
    racingCountInput.setAttribute("min", 1);
  };

  const formatCarNames = (carNames) => {
    initialState.carNames = carNames.map((name) => {
      const newCar = new Car(name);
      newCar["id"] = newId();
      newCar["moveCount"] = 0;
      newCar["moveCounts"] = [];
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
    const { isCorrectCarNames, carNames } = initialState;

    if (isCorrectCarNames) {
      const data = getGameResultData(
        JSON.stringify({
          carNames,
          racingCount: racingCountInput.value,
        })
      );

      ResultContainer({ app, data: JSON.parse(data) });
      return;
    }

    window.alert(`자동차 이름을 입력해 주세요.`);
  };

  useAttributeInit();
  carNamesForm.addEventListener("submit", onSubmitCarNamesForm);
  racingCountForm.addEventListener("submit", onSubmitRacingCountForm);
};

App();
