const { Random } = require('@woowacourse/mission-utils');

const RANGE = Object.freeze({
  start: 0,
  end: 9,
});

const RandomNumber = {
  get() {
    return Random.pickNumberInRange(RANGE.start, RANGE.end);
  },
};

module.exports = RandomNumber;
