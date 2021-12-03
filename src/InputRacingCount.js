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
            this.racingCount = this.$racingCountInput.value;
            console.log(this.$racingCountInput.value);
        })
    }
}