export const splice_names = (input) => {
    const arr = input.split(",");
    if (!check_duplicate(arr)) return;
    if (!check_length(arr)) return;
    return arr;
};

const check_duplicate = arr => {
    if (new Set(arr).size !== arr.length) return alert('중복되지 않은 이름을 입력해주세요.');
    return true;
};

const check_length = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) return alert('5자 이하로 이름을 입력해주세요.');
    };
    return true;
};