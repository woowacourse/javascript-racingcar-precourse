export default function RacingCarGame() {
  const racingCountContainer = document.querySelector(
    '.racing-count-container'
  );
  const racingResultContainer = document.querySelector(
    '.racing-result-container'
  );
  const carNamesInput = document.getElementById('car-names-input');
  const carNamesSubmit = document.getElementById('car-names-submit');
  const racingCountInput = document.getElementById('racing-count-input');
  const racingCountSubmit = document.getElementById('racing-count-submit');

  this.racingCount = 0;

  const handleClickCarNamesSubmit = () => {
    const carNamesList = carNamesInput.value.split(',');
    if (!isValidCarNames(carNamesList)) {
      return alert('잘못된 자동차 이름입니다.');
    }

    racingCountContainer.style.display = 'block';
  };

  const isValidCarNames = carNames => {
    for (const carName of carNames) {
      if (carName.length > 5 || carName.trim().length === 0) {
        return false;
      }
    }

    return true;
  };

  const handleClickRacingCountSubmit = () => {
    const input = racingCountInput.value;
    if (input === '' || input === '0') {
      alert('1 이상의 숫자만 입력 가능합니다.');
    }

    this.racingCount = Number(input);
  };

  racingCountContainer.style.display = 'none';
  racingResultContainer.style.display = 'none';
  carNamesSubmit.addEventListener('click', handleClickCarNamesSubmit);
  racingCountSubmit.addEventListener('click', handleClickRacingCountSubmit);
}

new RacingCarGame();
