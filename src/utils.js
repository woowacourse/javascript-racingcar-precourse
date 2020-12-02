function Car(name, count) {
  this.name = name;
  this.count = count;
}

export const isCarForward = () => {
  const crit = Math.floor(Math.random() * 10);
  return crit >= 4 ? true : false;
};