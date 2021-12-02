export default class InputCarName {
    constructor() {
        this.$carNamesInput = document.getElementById("car-names-input");
        this.$carNamesSubmit = document.getElementById("car-names-submit");
        this.carNames = [];

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
        if(this.isValidNames(carNamesArray) === true) {
            this.carNames = carNamesArray.slice();
            console.log(this.carNames);

        };
        // this.carNames = carNamesArray.slice();

        return;
    }

    checkLength(name) {
        if(name !== "" && name.length <= 5) {
            return true;
        }

        return false;
    }

    // 이름에 공백이 포함되는지 확인
    checkIncludeBlank(name) {
        if(name.indexOf(" ") === -1) {
            return true;
        }

        return false;
    }

    isValidNames(carNamesArray) {
        const arrayLength = carNamesArray.length;

        for(let i = 0; i < arrayLength; i++) {
            if(!(this.checkLength(carNamesArray[i]) && this.checkIncludeBlank(carNamesArray[i]))) {
                alert("유효하지 않은 입력입니다!");
                this.$carNamesInput.value = "";
                this.carNames = [];
                return false;
            }
        }

        return true;
    }
}