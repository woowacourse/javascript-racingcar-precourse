import { checkCarName, checkRacingCnt } from '../asset/validation.js';
import { CHARACTER, RACING_CNT_INPUT_MSG } from '../asset/constant.js';
import RacingCars from '../model/RacingCars.js';
import RacingResult from '../view/RacingResult.js';

export default class RacingGame {
    constructor() {
        this.racingCars = new RacingCars();
        this.racingResult = new RacingResult();
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

            if (this.racingCars.isEmptyCars()) {
                alert(RACING_CNT_INPUT_MSG.noRegisterCar);
                this.$carNameInput.focus();
                return;
            }

            this.runGameIfValidRacingCnt();
        });
    }

    runGameIfValidRacingCnt() {
        const racingCnt = this.getRacingCnt();

        if (checkRacingCnt(racingCnt)) {
            this.runGame(Number(racingCnt));
        } else {
            this.$racingCntInput.focus();
        }
    }

    runGame(racingCnt) {
        this.racingResult.render(this.racingCars.getGameResult(racingCnt));
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
