# 🏎️ 자동차 경주 게임

## 🎯 기능 구현사항

- 자동차들에 이름을 부여하는 부분을 구현한다.(`,`를 기준으로 나누고 배열로 그 이름들을 담는다.)
- 몇 번의 이동을 할 것인지에 대한 입력하고, 그 횟수만큼 게임을 시작한다.
- 매 게임마다 자동차들의 이동 여부를 결정하기 위한 0~9까지 숫자를 저장하는 random 배열을 만든다.
- 그 값이 4이상인 차만 전진할 수 있는 기능을 만든다.
- 전진하면서 동시에 전진한 자동차들에게는 `-`를 하나씩 추가시켜준다.
- 게임을 완료한 후 가장 많이 전진한 자동차들을 찾는다.
- 우승자가 여러명일 경우 ,를 이용하여 구분하여 우승자를 출력한다.
- 입력값에 문제가 있을 시 alert 발생 후 재입력받기

## 첫번째 구현사항

> 자동차들에 이름을 부여하는 부분을 구현한다.(`,`를 기준으로 나누고 배열로 그 이름들을 담는다.)

```javascript
// index.js
import Car from './car.js';
import RacingCarGame from './game.js';

export const carNamesInput = document.getElementById('car-names-input');
export const carNamesSubmit = document.getElementById('car-names-submit');
const cars = [];

carNamesSubmit.onclick = () => {
  document.getElementById('racing-count').style.display = 'block';
  const inputs = carNamesInput.value.split(',');
  inputs.forEach((input) => {
    cars.push(new Car(input));
  });
};
```

## 두번째 구현사항

> 몇 번의 이동을 할 것인지에 대한 입력하고, 그 횟수만큼 게임을 시작한다.

```javascript
// index.js
import Car from './car.js';
import RacingCarGame from './game.js';

export const carNamesInput = document.getElementById('car-names-input');
export const carNamesSubmit = document.getElementById('car-names-submit');
export const racingCountInput = document.getElementById('racing-count-input');
export const racingCountSubmit = document.getElementById('racing-count-submit');
const cars = [];

carNamesSubmit.onclick = () => {
  document.getElementById('racing-count').style.display = 'block';
  const inputs = carNamesInput.value.split(',');
  inputs.forEach((input) => {
    cars.push(new Car(input));
  });
};

racingCountSubmit.onclick = () => {
  result.style.display = 'block';
  let text = '';
  for (let i = 0; i < racingCountInput.value; i++) {
    new RacingCarGame(cars);
  }
};
```

## 세번째 구현사항

> 매 게임마다 자동차들의 이동 여부를 결정하기 위한 0~9까지 숫자를 저장하는 random 배열을 만든다.

```javascript
//random.js
export default class MakeRandomNumbers {
  constructor(count) {
    this.nums = [];
    for (let i = 0; i < count; i++) {
      this.nums.push(parseInt(Math.random() * 9) + 1);
    }
  }
}
```

## 네번째, 다섯번째 구현사항

> 그 값이 4이상인 차만 전진할 수 있는 기능을 만든다.

> 전진하면서 동시에 전진한 자동차들에게는 `-`를 하나씩 추가시켜준다.

```javascript
//game.js
import MakeRandomNumbers from './random.js';

function playGame(cars) {
  const randNums = new MakeRandomNumbers(cars.length).nums;
  for (let i = 0; i < cars.length; i++)
    if (randNums[i] >= 4) cars[i].win += '-';
}

export default function RacingCarGame(cars) {
  playGame(cars);
}
```

## 여섯번째, 일곱번째 구현사항

> 게임을 완료한 후 가장 많이 전진한 자동차들을 찾는다.

```javascript
// index.js
import Car from './car.js';
import RacingCarGame from './game.js';

export const carNamesInput = document.getElementById('car-names-input');
export const carNamesSubmit = document.getElementById('car-names-submit');
export const racingCountInput = document.getElementById('racing-count-input');
export const racingCountSubmit = document.getElementById('racing-count-submit');
const cars = [];

carNamesSubmit.onclick = () => {
  document.getElementById('racing-count').style.display = 'block';
  const inputs = carNamesInput.value.split(',');
  inputs.forEach((input) => {
    cars.push(new Car(input));
  });
};

racingCountSubmit.onclick = () => {
  result.style.display = 'block';
  let text = '';
  for (let i = 0; i < racingCountInput.value; i++) {
    new RacingCarGame(cars);
    cars.forEach((car) => {
      text += `<div>${car.name}: ${car.win}</div>`;
    });
    text += '<br>';
  }
  text += `최종 우승자: ${getFinalWinners(cars)}`;
  result.innerHTML = text;
};

function getMaxWinCounts(cars) {
  let maxValue = 0;
  cars.forEach((car) => {
    maxValue = maxValue < car.win.length ? car.win.length : maxValue;
  });
  return maxValue;
}

function getFinalWinners(cars) {
  const maxWinCounts = getMaxWinCounts(cars);
  return cars
    .filter((car) => car.win.length === maxWinCounts)
    .map((car) => car.name)
    .join(', ');
}
```

## 마지막 구현사항

> 입력값에 문제가 있을 시 alert 발생 후 재입력받기

```javascript
//index.js
carNamesSubmit.onclick = () => {
  const inputs = carNamesInput.value.split(',');
  let find = false;
  inputs.forEach((input) => {
    if (input.length > 5) {
      alert('입력값에 문제가 있습니다. 다시 입력하세요!');
      carNamesInput.value = '';
      find = true;
      cars = [];
    } else cars.push(new Car(input));
  });
  if (!find) document.getElementById('racing-count').style.display = 'block';
};
```
