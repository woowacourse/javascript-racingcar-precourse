function showResultHead() {
  const $resultHead = document.querySelector('#result');

  $resultHead.style.display = 'block';
}

export default function showRaceResult(cars) {
  showResultHead();
}
