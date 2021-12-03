const racingCountInput = document.querySelector('#racing-count-input');

export default function validateUserCount() {
  const countInput = racingCountInput.value;
  console.log(countInput);
  if (countInput <= 0) {
    alert('1이상의 수 입력해주세요');
  }
  return countInput;
}
