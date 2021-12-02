import { getCarNames } from './getCarNames.js'
import { enalbedElement,disabledElement } from './setAttribute.js'


//자동차 이름 입력값 유효성 검사 함수
function carNameValid(carNames) {
    if (!carNames.every((car) => car.length < 5)) {
        alert("잘못된 입력입니다! 자동차 이름은 5자 이하만 가능합니다!");
        return false;
    }
    else if (!carNames.every((car) => car.length !== 0)) {
        alert("잘못된 입력입니다! 자동차 이름은 공백일 수 없습니다!")
        return false;
    }
    return true;
};




//자동차 이름 제출 버튼 클릭시
export function checkCarNames() {
    const $carNameInput = document.querySelector('#car-names-input');
    const $racingCountSubmit = document.querySelector('#racing-count-submit')
    const $carNameSubmit = document.querySelector('#car-names-submit')
    const $racingCountInput = document.querySelector('#racing-count-input')



    const carNames = getCarNames($carNameInput)




    //자동차 이름 입력값에 오류가 있을 경우 입력창 비우기
    if (!carNameValid(carNames)) {
        $carNameInput.value = ''
    }
    else{

    enalbedElement($racingCountInput)
    enalbedElement($racingCountSubmit)
    disabledElement($carNameSubmit)
    disabledElement($carNameInput)
    }
}
