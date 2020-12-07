export const BUTTON = {
    CAR_NAMES_BUTTON: document.getElementById('car-names-submit'),
    RACING_COUNT_BUTTON: document.getElementById('racing-count-submit'),
};

export const TEXT = {
    CAR_NAMES_INPUT: document.getElementById('car-names-input'),
    RACING_COUNT_INPUT: document.getElementById('racing-count-input'),
}

export const CLASS = {
    GAMEBOARD: document.getElementsByClassName('car-game-container')[0],
    GAMEBOARD_CAR_NAMES: GAMEBOARD.childNodes[1],
    GAMEBOARD_RACING_COUNT: GAMEBOARD.childNodes[3],
    RESULTBOARD: document.getElementsByClassName('result-container')[0],
};

export const MESSAGE = {
    CAR: '-',
    WINNER: '최종 우승자',
};

export const ERROR = {
    REWRITE: '다시 입력하세요!',
}