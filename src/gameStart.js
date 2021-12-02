import { getCarNames } from './getCarNames.js'
import { CAR } from './constant.js'
import { checkRacingCount } from './checkRacingCount.js'
import { disabledElement } from './setAttribute.js'



//각 자동차 진행상황 프린트
function printEachCarProgress(CARS){
    for(let car of CARS){
        const randomNumber = MissionUtils.Random.pickNumberInRange(0,9)
        console.log(randomNumber)
        if(randomNumber >= 4){
            car.PLUS_FORWARD();
        }
        document.querySelector('body').innerHTML += `<p class="gameProgress">${car.name} ${car.gameProgress}</p>`
    }
}

//게임진행 보여주기
function printGameProgress(CARS, $racingCountInput){
    for(let i=0; i<$racingCountInput.value; i++){

        printEachCarProgress(CARS)

        document.querySelector('body').innerHTML += '<br>'
    }
}

//레이싱게임 시작
export function gameStart(){
    const $carNameInput = document.querySelector('#car-names-input')
    const $racingCountInput = document.querySelector('#racing-count-input')
    const $racingCountSubmit = document.querySelector('#racing-count-submit')
    
    disabledElement($racingCountInput)
    disabledElement($racingCountSubmit)

    if(!checkRacingCount($racingCountInput)){
        return;
    }

    const carNames = getCarNames($carNameInput)
    const CARS = carNames.map(name => new CAR(name))

    console.log(CARS)


    printGameProgress(CARS, $racingCountInput)


    //승자 구하기
    function getWinner(CARS){
        let max = 0
        //최댓값 구하기
        for(const car of CARS){
            if(max < car.forward){
                max = car.forward
            }
        }
        //승자 구하기
        let winner = []
        for(const car of CARS){
            if(car.forward === max){
                winner.push(car.name)
            }
        }
        return winner
    }
    let winner = getWinner(CARS)
    console.log(winner);

}