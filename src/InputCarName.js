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
            const carnames = this.$carNamesInput.value;
            this.splitCarNames(carnames);
        })

        return;
    }

    // 콤마 기준으로 문자열 분리
    splitCarNames(carnames) {
        const carNamesArray = carnames.split(',');
        // this.carNames = carNamesArray.slice();

        return;
    }
}