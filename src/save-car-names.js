export default class SaveCarNames {
    constructor() {
        this.CAR_NAME_LENGTH = 5;
        this.carNamesArr;
        this.getCarName = this.getCarName.bind(this);
    }
    // 각 자동차 이름의 길이를 확인하는 함수 
    checkCarName(carNamesArr) {
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
    // 사용자의 입력값을 받아와 자동차 이름을 구분하고 저장하는 함수
    getCarName() {
        const carNamesInputValue = document.getElementById('car-names-input').value;
        const carNamesArrTemp = carNamesInputValue.split(',');
        const checkResult = this.checkCarName(carNamesArrTemp); 
        if(!checkResult) {
            this.setAlert();
        }
        else {
            this.carNamesArr = carNamesArrTemp;
        }
    }
}