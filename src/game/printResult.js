function getRandomNumber() {
  const min = 0;
  const max = 10;

  return Math.floor(Math.random() * (max - min)) + min;
}

function race(car) {
  if (getRandomNumber() > 3) {
    car.count++;
  }
}

function raceResultTemplate(car) {
  return `${car.name}: ${'-'.repeat(car.count)}<br>`;
}

function printRaceResult(car) {
  const $resultScreen = document.querySelector('#app > div:last-child');

  $resultScreen.insertAdjacentHTML('beforeend', raceResultTemplate(car));
}

function getMaxCount(carList) {
  let maxCount = 0;
  carList.forEach((car) => {
    if (maxCount < car.count) {
      maxCount = car.count;
    }
  });

  return maxCount;
}

function getWinner(carList) {
  const maxCount = getMaxCount(carList);
  return carList.filter((car) => {
    if (car.count === maxCount) {
      return true;
    }
    return false;
  });
}

function resetResult($resultScreen, carList) {
  $resultScreen.innerHTML = '';
  carList.forEach((car) => (car.count = 0));
}

function printFinalResult(carList) {
  const winner = getWinner(carList);
  return winner.map((car) => car.name).join(', ');
}

export default function printResult(carList, racingCount) {
  const $resultScreen = document.querySelector('#app > div:last-child');

  resetResult($resultScreen, carList);
  $resultScreen.removeAttribute('hidden');
  while (racingCount--) {
    carList.forEach((car) => race(car));
    carList.forEach((car) => printRaceResult(car));
    $resultScreen.insertAdjacentHTML('beforeend', '<br>');
  }
  $resultScreen.insertAdjacentHTML(
    'beforeend',
    `최종우승자 : ${printFinalResult(carList)} <br>`,
  );
}
