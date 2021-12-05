export default {
  checkTryCountLessThanZero(submitTryCount) {
    return !(submitTryCount <= 0);
  },
  checkExistTryCount(submitTryCount) {
    return !!submitTryCount;
  },
};
