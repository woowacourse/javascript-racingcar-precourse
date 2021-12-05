import { validateCarNames } from "./utils/validation.js";
import ResultContainer from "./components/ResultContainer.js";
import getGameResultData from "./utils/getGameResultData.js";
import getCarNames from "./utils/getCarNames.js";

const App = () => {
  const initialState = {
    isErrorCarNames: true,
    carNames: [],
  };
  const app = document.querySelector("#app");
  const carNamesForm = document.querySelector("#car-names-form");
  const racingCountForm = document.querySelector("#racing-count-form");
  const racingCountInput = document.querySelector("#racing-count-input");

  const useAttributeInit = () => racingCountInput.setAttribute("min", 1);
  const render = ({ app, data }) => ResultContainer({ app, data });

  const onSubmitCarNamesForm = (e) => {
    e.preventDefault();
    const carNamesInput = e.target[0];
    const { isError, errorMessage, carNames } = validateCarNames(
      carNamesInput.value
    );
    initialState.isErrorCarNames = isError;

    if (isError) {
      window.alert(errorMessage);
      carNamesInput.value = "";
      return;
    }

    initialState.carNames = getCarNames(carNames);
  };

  const onSubmitRacingCountForm = (e) => {
    e.preventDefault();
    const racingCountInput = e.target[0];
    const { carNames, isErrorCarNames } = initialState;

    if (racingCountInput.value === "") {
      window.alert(`시도할 횟수를 입력해 주세요.`);
      return;
    }
    if (isErrorCarNames) {
      window.alert(`자동차 이름을 입력해 주세요.`);
      racingCountInput.value = "";
      return;
    }

    const data = getGameResultData(
      JSON.stringify({
        carNames,
        racingCount: racingCountInput.value,
      })
    );

    render({ app, data: JSON.parse(data) });
  };

  useAttributeInit();
  carNamesForm.addEventListener("submit", onSubmitCarNamesForm);
  racingCountForm.addEventListener("submit", onSubmitRacingCountForm);
};

App();
