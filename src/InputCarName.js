export default class InputCarName {
    constructor() {
        this.$carNamesInput = document.getElementById("car-names-input");
        this.$carNamesSubmit = document.getElementById("car-names-submit");
        // this.carNames = [];

        this.addNamesSubmitEvent();
    }

    addNamesSubmitEvent() {
        this.$carNamesSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            const carNamesString = this.$carNamesInput.value;
            this.splitCarNames(carNamesString);
        })

        return;
    }

    // 콤마 기준으로 문자열 분리
    splitCarNames(carNamesString) {
        const carNamesArray = carNamesString.split(',');
        // this.carNames = carNamesArray.slice();
        this.isValidNames(carNamesArray);

        return;
    }

    checkBlank(name) {
        if(name === "") {
            return alert("자동차 이름을 입력해주세요!");
        }

        return;
    }

    checkMaxLength(name) {
        if(name.length > 5) {
            return alert("5자 이하의 자동차 이름을 입력해주세요!");
        }

        return;
    }

    checkMinLength(name) {
        if(name === "") {
            return alert("1자 이상의 자동차 이름을 입력해주세요!");
        }

        return;
    }

    // 이름에 공백이 포함되는지 확인
    checkIncludeBlank(name) {
        if(name.indexOf(" ") !== -1) {
            return alert("공백이 없는 이름을 입력해주세요!");
        }

        return;
    }

    isValidNames(carNamesArray) {
        const arrayLength = carNamesArray.length;

        this.checkBlank(carNamesArray[0]);
        for(let i = 0; i < arrayLength; i++) {
            this.checkMaxLength(carNamesArray[i]);
            this.checkMinLength(carNamesArray[i]);
            this.checkIncludeBlank(carNamesArray[i]);
        }

        return true;
    }
}