export default class InputRacingCount {
    constructor() {
        this.$racingCountInput = document.getElementById("racing-count-input");
        this.$racingCountSubmit = document.getElementById("racing-count-submit");
        this.racingCount = 0;


        this.addCountSubmitEvent();
    }

    addCountSubmitEvent() {
        this.$racingCountSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            const inputCount = this.$racingCountInput.value;

            this.isValidCount(inputCount);
            // this.racingCount = this.$racingCountInput.value;
            // console.log(this.$racingCountInput.value);
        })
    }

    checkNumberForm(inputCount) {
        if(inputCount === "" || isNaN(inputCount)) {
            return false;
        }

        return true;
    }

    checkNumberSize(inputCount) {
        if(inputCount <= 0 || inputCount.indexOf('.') !== -1) {
            return false;
        }

        return true;
    }

    invalidCountAction() {
        alert("유효하지 않은 입력입니다!");
        this.$racingCountInput.value = "";

        return false;
    }

    isValidCount(inputCount) {
        if(!(this.checkNumberForm(inputCount) && this.checkNumberSize(inputCount))) {
            this.invalidCountAction();
        }

        return true;
    }
}