import { getCarNames } from './getCarNames.js'
import { CAR } from './constant.js'
import { checkRacingCount } from './checkRacingCount.js'

export function gameStart(){
    const $carNameInput = document.querySelector('#car-names-input')
    const $racingCountInput = document.querySelector('#racing-count-input')

    if(!checkRacingCount($racingCountInput)){
        return;
    }

    const carNames = getCarNames($carNameInput)
    const cars = carNames.map(name => new CAR(name))

    console.log(cars)
}