const isOnlyNumbers = (value) => /^[0-9]*$/g.test(value) && value > 0;

const isWithComma = (value) => value.indexOf(',') > -1;

const isLengthLimit = (values, min, max) => {
  const validList = values.filter(
    (item) => item.length >= min && item.length <= max
  );
  return validList.length === values.length;
};

const isUniqueWord = (values) => values.length === new Set(values).size;

export { isOnlyNumbers, isWithComma, isLengthLimit, isUniqueWord };
