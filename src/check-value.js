export default class CheckValue {
    // 변수의 빈값 여부를 확인하는 함수
    isEmpty(value) {
        let result = false;
        if(value === "" || value === null || value === undefined
            || (value !== null && typeof value === "object"
            && !Object.keys(value).length)) {
            result = true;
        }
        return result;
    }
}