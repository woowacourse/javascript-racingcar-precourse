export const randomMove = () => {
  const random = parseInt(Math.random() * 10);
  if (random <= 3) {
    return 0;
  }

  if (4 <= random) {
    return 1;
  }
};
