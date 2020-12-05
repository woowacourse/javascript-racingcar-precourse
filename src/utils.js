export const validateNameInput = names => {
  const namesArr = names.split(',');
  const areNamesValid = namesArr.every(name => name.length <= 5);
  if (!areNamesValid) {
    alert('자동차 이름을 5자리 이하로 입력해 주세요.');
  }
};
