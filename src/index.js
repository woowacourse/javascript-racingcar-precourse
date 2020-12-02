//import {car} from "./car";

export default class RacingCarGame {
    constructor() {
        this.getCarName = this.getCarName.bind(this);
        this.addClickEventListener();
    }
    // 각 자동차 이름의 길이를 확인하는 함수 
    checkCarName(carNamesArr) {
        let isCorrect = true;
        carNamesArr.forEach(carName => {
            if(carName.length > 5) {
                isCorrect = false;
            }
        });
        return isCorrect;
    }
    // alert창을 띄우고 자동차 이름 입력창을 초기화하는 함수
    setAlert() {
        const carNamesInput = document.getElementById('car-names-input');
        alert('자동차의 이름은 5자 이하로 작성해주세요😊');
        carNamesInput.value = '';
    }
    // 사용자의 입력값을 받아와 자동차 이름을 구분하는 함수
    getCarName() {
        const carNamesInputValue = document.getElementById('car-names-input').value;
        const carNamesArr = carNamesInputValue.split(',');
        const checkResult = this.checkCarName(carNamesArr); 
        if(!checkResult) {
            this.setAlert();
        }
    }
    // 버튼에 클릭 이벤트 리스너를 추가하는 함수
    addClickEventListener() {
        const carNamesSubmit = document.getElementById('car-names-submit');
        const racingCountSubit = document.getElementById('racing-count-submit');
        carNamesSubmit.addEventListener('click', this.getCarName);
    }
}

new RacingCarGame();
