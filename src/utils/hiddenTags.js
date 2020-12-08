export default function hiddenTags() {
  const $racingCountInputContainer = document.querySelector('#racing-count-input').closest('div');
  const $resultContainer = document.querySelector('#app > div:last-child');
  $racingCountInputContainer.style.visibility = 'hidden';
  $resultContainer.style.visibility = 'hidden';
}
