const { MOVE, LINE_BREAK } = require('../constants/message');

const moveFormatter = (name, move) => {
  const moveArray = Array.from({ length: move }, () => MOVE);
  return `${name}: ${moveArray.join('')}`;
};

const nameFormatter = (names) => names.replace(/(\s*)/g, '').split(',');

const roundFormatter = (round) => round.join(LINE_BREAK);

module.exports = {
  moveFormatter,
  nameFormatter,
  roundFormatter,
};
