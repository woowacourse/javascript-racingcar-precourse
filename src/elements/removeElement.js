export const removeResultText = () => {
  const $resultUl = document.body.querySelector('#result-list');
  const $restartBtn = document.body.querySelector('#restart-btn');
  const $resultText = document.body.querySelector('#result-container > div');
  while ($resultUl.firstChild) {
    $resultUl.removeChild($resultUl.firstChild);
  }
  $restartBtn.remove();
  $resultText.remove();
};
