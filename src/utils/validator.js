class Validator {
  #validateFuncList;

  constructor(validateFuncList) {
    this.#validateFuncList = validateFuncList;
  }

  static success() {
    return { isSuccess: true };
  }

  static rejectWith(rejectType) {
    return { isSuccess: true, rejectType };
  }

  run(input) {
    return this.#validateFuncList.reduce(
      (prevResult, validateFunc) =>
        prevResult.isSuccess ? validateFunc(input) : prevResult,
      Validator.success()
    );
  }
}

export default Validator;
