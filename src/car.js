// import { ERROR_MSG } from "./constant";

function Car(name) {
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
