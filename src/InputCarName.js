export default class InputCarName {
    constructor() {
        this.$carNamesInput = document.getElementById("car-names-input");
        this.$carNamesSubmit = document.getElementById("car-names-submit");
        this.carNames = [];

        this.addNamesSubmitEvent();
    }

    checkLength(name) {
        if(name !== "" && name.length <= 5) {
            return true;
        }

        return false;
    }

    checkBlank(name) {
        if(name.indexOf(" ") === -1) {
            return true;
        }

        return false;
    }

    invalidCarNames() {
        this.$carNamesInput.value = "";
        this.carNames = [];

        return alert("유효하지 않은 입력입니다!");
    }

    isValidNames(carNamesArray) {
        const arrayLength = carNamesArray.length;

        for(let i = 0; i < arrayLength; i++) {
            if(!(this.checkLength(carNamesArray[i]) && this.checkBlank(carNamesArray[i]))) {
                this.invalidCarNames();
                return false;
            }
        }

        return true;
    }

    splitCarNames(carNamesString) {
        const carNamesArray = carNamesString.split(',');

        if(this.isValidNames(carNamesArray)) {
            this.carNames = carNamesArray.slice();
        };

        return;
    }

    addNamesSubmitEvent() {
        this.$carNamesSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            const carNamesString = this.$carNamesInput.value;
            this.splitCarNames(carNamesString);
        })

        return;
    }
}