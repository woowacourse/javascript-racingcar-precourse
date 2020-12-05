export const displayTag = (HTMLTag) => {
  HTMLTag.style = "display:block";
};

export const displayEachRace = (namesArray, eachRaceResult, count) => {
  const raceResult = document.getElementsByClassName("racing-result")[0];

  for (let i = 0; i < count; i++) {
    const raceWrapper = document.createElement("div");
    raceWrapper.style = "margin-bottom: 15px;";

    namesArray.forEach((name, index) => {
      const car = document.createElement("div");
      car.innerText = `${name} : ${"-".repeat(eachRaceResult[i][index])}`;
      raceWrapper.appendChild(car);
    });

    raceResult.appendChild(raceWrapper);
  }
};

export const displayWinner = (winnerNames) => {
  const raceResult = document.getElementsByClassName("racing-result")[0];
  const names = winnerNames.join(",");
  const div = document.createElement("div");

  div.innerText = `최종우승자 : ${names}`;
  raceResult.appendChild(div);
};
