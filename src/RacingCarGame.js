import Car from './Car.js';
import ExceptionHandler from './ExceptionHandler.js';
import RandomNumber from './RandomNumber.js';
import Winner from './Winner.js';

export default class RacingCarGame {
  exceptionHandler = new ExceptionHandler();
  randomNumber = new RandomNumber();

  constructor() {
    this.carNamesSubmitButton = document.querySelector('#car-names-submit');
    this.carNamesInput = document.querySelector('#car-names-input');
    this.countContainer = document.querySelector('#count-container');
    this.racingCountSubmit = document.querySelector('#racing-count-submit');
    this.racingCountInput = document.querySelector('#racing-count-input');
    this.resultContainer = document.querySelector('#result-container');

    this.carNames = [];
    this.carObjList = [];
    this.countNumber = 0;

    this.submitCarNames();
    this.submitCountRacing();
  }

  // 처음 확인 버튼을 눌렀을 때
  submitCarNames() {
    this.carNamesSubmitButton.addEventListener('click', () => {
      this.getCarName();

      if (this.carNames !== null) {
        this.showCountRacing();
      } else {
        this.carNamesInput.value = '';
      }
    });
  }

  // 차 이름 가져온 후 carNames 생성자에 넣기
  getCarName() {
    const carNames = this.carNamesInput.value;

    this.carNames = this.exceptionHandler.isCarNames(carNames); // TODO: 다시 만들기(함수 기능이 이상)
  }

  showCountRacing() {
    this.countContainer.style.display = 'block';
  }

  // 시도할 횟수를 눌렀을 때
  submitCountRacing() {
    this.racingCountSubmit.addEventListener('click', () => {
      this.countNumber = this.racingCountInput.value;
      this.countRacingClick(this.carNames);
    });
  }

  countRacingClick() {
    if (this.exceptionHandler.isCountNumber(this.countNumber)) {
      this.showResult();
      this.repeatRunRacing();
    } else {
      alert('알맞은 숫자를 입력해주세요');
      this.racingCountInput.value = '';
    }
  }

  showResult() {
    this.resultContainer.style.display = 'block';
  }

  repeatRunRacing() {
    // Car 객체에 이름별로 담아 배열로 다시 리턴
    this.carObjList = this.carNames.map((name) => new Car(name));

    for (let i = 0; i < this.countNumber; i++) {
      this.runRacing();
      this.spaceHTML();
    }

    this.winnerToDom();
  }

  runRacing() {
    this.carObjList.forEach((car) => {
      const goSign = this.randomNumber.init();

      if (goSign) {
        car.position++;
      }

      this.stringHTMLToDOM(this.stringHTML(car));
    });
  }

  spaceHTML() {
    const blank = document.createElement('br');

    this.resultContainer.appendChild(blank);
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
    this.resultContainer.appendChild(p);
  }

  winnerToDom() {
    const winner = new Winner(this.carObjList, this.carNames);
    const winnerHTML = winner.winnerHTML();

    this.stringHTMLToDOM(winnerHTML);
  }
}

// TODO: 함수 단위 기능별로 쪼갰는지 확인
// TODO: 코드 컨벤션 준수 확인
// TODO: 다시 클릭했을 때 결과 지우고 다시 출력하는 기능
