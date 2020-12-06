export function showOneResult(cars) {
  const result = document.createElement("div");
  document.getElementById("result").appendChild(result);

  for (let idx in cars) {
    result.innerHTML += `<div>
      ${cars[idx].name}: ${"-".repeat(cars[idx].position)}
    </div>`;
  }
  result.innerHTML += `<br>`;

  return;
}

export function getWinnerNames(names, positions, cars) {
  let winnerNames = [];

  for (let car of cars) {
    names.push(car.name);
    positions.push(car.position);
  }

  const winnerPosition = Math.max.apply(null, positions);
  positions.forEach((p, idx) => {
    if (p === winnerPosition) {
      winnerNames.push(names[idx]);
    }
  });

  return winnerNames;
}

export function makeNamesToStr(winnerNames) {
  let winners = ``;
  for (let idx in winnerNames) {
    if (winners.length == 0) {
      winners += `${winnerNames[idx]}`;
    } else {
      winners += `, ${winnerNames[idx]}`;
    }
  }

  return winners;
}

export function showFinalWinners(cars) {
  let names = [];
  let positions = [];
  let winnerNames = getWinnerNames(names, positions, cars);
  let winners = makeNamesToStr(winnerNames, cars);

  const finalWinner = document.createElement("div");
  finalWinner.innerHTML += `<div>최종 우승자: ${winners}</div>`;
  document.getElementById("result").append(finalWinner);

  return;
}
