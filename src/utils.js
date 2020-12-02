function Car(name, count) {
  this.name = name;
  this.count = count;
}

export const isCarForward = () => {
  const crit = Math.floor(Math.random() * 10);
  return crit >= 4 ? true : false;
};

export const inputStringToArray = (inputString) => {
  const inputArray = inputString.split(",");
  const carArray = [];

  // Initialize the object
  for (let i = 0; i < inputArray.length; i++) {
    carArray.push(new Car(inputArray[i], 0));
  }

  return carArray;
};