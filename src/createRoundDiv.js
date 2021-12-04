const createRoundDiv = function createSingleRoundDivFromObj(obj) {
  const roundDiv = document.createElement("div");
  Object.keys(obj).reduce((acc, car) => {
    // format string, add to div
    const singleCar = `${car}: ${obj[car]}`;
    acc.innerHTML += singleCar;

    // add line break
    acc.appendChild(document.createElement("br"));
    return acc;
  }, roundDiv);

  return roundDiv;
};

export default createRoundDiv;
