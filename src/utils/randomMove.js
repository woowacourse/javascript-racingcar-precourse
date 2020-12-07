export const randomMove = () => {
  const random = Math.floor(Math.random() * 10);
  if (random <= 3) {
    return 0;
  }

  return 1;
};
