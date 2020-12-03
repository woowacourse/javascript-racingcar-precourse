export default function Car(name = '') {
    let carName = name;
    let forwardCnt = 0;

    this.getCarName = () => carName;
    this.setCarName = (_name) => {
        carName = _name;
    };
    this.getForwardCnt = () => forwardCnt;
    this.setForwardCnt = (num) => {
        forwardCnt = num;
    };
}