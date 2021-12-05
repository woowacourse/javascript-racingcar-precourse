import { checkCarName, checkRacingCnt } from '../asset/validation.js';
import { CHARACTER } from '../asset/constant.js';
import RacingCars from '../model/RacingCars.js';

export default class RacingGame {
    constructor() {
        this.racingCars = new RacingCars();
        this.$carNameInput = document.getElementById('car-names-input');
        this.$racingCntInput = document.getElementById('racing-count-input');
    }

    init() {
        this.triggerCarNameSubmitEvent();
        this.triggerRacingCntSubmitEvent();
    }

    triggerCarNameSubmitEvent() {
        document.getElementById('car-names-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const carNames = this.getCarNames();

            if (checkCarName(carNames)) {
                this.racingCars.generateCars(carNames);
                this.$racingCntInput.focus();
            } else {
                this.$carNameInput.focus();
            }
        });
    }

    triggerRacingCntSubmitEvent() {
        document.getElementById('racing-count-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const racingCnt = this.getRacingCnt();

            if (checkRacingCnt(racingCnt)) {
            } else {
                this.$racingCntInput.focus();
            }
        });
    }

    getCarNames() {
        return this.$carNameInput.value
            .split(CHARACTER.carNameSplit)
            .map((carName) => carName.trim());
    }

    getRacingCnt() {
        return this.$racingCntInput.value;
    }
}
