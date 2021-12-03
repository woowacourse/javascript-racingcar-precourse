export const check_numbers = input => {
    if (isNaN(input)) return alert('숫자를 입력하세요');
    if (input === "") return alert('숫자를 입력하세요');
    return input;
}