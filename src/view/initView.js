export default function initView() {
  const $newResultContainer = document.createElement('div');
  const $appDiv = document.querySelector('#app');

  $newResultContainer.id = 'result-container';
  $appDiv.append($newResultContainer);
}
