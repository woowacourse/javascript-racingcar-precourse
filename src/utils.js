const getMaxVal = (list, val) => {
  return Math.max.apply(
    Math,
    list.map(function (obj) {
      return obj[val];
    })
  );
};

export const genRandomNumber = () => Math.floor(Math.random() * 10);

export const isEmpty = (input) => (input.length === 0 ? true : false);

export const isNegative = (input) => (parseInt(input) <= 0 ? true : false);

export const getMaxPropByVal = (list, key, val) => {
  const maxVal = getMaxVal(list, val);
  console.log(maxVal, "최대 이동 횟수");
};

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
