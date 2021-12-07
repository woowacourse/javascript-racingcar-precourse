import { Car } from './Car.js';
import { $racingWinners } from './Html_Const.js';

export const startGame = (carArray, tryNumbs) => {
    $racingWinners.innerHTML = '';
    const carList = makeCarList(carArray);
    const racingResultList = {};
    for (let i = 0; i < tryNumbs; i++) {
        let try_result = '';
        carList.forEach((element) => {
            element.makeCarMove();
            try_result += `${element.getResult()}<br> \n`;
        });
        $racingWinners.innerHTML += try_result;
        $racingWinners.innerHTML += '<br>';
    }
    carList.forEach((element) => { racingResultList[element.name] = element.getPoint(); });
    gameResult(racingResultList);
};

const makeCarList = (carArray) => {
    const carList = [];
    carArray.forEach((element) => { carList.push(new Car(element)); });
    return carList;
};

const gameResult = (racingResultList) => {
    const ResultList = racingResultList;
    const winner_point = maxPoint(ResultList);
    const winner_arr = getWinner(ResultList, winner_point);
    const winners = winner_arr.join(', ');
    $racingWinners.innerHTML += `최종 우승자 : ${winners} <br>`;
};

const maxPoint = (dict) => {
    let max = 0;
    for (const key in dict) { if (dict[key] >= max) max = dict[key]; }
    return max;
};

const getWinner = (dict, point) => {
    const arr = [];
    for (const key in dict) { if (dict[key] === point) arr.push(key); }
    return arr;
};
