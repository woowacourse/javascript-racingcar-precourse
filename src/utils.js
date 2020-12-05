export function Car(name) {
  this.name = name;
  this.location = 0;
  this.setLocation = (nextLocation) => {
    this.location = nextLocation;
  };
}
export const carInput = document.getElementById("car-names-input");
export const iteratorInput = document.getElementById("racing-count-input");

export const iterateBy = ({ iterator, callbacks }) => {
  for (let i = 0; i < iterator; i++) {
    callbacks.forEach((callback) => callback(i));
  }
};
