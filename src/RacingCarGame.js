import Car from './Car.js';
import ExceptionHandler from './ExceptionHandler.js';
import RandomNumber from './RandomNumber.js';

export default class RacingCarGame {
  exceptionHandler = new ExceptionHandler();

  constructor() {
    this.start();
  }

  // 처음 확인 버튼을 눌렀을 때
  start() {
    const carNamesSubmitButton = document.querySelector('#car-names-submit');

    carNamesSubmitButton.addEventListener('click', () => {
      this.submitCarNames();
    });
  }

  submitCarNames() {
    const carNamesList = this.getCarName();

    if (carNamesList !== null) {
      this.showCountRacing();
      this.submitCountRacing(carNamesList);
    }
  }

  // 차 이름 가져오기
  getCarName() {
    const carNamesString = this.carNames();
    const carNamesArray = this.exceptionHandler.isCarNames(carNamesString);

    return carNamesArray;
  }

  carNames() {
    const carNamesInput = document.querySelector('#car-names-input');

    return carNamesInput.value;
  }

  showCountRacing() {
    const countContainer = document.querySelector('#count-container');

    countContainer.style.display = 'block';
  }

  submitCountRacing(_carNames) {
    const racingCountSubmit = document.querySelector('#racing-count-submit');
    let countNumber = 0;

    racingCountSubmit.addEventListener(
      'click',
      () => {
        // TODO: ExceptionHandler로 여기서 예외처리 하기
        countNumber = this.getCountNumber();
        this.repeatRunRacing(countNumber, _carNames);
        this.showResult();
      },
      { once: true }
    );
  }

  showResult() {
    const resultContainer = document.querySelector('#result-container');

    resultContainer.style.display = 'block';
  }

  getCountNumber() {
    const racingCountInput = document.querySelector('#racing-count-input');

    return racingCountInput.value;
  }

  repeatRunRacing(_countNumber, _carNames) {
    const carObjArray = this.setCar(_carNames);

    if (this.exceptionHandler.isCountNumber(_countNumber)) {
      for (let i = 0; i < _countNumber; i++) {
        this.runRacing(carObjArray);
        this.spaceHTML();
      }
    } else {
      alert('알맞은 숫자를 입력해 주세요');
      // TODO: 시도횟수가 예외일 때 다시 클릭했을 때 실행되게끔 예외처리
    }
    console.log(carObjArray); // TODO: 결과 출력
  }

  setCar(_carNames) {
    // Car 객체에 이름별로 담아 배열로 다시 리턴
    const carObjArray = _carNames.map((name) => new Car(name));

    return carObjArray;
  }

  runRacing(carObjArray) {
    carObjArray.forEach((car) => {
      const randomNumber = new RandomNumber();
      const goSign = randomNumber.init();

      if (goSign) {
        car.position++;
      }

      this.stringHTMLToDOM(this.stringHTML(car));
    });
  }

  spaceHTML() {
    const p = document.createElement('br');

    document.querySelector('#result-container').appendChild(p);
  }

  stringHTML(_car) {
    const distance = '-';
    let totalDistance = '';

    if (_car.position > 0) {
      for (let i = 0; i < _car.position; i++) {
        totalDistance += distance;
      }
    }

    return `${_car.name}: ${totalDistance}`;
  }

  stringHTMLToDOM(_htmlString) {
    const p = document.createElement('p');

    p.innerHTML = _htmlString;
    document.querySelector('#result-container').appendChild(p);
    // TODO: querySelector 위에 상수로 모아버리기.
  }
}

// TODO: 함수 단위 기능별로 쪼개기.
