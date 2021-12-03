export const setInitialStyle = () => {
  const racingCountText = document.getElementById('racing-count-text');
  const racingCountForm = document.getElementById('racing-count-form');
  const racingResultText = document.getElementById('racing-result-text');

  racingCountText.style.display = 'none';
  racingCountForm.style.display = 'none';
  racingResultText.style.display = 'none';
};

export const displayCountForm = () => {
  const racingCountText = document.getElementById('racing-count-text');
  const racingCountForm = document.getElementById('racing-count-form');

  racingCountText.style.display = 'block';
  racingCountForm.style.display = 'block';
};
