import {
  $racingCountTitle,
  $racingCountInput,
  $racingCountSubmit,
} from './constants/HTMLconstant.js';

export default function showRacingInput() {
  $racingCountTitle.style.display = '';
  $racingCountInput.style.display = '';
  $racingCountSubmit.style.display = '';
}
