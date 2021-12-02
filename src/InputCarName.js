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

    isValidNames(carNamesArray) {
        const arrayLength = carNamesArray.length;

        if(carNamesArray[0] === "") {
            return alert("자동차 이름을 입력해주세요!");
        }

        for(let i = 0; i < arrayLength; i++) {
            if(carNamesArray[i].length > 5) {
                return alert("5자 이하의 자동차 이름을 입력해주세요!");
            }
            if(carNamesArray[i].indexOf(" ") !== -1) {
                return alert("공백이 없는 이름을 입력해주세요!");
            }
            if(carNamesArray[arrayLength - 1] === "") {
                return alert("마지막 자동차 이름을 입력해주세요!")
            }
        }

        return true;
    }
}