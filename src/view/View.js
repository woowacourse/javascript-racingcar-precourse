import { CAR_NAMES_ERROR, REPEAT_COUNT_ERROR, EMPTY_INPUT_ERROR } from '../index.js';

const RACING_COUNT_HEAD_ID = '#racing-count-head';
const RACING_COUNT_FORM = '#racing-count-form';
const RESULT_ID = '#result';
const CAR_NAMES_INPUT_ID = '#car-names-input';

const NAME_ERROR_MESSAGE = '입력 오류! 공백을 포함하지 않은 5자 이하 이름만 입력해주세요!';
const REPEAT_ERROR_MESSAGE = '입력 오류! 1 이상 숫자를 입력해주세요!';
const NO_INPUT_ERROR_MESSAGE = '입력 오류! 자동차 이름과 반복할 횟수 모두 입력해주세요!';

const DISPLAY_NONE = 'none';
const DISPLAY_BLOCK = 'block';

function hideNextHtml($countHead, $countForm, $result) {
  $countHead.style.display = DISPLAY_NONE;
  $countForm.style.display = DISPLAY_NONE;
  $result.style.display = DISPLAY_NONE;
}

export default class View {
  constructor() {
    this.$countHead = document.querySelector(RACING_COUNT_HEAD_ID);
    this.$countForm = document.querySelector(RACING_COUNT_FORM);
    this.$result = document.querySelector(RESULT_ID);
    this.$carNamesInput = document.querySelector(CAR_NAMES_INPUT_ID);

    hideNextHtml(this.$countHead, this.$countForm, this.$result);
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
}
