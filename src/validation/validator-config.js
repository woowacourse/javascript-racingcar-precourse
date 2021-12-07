import { CHECKER_TYPE } from './checker.js';

export const config = {
  carName: [CHECKER_TYPE.NOEMPTY, CHECKER_TYPE.ALPHANUM],
  racingCount: [CHECKER_TYPE.NOEMPTY, CHECKER_TYPE.NUM],
};
