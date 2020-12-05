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
    for (let s in cars) {
      console.log(cars[s].position);
    }
  }
};
