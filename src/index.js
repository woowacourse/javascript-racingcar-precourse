export default function RacingCarGame() {}

const validateCarsName = (array) => {
  let flag = true;
  array.forEach((e) => {
    if (e.length > 5) {
      flag = false;
    }
  });
  if (flag) {
    return true;
  } else {
    return false;
  }
};

export const getCarsName = () => {
  let carsArray = [];
  const carNameInput = document.getElementById('car-names-input').value;

  carsArray = carNameInput.split(',');
  if (carsArray.length > 1 && validateCarsName(carsArray)) {
    console.log('true');
  } else {
    alert('예시를 다시 확인하고 입력해주세요!');
  }
};

const namesSubmitButton = document.getElementById('car-names-submit');
if (namesSubmitButton) {
  namesSubmitButton.addEventListener('click', getCarsName);
}

new RacingCarGame();
