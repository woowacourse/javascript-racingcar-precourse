class Car{
  constructor(name){
    this.name = name;
    this.count = 0;
  }
  plusCount() {
    this.count += 1;
  }
  getCount() {
    return this.count;
  }
}
export default Car;