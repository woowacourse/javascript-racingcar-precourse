import { checkInputValidate } from "./input.js";
import { CheckCarName } from "./car.js";
import { PlayGame } from "./game.js";
import { showElement, hideElement } from "./view.js";

export default function SetGame() {
    const $racing_count_input = document.getElementById("racing-count-input");
    const $racing_count_submit = document.getElementById("racing-count-submit");
    const $racing_count_form = document.getElementById("racing-count-form");
    const $racing_count_h4 = document.getElementById("racing-count-h4");

    const $car_names_input = document.getElementById("car-names-input");
    const $car_names_submit = document.getElementById("car-names-submit");

    const $racing_result_h4 = document.getElementById("racing-result-h4");

    this.game_information = {
        racing_count: 0,
        car_names: [],
    };
    this.init = () => {
        hideElement($racing_count_form);
        hideElement($racing_result_h4);
        hideElement($racing_count_h4);

        setCarSubmit($car_names_submit);
        setCountSubmit($racing_count_submit);
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

    const setCarSubmit = (element) => {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            const names = $car_names_input.value.split(",");
            if (CheckCarName(names)) {
                setCarNames(names);
                showElement($racing_count_h4);
                showElement($racing_count_form);
            } else {
                alert("올바른 값을 입력해주세요");
                $car_names_input.value = "";
            }
        });
    };

    const setCountSubmit = (element) => {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            const input_val = $racing_count_input.value;
            if (checkInputValidate(input_val)) {
                setRacingCount(input_val);
                showElement($racing_result_h4);
            } else {
                alert("올바른 값을 입력해주세요");
                $racing_count_input.value = "";
            }

            new PlayGame(getGameInformation());
        });
    };

    this.init();
}

new SetGame();
