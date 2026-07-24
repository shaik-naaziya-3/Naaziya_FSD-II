class Box<T> {

    data: T;

    constructor(data: T) {
        this.data = data;
    }

    display(): void {
        console.log("Value:", this.data);
    }

}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("Naaziya");

numberBox.display();
stringBox.display();