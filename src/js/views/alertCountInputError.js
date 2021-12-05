const alertCountInputError = countInput => {
  if (countInput === '') {
    alert('공백입니다. 숫자를 입력하세요.');
  } else if (Number(countInput) < 1) {
    alert('1이상의 수를 입력하세요.');
  }
};

export default alertCountInputError;
