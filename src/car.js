// import { ERROR_MSG } from "./constant";
export function Car(name) {
    this.name = name;
    this.distance = 0;
}

export function CheckCarName(names) {
    let isPass = true;
    names.forEach((element) => {
        if (element.length > 5 || element.length < 1) {
            // alert(ERROR_MSG.over_range);
            isPass = false;
        } else if (element === "") {
            // alert(ERROR_MSG.input_something);
            isPass = false;
        }
    });

    return isPass;
}

export const checkDistance = (Cars) => {
    Cars.forEach((element) => {
        const num = MissionUtils.Random.pickNumberInRange(0, 9);
        if (checkNum(num)) element.distance += 1;
    });
    // 여기서 show 해야 함.
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
