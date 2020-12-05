export const createBarsByNumber = number => {
  const bar = '-';
  let result = '';
  for (let i = 0; i < number; i++) {
    result += bar;
  }

  return result;
};
