export default function Car(name) {
  this.name = name;

  this.count = 0;
  this.plusCount = () => {
    this.count++;
  };
  this.getCount = () => {
    return this.count;
  };
}
