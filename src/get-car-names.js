export default class GetCarNames {
    constructor() {
        this.CAR_NAME_LENGTH = 5;
        this.distCarName = this.distCarName.bind(this);
    }
    // 각 자동차 이름의 길이를 확인하는 함수 
    checkCarName(carNamesArr) {
        // 수정-- 배열이 비어있거나 값이 알맞은 값인지도 확인해야함
        let isCorrect = true;
        carNamesArr.forEach(carName => {
            if(carName.length > this.CAR_NAME_LENGTH) {
                isCorrect = false;
            }
        });
        return isCorrect;
    }
    // alert창을 띄우고 자동차 이름 입력창을 초기화하는 함수
    setAlert() {
        const carNamesInput = document.getElementById('car-names-input');
        alert(`자동차의 이름은 ${this.CAR_NAME_LENGTH}자 이하로 작성해주세요😊`);
        carNamesInput.value = '';
    }
    // 사용자의 입력값을 받아와 자동차 이름을 구분하는 함수
    distCarName() {
        const carNamesInputValue = document.getElementById('car-names-input').value;
        const carNamesArrTemp = carNamesInputValue.split(',');
        let result;
        if(!this.checkCarName(carNamesArrTemp)) {
            this.setAlert();
        }
        else {
            result = carNamesArrTemp;
        }
        return result;
    }
}