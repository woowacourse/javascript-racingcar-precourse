function RacingCountValid($racingCountInput){
    if(!($racingCountInput.value%1 === 0)){
        console.log($racingCountInput.value%1 === 0)
        alert("잘못된 입력입니다! 경기 횟수는 정수를 입력해주세요!")
        return false;
    }
    else if($racingCountInput.value < 1){
        alert("잘못된 입력입니다! 경기 횟수는 0보다 커야합니다!")
        return false;
    }
    return true;
}

export function checkRacingCount(){
    const $racingCountInput = document.querySelector('#racing-count-input')

    if(!RacingCountValid($racingCountInput)){
        $racingCountInput.value = ''
        return false;
    }
    else{
        return true;
    }
}