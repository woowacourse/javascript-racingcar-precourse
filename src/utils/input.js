export const parseCarNames = names => names.split(',').map(name => name.trim());

export const hasDuplicatedName = names => new Set(names).size < names.length;

export const isValidCarNames = names => {
  if (names.length === 0) return false;
  if (hasDuplicatedName(names)) return false;
  for (const name of names) {
    const { length } = name;
    if (length === 0 || length > 5) return false;
  }
  return true;
};

export const parseRacingCount = count => +count.trim();

export const isValidRacingCount = count =>
  !Number.isNaN(count) && Number.isInteger(count) && count > 0;
