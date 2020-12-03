export default function hideResultScreen() {
  const $resultScreen = document.querySelector('#app > div:last-child');
  $resultScreen.style.display = 'none';
}
