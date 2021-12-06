const $app = document.querySelector('#app');
const countFormTitle = $app.querySelectorAll('h4')[0];
const racingCountInputForm = $app.querySelectorAll('form')[1];
const resultTitle = $app.querySelectorAll('h4')[1];

// 자동차 이름 입력만 렌더
const racingCountAndResultHide = () => {
  // 카운트 입력 숨기기
  countFormTitle.style.display = 'none';
  racingCountInputForm.style.display = 'none';

  // 결과 숨기기
  resultTitle.style.display = 'none';
};

// 시도 횟수 렌더
const racingCountInputRender = () => {
  countFormTitle.style.display = 'block';
  racingCountInputForm.style.display = 'block';
};

// 시도 과정 및 결과 렌더
const racingAndResultRender = () => {
  resultTitle.style.display = 'block';
};

export {
  racingCountAndResultHide,
  racingCountInputRender,
  racingAndResultRender
};
