function resetView($appDiv) {
  const $resultContainer = document.querySelector('#result-container');

  if ($resultContainer) {
    $appDiv.removeChild($resultContainer);
  }
}

export default function initView() {
  const $newResultContainer = document.createElement('div');
  const $appDiv = document.querySelector('#app');
  resetView($appDiv);

  $newResultContainer.innerHTML = '';
  $newResultContainer.id = 'result-container';
  $appDiv.append($newResultContainer);
}
