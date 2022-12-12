const {Random} = require('@woowacourse/mission-utils');

const RandeomNumberGenerator = {
    get() {
        return Random.pickNumberInRange(0, 9);
    },

    isMoreThanFour() {
        return this.get() >= 4 ? "-" : ""
    }
}

module.exports = RandeomNumberGenerator
