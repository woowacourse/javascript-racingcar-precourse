import GetCarNames from './get-car-names.js';
import Car from './car.js';

export default class RacingCarGame {
    constructor() {
        this.carNamesArr = [];
        this.setCarNames = this.setCarNames.bind(this);
        this.checkCarNamesArr = this.checkCarNamesArr.bind(this);
        this.addClickEventListener();
    }
    // 사용자가 입력한 횟수만큼 게임을 반복하는 함수 
    repeatRacingCarGame() {
        const racingCount = document.getElementById('racing-count-input').value;
    }
    // 자동차 배열이 비어있는지 확인하는 함수
    checkCarNamesArr() {
        if(this.carNamesArr.length === 0) {
            alert(`자동차 이름을 먼저 입력해주세요😊`);
        }
        else {
            this.repeatRacingCarGame();
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
        carNamesSubmit.addEventListener('click', this.setCarNames);
        racingCountSubmit.addEventListener('click', this.checkCarNamesArr);
    }
}

new RacingCarGame();