import { Car } from "./Car.js"
import { $Racing_winners } from "./Html_Const.js"

export const startGame = (carArray, tryNumbs) => {
    let nums = setTryNums(tryNumbs);
    let carList = makeCarList(carArray);

    for (let i = 0; i < tryNumbs; i++) {
        let try_result = '';
        carList.forEach(element => {
            element.makeCarMove();
            try_result += `${element.getResult()}<br> \n`;
        });
        $Racing_winners.innerHTML += try_result;
        $Racing_winners.innerHTML += "<br>";
    };
};

const makeCarList = carArray => {
    let carList = [];
    carArray.forEach(element => {
        carList.push(new Car(element));
    });
    return carList;
}

const setTryNums = tryNumbs => {
    let nums = tryNumbs;
    return nums;
}

