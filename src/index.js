import {
    $carNamesInput, $carNamesSubmit, $racingCountInput, $racingCountSubmit,
} from './Html_Const.js';
import { splice_names } from './Check_CarNames.js';
import { check_numbers } from './Check_TryNumbers.js';
import { startGame } from './Start_Game.js';

export default function RacingCarGame() {
    let carArray = [];
    $carNamesSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const userInputCarNames = $carNamesInput.value;
        carArray = splice_names(userInputCarNames);
        $racingCountSubmit.style.display = '';
        $racingCountInput.style.display = '';
    });
    $racingCountSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const userInputTryNumbers = $racingCountInput.value;
        if (!check_numbers(userInputTryNumbers)) return;
        startGame(carArray, check_numbers(userInputTryNumbers));
    });
}

RacingCarGame();
