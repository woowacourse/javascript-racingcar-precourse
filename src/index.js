import { Car } from "./Car.js";
import { $Car_names_input, $Car_names_submit, $Racing_count_input, $Racing_count_submit } from "./Html_Const.js";
import { splice_names } from "./Check_CarNames.js";
import { check_numbers } from "./Check_TryNumbers.js";
import { startGame } from "./Start_Game.js";

export default function RacingCarGame() {
    let carArray = [];
    let tryNumbs;

    $Car_names_submit.addEventListener('click', (e) => {
        e.preventDefault();
        const userInputCarNames = $Car_names_input.value;
        //const arr = splice_names(userInputCarNames);
        carArray = splice_names(userInputCarNames);
        console.log(carArray);
    });

    $Racing_count_submit.addEventListener('click', (e) => {
        e.preventDefault();
        const userInputTryNumbers = $Racing_count_input.value;
        // const TryNumbers = check_numbers(userInputTryNumbers);
        tryNumbs = check_numbers(userInputTryNumbers);
        console.log(carArray, tryNumbs);
        startGame(carArray, tryNumbs);
    });
}

RacingCarGame();