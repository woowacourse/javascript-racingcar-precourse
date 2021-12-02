import { Car } from "./car.js";
import { checkInputValidate } from "./input.js";

export default function Play() {
    const $racing_count_input = document.getElementById("racing-count-input");
    const $racing_count_btn = document.getElementById("racing-count-submit");
    this.game_information = {
        racing_count: 0,
        car_names: [],
    };
    this.init = () => {
        $racing_count_btn.addEventListener("click", function (e) {
            e.preventDefault();
            if (checkInputValidate($racing_count_input.value)) {
                setRacingCount($racing_count_input.value);
            }
        });
    };

    const getGameInformation = () => {
        return this.game_information;
    };

    const setRacingCount = (value) => {
        this.game_information.racing_count = value;
    };

    const setCarNames = (value) => {
        this.game_information.car_names = value;
    };

    this.init();
}

new Play();
