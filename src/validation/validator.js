import { config } from './validator-config.js';
import { checkers } from './checker.js';

export const validator = {
  checkers: checkers,
  config: config,
  validate: function (key, value) {
    // config에 key 프로퍼티가 없으면 유효성을 검사하지 않는다.
    if (!this.config.hasOwnProperty(key)) {
      return;
    }

    const types = this.config[key];

    for (let type of types) {
      const checker = this.checkers[type];

      if (!checker.validate(value)) {
        return checker.message;
      }
    }
  },
};
