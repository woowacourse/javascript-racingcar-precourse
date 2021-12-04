function getMax(CARS) {
    let max = 0;
    //최댓값 구하기
    for (const car of CARS) {
        if (max < car.forward) {
            max = car.forward;
        }
    }
    return max;
}

export function getWinner(CARS) {
    let max = getMax(CARS);

    //승자 구하기
    let winner = [];
    for (const car of CARS) {
        if (car.forward === max) {
            winner.push(car.name);
        }
    }
    return winner;
}
