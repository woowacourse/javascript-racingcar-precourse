import { checkCarName } from '../asset/validation.js';
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

    getCarNames() {
        return this.$carNameInput.value
            .split(CHARACTER.carNameSplit)
            .map((carName) => carName.trim());
    }
}
