export default {
  checkTryCountLessThanZero: submitTryCount => !(submitTryCount <= 0),
  checkExistTryCount: submitTryCount => !!submitTryCount,
};
