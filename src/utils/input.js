export const parseCarNames = names => names.split(',').map(name => name.trim());

export const isValidCarNames = names => {
  if (names.length === 0) return false;
  for (const name of names) {
    const { length } = name;
    if (length === 0 || length > 5) return false;
  }
  return true;
};
