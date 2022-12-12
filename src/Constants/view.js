const NL = '\n'

const INPUT_MESSAGE = {
    name: "자동차 이름을 5자 이하로 입력해주세요. (여러대일 경우 콤마+스페이스로 구분)" + NL,
    try: NL + "시도할 횟수를 입력해주세요." + NL
};

const OUTPUT_MESSAGE = {
    error: (message, name, cause) => `${name} : ${message}\n[CAUSE] : ${cause}`,
    result_start : "실행 결과",
    winner : (winner) => `최종 우승자 : ${winner.join(", ")}`
};


module.exports = {INPUT_MESSAGE, OUTPUT_MESSAGE}