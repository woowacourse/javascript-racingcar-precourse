import { resetGame } from "./utils.js";

export const printRoundResult = (resultArray) => {
  const resultNode = document.createElement("p");

  for (let i = 0; i < resultArray.length; i++) {
    const resultLine = document.createElement("div");
    resultLine.innerText = `${resultArray[i].name}: ${printLength(
      resultArray[i].count
    )}`;
    resultNode.appendChild(resultLine);
  }

  return resultNode;
};

export const printRaceResult = (resultArray) => {
  const resultNode = document.createElement("p");

  const maxValue = resultArray
    .map((car) => car.count)
    .reduce((pre, val) => (val > pre ? val : pre));
  const victoryCarArray = resultArray.filter((car) => car.count === maxValue);
  const resultCarNameArray = victoryCarArray.map((car) => car.name);

  resultNode.innerText = `최종 우승자: ${resultCarNameArray.join(", ")} `;

  resultNode.appendChild(createRestartButton());

  return resultNode;
};

const createRestartButton = () => {
  const buttonNode = document.createElement("button");
  buttonNode.innerText = "재시작";
  buttonNode.addEventListener("click", resetGame);

  return buttonNode;
};

const printLength = (count) => {
  let returnString = "";

  for (let i = 0; i < count; i++) {
    returnString += "-";
  }

  return returnString;
};
