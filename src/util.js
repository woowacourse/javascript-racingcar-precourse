class Util {
  getRandomNumbers(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  splitAndTrim(stringInput, delimiter = ',') {
    return stringInput.split(delimiter)
        .filter(part => part.trim().length !== 0)
        .map(part => part.trim());
  }

  prefixSumReducer(accumulator, currentValue, i) {
    const previousValue = accumulator[i-1];

    if (previousValue) {
      accumulator.push(previousValue + currentValue);
    } else {
      accumulator.push(currentValue);
    }

    return accumulator;
  }

  isOutOfLength(arrayInput, max = 5) {
    return arrayInput.some(part => part.length > max);
  }

  isDuplicate(arrayInput) {
    return arrayInput.some(part =>
      arrayInput.indexOf(part) !== arrayInput.lastIndexOf(part),
    );
  }

  isEmpty(arrayInput) {
    return arrayInput.length === 0;
  }

  showContainer(id) {
    document.getElementById(id).hidden = false;
  }
}

const util = new Util();

export const {
  getRandomNumbers,
  splitAndTrim,
  prefixSumReducer,
  isOutOfLength, isDuplicate, isEmpty,
  showContainer,
} = util;
