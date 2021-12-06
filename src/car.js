import { showRacingProcess, addApp } from "./view.js";

export function Car(name) {
    this.name = name;
    this.distance = 0;
}

export function CheckCarName(names) {
    let isPass = true;
    names.forEach((element) => {
        if (element.length > 5 || element.length < 1) {
            isPass = false;
        } else if (element === "") {
            isPass = false;
        }
    });

    return isPass;
}

const checkDistance = (Cars) => {
    Cars.forEach((element) => {
        const num = MissionUtils.Random.pickNumberInRange(0, 9);
        if (checkNum(num)) element.distance += 1;
    });

    const process = showRacingProcess(Cars);
    addApp(process);

    return Cars;
};

export const repeatRacingCount = function (racing_count, Cars) {
    for (let i = 0; i < racing_count; i++) {
        Cars = checkDistance(Cars);
    }

    return Cars;
};

const checkNum = (number) => {
    if (number > 3) return true;
    else return false;
};
