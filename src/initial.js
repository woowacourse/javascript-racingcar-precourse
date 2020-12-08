function carInfo(name, count) {
  this.name = name;
  this.count = count;
}

export const isCarForward = () => {
  const going = Math.floor(Math.random()*10);

  if (going < 5) {
    return false;
  } else {
    return true;
  }
}

export const userInput = (inputString) => {
  const inputArray = inputString.split(",");
  const carArray = [];

  for ( let i = 0; i < inputArray.length; i++ ) {
    inputArray[i].length > 0 && carArray.push(new carInfo(inputArray[i], 0))
  }

  return carArray
}

export const setContainerVisible = (className, visible) => {
  document.getElementsByClassName(className)[0].style.display = visible
    ? "initial"
    : "none";
}

export const init = () => {
  setContainerVisible("car-game-count-container", false);
  setContainerVisible("car-game-result-container", false);

  document.getElementById("car-names-input").value = "";
  document.getElementById("racing-count-input").value = "";
  
  clear()
}

export const clear = () => {
  const resultContainer = document.getElementsByClassName("car-game-result-container")[0];
  const nodeLength = resultContainer.children.length;
  for ( let i = 1; i < nodeLength; i++) {
    resultContainer.children[1].remove()
  }
}