export const INPUT_ERROR = {
    INVALID_LENGTH: "자동차 이름은 5자 이하만 가능합니다.",
    DUPLICATED: "자동차 이름이 중복되어서는 안됩니다.",
    CONTAINED_BLANK: "자동차 이름에 공백이 포함되어서는 안됩니다.",
    NULL: "자동차 이름이 빈 문자열이 되어서는 안됩니다.",
    COUNT_NEGATIVE: "횟수는 음수가 되어서는 안됩니다.",
    COUNT_NOT_NATURAL: "횟수는 자연수가 되어야 합니다.",
    COUNT_BLANK: "횟수를 입력해주세요!",
};

export const SELECTOR = {
    ID: {
        APP: "app",
        CAR_NAMES_INPUT: "car-names-input",
        CAR_NAMES_BUTTON: "car-names-submit",
        CAR_NAMES_FORM: "car-names-form",
        RACING_COUNT_FORM: "racing-count-form",
        RACING_COUNT_COMMAND: "racing-count-command",
        RACING_COUNT_INPUT: "racing-count-input",
        RACING_COUNT_SUBMIT: "racing-count-submit",
        RESULT: "result",
    },
};

export const CAR = {
    RANDOM_MINIMUM_NUMBER: 0,
    RANDOM_MAXIMUM_NUMBER: 9,
    MOVE_NUMBER: 4,
};

export const STYLE = {
    RESULT_MARGIN_VERTICAL: "16px",
    RESULT_MARGIN_HORIZONTAL: "0",
    SPAN_FONT_SIZE: "16px",
};
