export default function Car(name) {
  this.name = name;
  this.distance = 0;

  this.move = () => {
    this.distance += 1;
  };
}
