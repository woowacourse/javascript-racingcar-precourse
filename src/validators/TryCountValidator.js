export default {
  checkTryCountLessThanZero(submitTryCount) {
    if (submitTryCount <= 0) {
      alert('시도 횟수는 0보다 커야합니다.');
      return false;
    }
    return true;
  },
};
