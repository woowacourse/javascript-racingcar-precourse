import GetCarNames from './get-car-names.js';
import Car from './car.js';
import PrintResult from './print-result.js';
import CheckValue from './check-value.js';

export default class RacingCarGame {
    constructor() {
        this.carNames;
        this.cars;
        this.RANDOM_NUM_MAX = 9;
        this.addClickEventListener();
    }
    // 게임을 진행하는 함수
    playRacingCarGame() {
        this.cars.forEach(car => {
            const randomNum = Math.floor(Math.random() * this.RANDOM_NUM_MAX);
            if(randomNum >= 4) {
                car.advance();
            }
        });
    }
    // 게임을 진행할 자동차 인스턴스 배열을 만드는 함수
    setRacingCars() {
        this.cars = this.carNames.map(name => 
            new Car(name)
        );
    }
    // 사용자가 입력한 횟수만큼 게임을 반복하는 함수 
    repeatRacingCarGame(racingCount, racingResult) {
        const printResult = new PrintResult(racingResult);
        this.setRacingCars();
        for(let i = 0; i < racingCount; i++) {
            this.playRacingCarGame();
            printResult.printGameResult(this.cars);
        }
        printResult.printWinner(this.cars);
    }
    // 자동차 이름 배열에 값이 담겨있는지 확인하는 함수
    checkCount() {
        const checkValue = new CheckValue(); 
        const racingCount = document.getElementById('racing-count-input').value;
        const racingResult = document.getElementById('racing-result');
        if(checkValue.isEmpty(this.carNames)) {
            alert(`자동차 이름을 입력해주세요😊`);
        }
        else if(checkValue.isEmpty(racingCount)) {
            alert(`시도할 횟수를 입력해주세요😊`);
        }
        else {
            racingResult.innerHTML = "";
            this.repeatRacingCarGame(racingCount, racingResult);
        }
    }
    // 자동차 이름을 받아와 배열에 저장하는 함수
    setCarNames() {
        const getCarNames = new GetCarNames();
        this.carNames = getCarNames.distCarName();
    }
    // 버튼에 클릭 이벤트 리스너를 추가하는 함수
    addClickEventListener() {
        const carNamesSubmit = document.getElementById('car-names-submit');
        const racingCountSubmit = document.getElementById('racing-count-submit');
        carNamesSubmit.addEventListener('click', this.setCarNames.bind(this));
        racingCountSubmit.addEventListener('click', this.checkCount.bind(this));
    }
}

new RacingCarGame();