export function randomNumbers(racingCount, min = 0, max = 9) {
  return Array.from(
      {length: racingCount},
      () => Math.floor(Math.random() * (max - min + 1)) + min,
  );
}

export function isForward(randomNumber) {
  if (randomNumber >= 4) return true;

  return false;
}
