const $app = document.getElementById("app");

export function showPlaying(object) {
  const div = document.createElement("div");
  div.style.marginBottom = "10px";
  object.cars.forEach((item) => {
    const car = document.createElement("div");
    car.innerHTML = `${item.getCarName()}: ${changeNumberToBar(
      item.getLocation()
    )}\n`;
    div.appendChild(car);
  });

  $app.appendChild(div);
}

export function showWinner(winners) {
  var winnersString = "";
  winners.forEach((item, index) => {
    winnersString += item.getCarName();
    if (index !== winners.length - 1) winnersString += ", ";
  });
  const span = document.createElement("span");
  span.innerText = "최종 우승자: ";

  const spanWinners = document.createElement("span");
  spanWinners.id = "racing-winners";
  spanWinners.innerText = `${winnersString}`;

  $app.appendChild(span);
  $app.appendChild(spanWinners);
}

export function changeNumberToBar(number) {
  return "-".repeat(number);
}
