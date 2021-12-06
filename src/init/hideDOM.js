const $app = document.querySelector('#app');
const countFormTitle = $app.querySelectorAll('h4')[0];
const racingCountInputForm = $app.querySelectorAll('form')[1];
const resultTitle = $app.querySelectorAll('h4')[1];

const inputCountHide = () => {
  // 카운트 입력 숨기기

  countFormTitle.style.display = 'none';
  resultTitle.style.display = 'none';
  racingCountInputForm.style.display = 'none';
};

export default inputCountHide;
