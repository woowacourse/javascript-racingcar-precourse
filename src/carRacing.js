import Car from './car.js';

export default function carRacing(Carnames, count) {
  const carList = Carnames.map(name => new Car(name));
  let carResult = '';
  //race출력 함수
  function getRaces(carList) {
    let raceResult = '';
    for (let i = 0; i < count; i++) {
      carList.forEach(carName => {
        const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
        if (randomNum >= 4) {
          carName.count += 1;
        }
        raceResult += `${carName.name}:${'-'.repeat(carName.count)}<br> `;
        console.log(raceResult);
      });
      raceResult += `<br>`;
    }
    return raceResult;
  }

  //winner 출력 함수
  function getWinner(cars) {
    console.log(cars);
    let winnerList = [];
    const lengthList = [];
    cars.forEach(car => {
      lengthList.push(car.count);
    });
    const maxlength = Math.max(...lengthList);
    cars.forEach(car => {
      if (car.count == maxlength) {
        winnerList.push(car.name);
      }
    });
    const winners = winnerList.join(', ');
    return winners;
  }
  const race = getRaces(carList);
  const winner = getWinner(carList);
  carResult += race;
  carResult += `<span>최종 우승자: </span>`;
  carResult += `<span id="racing-winners">${winner}</span>`;
  return carResult;
}
