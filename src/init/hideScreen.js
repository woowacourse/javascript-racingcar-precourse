function hideCountInputScreen() {
  const $racingCountTitle = document.querySelector('#racing-count-title');
  const $racingCountForm = document.querySelector('#racing-count-form');
  $racingCountTitle.setAttribute('hidden', true);
  $racingCountForm.setAttribute('hidden', true);
}

function hideResultScreen() {
  const $racingResultTitle = document.querySelector('#racing-result-title');
  $racingResultTitle.setAttribute('hidden', true);
}

export default function hideScreen() {
  hideCountInputScreen();
  hideResultScreen();
}
