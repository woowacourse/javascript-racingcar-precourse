import { getCarNames } from './getCarNames.js';

export function racingGame() {
    const $carNameSubmit = document.querySelector('#car-names-submit')

    //자동차 이름 제출버튼 클릭시
    $carNameSubmit.addEventListener('click', getCarNames)

}
   
racingGame()
