function Car(name, count) {
  this.name = name;
  this.count = count;
}

export const isCarForward = () => {
  const crit = Math.floor(Math.random() * 10);
  return crit >= 4 ? true : false;
};

export const inputStringToArray = (inputString) => {
  const inputArray = inputString.split(",");
  const carArray = [];

  // Initialize the object
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i].length > 0 && carArray.push(new Car(inputArray[i], 0));
  }

  return carArray;
};

export const setContainerVisible = (className, visible) => {
  document.getElementsByClassName(className)[0].style.display = visible
    ? "initial"
    : "none";
};

export const resetGame = () => {
  setContainerVisible("car-game-count-container", false);
  setContainerVisible("car-game-result-container", false);

  document.getElementById("car-names-input").value = "";
  document.getElementById("racing-count-input").value = "";

  clearResult();
};

export const clearResult = () => {
  const resultContainer = document.getElementsByClassName(
    "car-game-result-container"
  )[0];

  const nodeLength = resultContainer.children.length;
  for (let i = 1; i < nodeLength; i++) {
    resultContainer.children[1].remove();
  }
};
