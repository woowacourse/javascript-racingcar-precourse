import { checkCarName, checkRacingCnt } from '../asset/validation.js';
import { CHARACTER, RACING_CNT_INPUT_MSG } from '../asset/constant.js';
import RacingCars from '../model/RacingCars.js';
import RacingResult from '../view/RacingResult.js';

export default class RacingGame {
    constructor() {
        this.$carNameInput = document.getElementById('car-names-input');
        this.$racingCntInput = document.getElementById('racing-count-input');
        this.$carNamesForm = document.getElementById('car-names-form');
        this.$racingCntForm = document.getElementById('racing-count-form');
        this.racingCars = new RacingCars();
        this.racingResult = new RacingResult(this.$racingCntForm);
    }

    init() {
        this.triggerCarNameSubmitEvent();
        this.triggerRacingCntSubmitEvent();
    }

    triggerCarNameSubmitEvent() {
        this.$carNamesForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const carNames = this.getCarNames();

            if (checkCarName(carNames)) {
                this.racingCars.generateCars(carNames);
                this.racingResult.showRacingCntForm();
                this.$racingCntInput.focus();
            } else {
                this.$carNameInput.focus();
            }
        });
    }

    triggerRacingCntSubmitEvent() {
        this.$racingCntForm.addEventListener('submit', (e) => {
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
            this.resetEnv();
        } else {
            this.$racingCntInput.focus();
        }
    }

    runGame(racingCnt) {
        this.racingResult.render(
            this.racingCars.getGameResult(racingCnt),
            this.racingCars.getWinners(),
        );
    }

    resetEnv() {
        this.setCarNameInput('');
        this.setRacingCntInput('');
        this.racingCars.destroyCars();
    }

    getCarNames() {
        return this.$carNameInput.value
            .split(CHARACTER.carNameSplit)
            .map((carName) => carName.trim());
    }

    setCarNameInput(value) {
        this.$carNameInput.value = value;
    }

    getRacingCnt() {
        return this.$racingCntInput.value;
    }

    setRacingCntInput(value) {
        this.$racingCntInput.value = value;
    }
}
