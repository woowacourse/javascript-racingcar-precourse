import {
    renderRacingResultScreen,
    renderRacingGameWinner,
} from "./renderScreen.js";
import { makeNewCars, playRacingCarGames } from "./play.js";

export function makeRacingCountSubmitButton() {
    const racingCountSubmitButton = document.querySelector(
        "#racing-count-submit"
    );
    racingCountSubmitButton.addEventListener(
        "click",
        handleRacingCountSubmitClick
    );
}

export function handleRacingCountSubmitClick() {
    const racingCountInput = document.querySelector("#racing-count-input");
    const racingCounts = Number(racingCountInput.value);
    const newCars = makeNewCars();
    const racingResult = playRacingCarGames(newCars, racingCounts);
    const racingResultScreen = renderRacingResultScreen(
        racingResult,
        racingCounts
    );
    renderRacingGameWinner(racingResult, racingResultScreen);
}
