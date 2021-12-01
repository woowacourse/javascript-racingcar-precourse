import {
  $racingCountTitle,
  $racingCountInput,
  $racingCountSubmit,
  $resultTitle,
} from '../constants/HTMLconstant.js';

export default function initialize() {
  $racingCountTitle.style.display = 'none';
  $racingCountInput.style.display = 'none';
  $racingCountSubmit.style.display = 'none';
  $resultTitle.style.display = 'none';
}
