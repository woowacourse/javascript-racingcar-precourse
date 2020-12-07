import CheckValue from './check-value.js';

export default class GetCarNames {
    constructor() {
        this.checkValue = new CheckValue();
        this.alertText = `자동차의 이름을 입력해주세요😊`;
        this.CAR_NAME_LENGTH = 5;
        this.distCarName = this.distCarName.bind(this);
    }
    // 각 자동차 이름이 조건에 맞는지 확인하는 함수
    checkCarName(carNames) {
        let result = [];
        for(let i = 0; i < carNames.length; i++) {
            const carName = carNames[i].replace(/^\s+|\s+$/gm, '');
            if(!this.checkValue.isEmpty(carName)) {
                result.push(carName);
            }
            if(carName.length > this.CAR_NAME_LENGTH) {
                result = [];
                this.alertText = `자동차의 이름은 ${this.CAR_NAME_LENGTH}자 이하로 작성해주세요😊`;
                break;
            }
        }
        return result;
    }
    // alert창을 띄우고 자동차 이름 입력창을 초기화하는 함수
    setAlert() {
        const carNamesInput = document.getElementById('car-names-input');
        alert(this.alertText);
        carNamesInput.value = '';
    }
    // 사용자의 입력값을 받아와 자동차 이름을 구분하는 함수
    distCarName() {
        const carNamesInputValue = document.getElementById('car-names-input').value;
        const carNamesTemp = carNamesInputValue.split(',');
        let result = this.checkCarName(carNamesTemp);
        if(this.checkValue.isEmpty(result)) {
            this.setAlert();
            result = [];
        }
        return result;
    }
}