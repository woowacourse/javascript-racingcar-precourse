import GetCarNames from './get-car-names.js?ver=6';
import Car from './car.js?ver=13';
import PrintResult from './print-result.js?ver=37';
import CheckValue from './check-value.js?ver=4';

export default class RacingCarGame {
    constructor() {
        this.carNamesArr;
        this.carArr;
        this.RANDOM_NUM_MAX = 9;
        this.addClickEventListener();
    }
    // 게임을 진행하는 함수
    playRacingCarGame() {
        this.carArr.forEach(car => {
            const randomNum = Math.floor(Math.random() * this.RANDOM_NUM_MAX);
            if(randomNum >= 4) {
                car.advance();
            }
        });
    }
    // 게임을 진행할 자동차 인스턴스 배열을 만드는 함수
    setRacingCars() {
        this.carArr = this.carNamesArr.map(name => 
            new Car(name)
        );
    }
    // 사용자가 입력한 횟수만큼 게임을 반복하는 함수 
    repeatRacingCarGame(racingResult) {
        const racingCount = document.getElementById('racing-count-input').value;
        const printResult = new PrintResult(racingResult);
        this.setRacingCars();
        for(let i = 0; i < racingCount; i++) {
            this.playRacingCarGame();
            printResult.printGameResult(this.carArr);
        }
        printResult.printWinner(this.carArr);
    }
    // 자동차 이름 배열에 값이 담겨있는지 확인하는 함수
    checkCarNamesArr() {
        const checkValue = new CheckValue(this.carNamesArr); 
        const racingResult = document.getElementById('racing-result');
        if(checkValue.isEmpty()) {
            alert(`자동차 이름을 먼저 입력해주세요😊`);
        }
        else {
            racingResult.innerHTML = "";
            this.repeatRacingCarGame(racingResult);
        }
    }
    // 자동차 이름을 받아와 배열에 저장하는 함수
    setCarNames() {
        const getCarNames = new GetCarNames();
        this.carNamesArr = getCarNames.distCarName();
    }
    // 버튼에 클릭 이벤트 리스너를 추가하는 함수
    addClickEventListener() {
        const carNamesSubmit = document.getElementById('car-names-submit');
        const racingCountSubmit = document.getElementById('racing-count-submit');
        carNamesSubmit.addEventListener('click', this.setCarNames.bind(this));
        racingCountSubmit.addEventListener('click', this.checkCarNamesArr.bind(this));
    }
}

new RacingCarGame();