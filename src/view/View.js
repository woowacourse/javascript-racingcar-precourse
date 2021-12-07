const RACING_COUNT_HEAD_ID = '#racing-count-head';
const RACING_COUNT_FORM = '#racing-count-form';
const RESULT_ID = '#result';
const CAR_NAMES_INPUT_ID = '#car-names-input';
const APP_ID = '#app';
const RESULT_CONTAINER_ID = '#result-container';

export const CAR_NAMES_ERROR = 1;
export const REPEAT_COUNT_ERROR = 2;
export const EMPTY_INPUT_ERROR = 3;

const NAME_ERROR_MESSAGE = '입력 오류! 공백을 포함하지 않은 5자 이하 이름만 입력해주세요!';
const REPEAT_ERROR_MESSAGE = '입력 오류! 1 이상 숫자를 입력해주세요!';
const NO_INPUT_ERROR_MESSAGE = '입력 오류! 자동차 이름과 반복할 횟수 모두 입력해주세요!';

const DISPLAY_NONE = 'none';
const DISPLAY_BLOCK = 'block';

const WINNER_SPAN_ID = 'racing-winners';
const WINNER_TITLE = '최종 우승자: ';

function resetView($appDiv) {
  const $resultContainer = document.querySelector(RESULT_CONTAINER_ID);

  if ($resultContainer) {
    $appDiv.removeChild($resultContainer);
  }
}

function showResultHead(result) {
  const $resultHeadCopy = result;

  $resultHeadCopy.style.display = DISPLAY_BLOCK;
}

function getPositionBar(car) {
  let positionString = '';

  for (let index = 0; index < car.getPosition(); index += 1) {
    positionString += '-';
  }
  return positionString;
}

function getOneRaceResult(cars) {
  let innerHtml = '';

  cars.forEach((car) => {
    innerHtml += `<div>${car.getName()}: ${getPositionBar(car)}</div>`;
  });
  return innerHtml;
}

function getWinnerNames(winners) {
  return winners.map((winner) => winner.getName());
}

function showWinnerTitle($resultContainer) {
  const $title = document.createElement('span');

  $title.textContent = WINNER_TITLE;
  $resultContainer.append($title);
}

export default class View {
  constructor() {
    this.$countHead = document.querySelector(RACING_COUNT_HEAD_ID);
    this.$countForm = document.querySelector(RACING_COUNT_FORM);
    this.$result = document.querySelector(RESULT_ID);
    this.$carNamesInput = document.querySelector(CAR_NAMES_INPUT_ID);
    this.$appDiv = document.querySelector(APP_ID);
  }

  hideNextHtml() {
    this.$countHead.style.display = DISPLAY_NONE;
    this.$countForm.style.display = DISPLAY_NONE;
    this.$result.style.display = DISPLAY_NONE;
  }

  alertError(error) {
    if (error === CAR_NAMES_ERROR) {
      alert(NAME_ERROR_MESSAGE);
      this.$carNamesInput.value = '';
    }
    if (error === REPEAT_COUNT_ERROR) {
      alert(REPEAT_ERROR_MESSAGE);
    }
    if (error === EMPTY_INPUT_ERROR) {
      alert(NO_INPUT_ERROR_MESSAGE);
    }
  }

  showNextInput() {
    this.$countHead.style.display = DISPLAY_BLOCK;
    this.$countForm.style.display = DISPLAY_BLOCK;
  }

  initView() {
    const $newResultContainer = document.createElement('div');
    resetView(this.$appDiv);

    $newResultContainer.innerHTML = '';
    $newResultContainer.id = 'result-container';
    this.$appDiv.append($newResultContainer);
  }

  showRaceResult(cars) {
    showResultHead(this.$result);
    const $resultContainer = document.querySelector(RESULT_CONTAINER_ID);
    const $oneRaceResult = document.createElement('p');

    $oneRaceResult.innerHTML = getOneRaceResult(cars);
    $resultContainer.append($oneRaceResult);
  }

  static showWinners(winners) {
    const $resultContainer = document.querySelector(RESULT_CONTAINER_ID);
    const $winnersSpan = document.createElement('span');
    const winnerNames = getWinnerNames(winners);
    $winnersSpan.id = WINNER_SPAN_ID;
    showWinnerTitle($resultContainer);

    $winnersSpan.textContent = `${winnerNames.join(', ')}`;
    $resultContainer.append($winnersSpan);
  }
}
