export const isUnderFive = (arr) => {
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      flag = false;
      break;
    }
  }
  return flag;
};

export const hasEmptyItem = (arr) => {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
      flag = true;
      break;
    }
  }
  return flag;
};
