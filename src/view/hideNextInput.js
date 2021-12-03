export default function hideRepeatCountHtml() {
  const $racingCountHead = document.querySelector('#racing-count-head');
  const $racingCountForm = document.querySelector('#racing-count-form');
  const $result = document.querySelector('#result');

  $racingCountHead.style.display = 'none';
  $racingCountForm.style.display = 'none';
  $result.style.display = 'none';
}