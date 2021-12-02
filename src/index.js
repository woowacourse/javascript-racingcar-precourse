// import { Car } from "./car.js";
import { checkInputValidate } from "./input.js";
import { CheckCarName } from "./car.js";

export default function SetGame() {
    const $racing_count_input = document.getElementById("racing-count-input");
    const $racing_count_btn = document.getElementById("racing-count-submit");

    const $car_names_input = document.getElementById("car-names-input");
    const $car_names_submit = document.getElementById("car-names-submit");

    this.game_information = {
        racing_count: 0,
        car_names: [],
    };
    this.init = () => {
        $racing_count_btn.addEventListener("click", function (e) {
            e.preventDefault();
            const input_val = $racing_count_input.value;
            if (checkInputValidate(input_val)) setRacingCount(input_val);
            else alert();
        });

        $car_names_submit.addEventListener("click", function (e) {
            e.preventDefault();
            const names = $car_names_input.value.split(",");
            if (CheckCarName(names)) setCarNames(names);
            else alert();
        });
        // 클릭되는 순간에 값이 나오기 때문에, 이게 어떻게 되는지 모르겠네..둘 중에 어느 버튼을 누르더라도,
        // 조건이 확인된다면, 게임이 실행될 수 있게끔 설정해야함.
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

new SetGame();
