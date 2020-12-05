export default function RacingCarGame(racingCount, cars) {
  this.play = function () {
    let randomNums = [];
    for (let i = 0; i < racingCount; i++) {
      randomNums.push(Math.floor(Math.random() * 10));
    }
    randomNums.forEach((randomNum, idx) => {
      if (randomNum > 3) {
        cars[idx].position++;
      }
    });
  };
}

function Car(name) {
  this.name = name;
  this.position = 0;
}
let cars = [];
console.log("east, west, south, north");
const btnCarNames = document.getElementById("car-names-submit");
const inputCarNames = document.getElementById("car-names-input");

function isCorrectCarNames(carName) {
  if (carName.length > 0 && carName.length <= 5) {
    return true;
  }

  return false;
}

btnCarNames.onclick = function () {
  const carNames = inputCarNames.value.split(",");
  const correctCarNames = carNames.map(function (carName) {
    carName = carName.trim();
    if (!isCorrectCarNames(carName)) {
      alert("모든 자동차의 이름을 5자 이하로 입력해주세요.");
      inputCarNames.value = "";

      return;
    }

    return carName;
  });
  console.log(correctCarNames);
  const racingBox = document.getElementById("racing-count-box");
  if (!correctCarNames.includes(undefined)) {
    racingBox.style.display = "block";
    correctCarNames.forEach((correctCar) => {
      cars.push(new Car(correctCar));
    });
  }
};

const btnRacingCount = document.getElementById("racing-count-submit");
const inputRacingCount = document.getElementById("racing-count-input");
let racingCount = -1;
btnRacingCount.onclick = function (event) {
  racingCount = Number(inputRacingCount.value);

  const resultBox = document.getElementById("result-box");
  resultBox.style.display = "block";
  const r = new RacingCarGame(racingCount, cars);
  for (let i = 0; i < racingCount; i++) {
    r.play();
    const result = document.createElement("div");
    document.getElementById("result-box").appendChild(result);
    for (let s in cars) {
      result.innerHTML += `<div>
        ${cars[s].name}: ${"-".repeat(cars[s].position)}
        </div>`;
    }
    result.innerHTML += `<br>`;
  }

  let names = [];
  let positions = [];
  let winnerNames = [];

  for (let car of cars) {
    // console.log(key, cars[key]);
    names.push(car.name);
    positions.push(car.position);
  }

  const winnerPosition = Math.max.apply(null, positions);
  positions.forEach((p, idx) => {
    if (p === winnerPosition) {
      winnerNames.push(names[idx]);
    }
  });

  let winners = ``;
  for (let i in winnerNames) {
    if (winners.length == 0) {
      winners += `${winnerNames[i]}`;
    } else {
      winners += `, ${winnerNames[i]}`;
    }
  }

  const finalWinner = document.createElement("div");
  finalWinner.innerHTML += `<div>최종 우승자: ${winners}</div>`;
  document.getElementById("result-box").appendChild(finalWinner);
};
