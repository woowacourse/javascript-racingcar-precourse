const makeCarDiv = (car) => {
  const $divCar = document.createElement("div");
  let strCar = `${car.car.getCarName()}: `;

  for (let i = 0; i < car.location; i++) {
    strCar += "-";
  }

  $divCar.innerHTML = strCar;

  return $divCar;
};

const showPlaying = (cars) => {
  const $br = document.createElement("br");

  document.body.appendChild($br);

  cars.forEach(car => {
    document.body.appendChild(makeCarDiv(car));
  });
};

export { showPlaying };
