import { Car } from "./Car.js"
import { $Racing_winners } from "./Html_Const.js"

export const startGame = (carArray, tryNumbs) => {
    $Racing_winners.innerHTML = '';
    let carList = makeCarList(carArray);
    let racingResultList = {};
    for (let i = 0; i < tryNumbs; i++) {
        let try_result = '';
        carList.forEach(element => {
            element.makeCarMove();
            try_result += `${element.getResult()}<br> \n`;
        });
        $Racing_winners.innerHTML += try_result;
        $Racing_winners.innerHTML += "<br>";
    };
    carList.forEach(element => { racingResultList[element.name] = element.getPoint(); });
    gameResult(racingResultList);
};

const makeCarList = carArray => {
    let carList = [];
    carArray.forEach(element => { carList.push(new Car(element)); });
    return carList;
};

const gameResult = racingResultList => {
    let ResultList = racingResultList;
    let winner_point = maxPoint(ResultList);
    let winner_arr = getWinner(ResultList, winner_point);
    let winners = winner_arr.join(', ');
    $Racing_winners.innerHTML += `최종 우승자 : ${winners} <br>`;
};

const maxPoint = dict => {
    let max = 0;
    for (let key in dict) { if (dict[key] >= max) max = dict[key]; };
    return max;
};

const getWinner = (dict, point) => {
    let arr = [];
    for (let key in dict) { if (dict[key] === point) arr.push(key); };
    return arr;
};