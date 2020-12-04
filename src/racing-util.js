export function randomNumbers(racingCount, min = 0, max = 9) {
  return Array.from(
      {length: racingCount},
      () => Math.floor(Math.random() * (max - min + 1)) + min,
  );
}
