export default function RacingCarGame() {
  const carNamesInput = document.getElementById('car-names-input');
  const carNamesSubmit = document.getElementById('car-names-submit');

  const handleClickCarNamesSubmit = () => {
    const carNamesList = carNamesInput.value.split(',');
    if (!isValidCarNames(carNamesList)) {
      return alert('잘못된 자동차 이름입니다.');
    }
  };

  const isValidCarNames = carNames => {
    for (const carName of carNames) {
      if (carName.length > 5 || carName.trim().length === 0) {
        return false;
      }
    }

    return true;
  };
  carNamesSubmit.addEventListener('click', handleClickCarNamesSubmit);
}

new RacingCarGame();
