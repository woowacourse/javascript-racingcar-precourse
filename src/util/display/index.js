export const displayTag = (HTMLTag) => {
  HTMLTag.style = "display:block";
};

export const displayEachRace = (namesArray, eachRaceResult, count) => {
  const raceResult = document.getElementsByClassName("racing-result")[0];

  for (let i = 0; i < count; i++) {
    const raceWrapper = document.createElement("div");
    raceWrapper.style = "margin-bottom: 15px;";

    for (let j = 0; j < namesArray.length; j++) {
      const car = document.createElement("div");
      car.innerText = `${namesArray[j]} : ${"-".repeat(eachRaceResult[i][j])}`;
      raceWrapper.appendChild(car);
    }

    raceResult.appendChild(raceWrapper);
  }
};
