export class CAR {
    constructor(name) {
        this.name = name;
        this.forward = 0;
        this.gameProgress = '';
    };
    GET_NAME() {
        return this.name;
    };

    PLUS_FORWARD() {
        this.forward++;
        this.gameProgress += '-'
        //console.log(this.name);
        console.log(this.name + " : " + this.forward);
    };

    PRINT_FORWARD(){
        return this.showForward
    }
}
