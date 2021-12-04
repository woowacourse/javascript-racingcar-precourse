function getMax(CARS) {
    let max = 0;
    for (const car of CARS) {
        if (max < car.forward) {
            max = car.forward;
        }
    }
    return max;
}

export function getWinner(CARS) {
    let max = getMax(CARS);

    let winner = [];
    for (const car of CARS) {
        if (car.forward === max) {
            winner.push(car.name);
        }
    }
    return winner;
}
