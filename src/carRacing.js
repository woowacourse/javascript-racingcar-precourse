import Car from './car.js';

export default function carRacing(Carnames, userCount) {
  const carList = Carnames.map((name) => new Car(name));
  let carResult = '';

  function getRaces(carList) {
    let raceResult = '';
    for (let i = 0; i < userCount; i++) {
      carList.forEach((carName) => {
        const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
        if (randomNum >= 4) {
          carName.count += 1;
        }
        raceResult += `${carName.name}:${'-'.repeat(carName.count)}<br> `;
      });
      raceResult += `<br>`;
    }
    return raceResult;
  }

  function getWinner(cars) {
    let winnerList = [];
    const lengthList = [];
    cars.forEach((car) => {
      lengthList.push(car.count);
    });
    const maxlength = Math.max(...lengthList);
    cars.forEach((car) => {
      if (car.count == maxlength) {
        winnerList.push(car.name);
      }
    });

    const winners = winnerList.join(', ');
    return winners;
  }

  function raceResult() {
    carResult = '';
    carResult += getRaces(carList);
    carResult += `<span>최종 우승자: </span>`;
    carResult += `<span id="racing-winners">${getWinner(carList)}</span>`;
    return carResult;
  }

  return raceResult();
}
