// class Car{
//     constructor(model, weight, amountFuelUsed, distanceTreveled){
//         this.model = model;
//         this.weight = weight;
//         this.amountFuelUsed = amountFuelUsed;
//         this.distanceTreveled = distanceTreveled;
//     }
//     getModel(){
//         console.log(this.model)
//     }
//     getFuelUsed(){
//         console.log((this.amountFuelUsed / this.distanceTreveled) * 100);
//     }
// }
// let auto = new Car('wv', 2000, 50, 500);

// auto.getModel()
// auto.getFuelUsed()

// task 2
class Car {
    constructor(model, weight, amountFuelUsed, distanceTreveled) {
        this._model = model;
        this._weight = weight;
        this._amountFuelUsed = amountFuelUsed;
        this._distanceTreveled = distanceTreveled;
    }
    get model() { return this._model };
    get weight() { return this._weight };
    get amountFuelUsed() { return this._amountFuelUsed };
    get distanceTreveled() { return this._distanceTreveled }

    set amountFuelUsed(amountFuelUsed) { this._amountFuelUsed = amountFuelUsed }
    set distanceTreveled(distanceTreveled) { this._distanceTreveled = distanceTreveled }
}
let auto = new Car('wv', 2000, 50, 500);

console.log(auto.model);
console.log(auto.weight);
console.log(auto.amountFuelUsed);
console.log(auto.distanceTreveled);
auto.amountFuelUsed = '77777777777777';
console.log(auto.amountFuelUsed);
auto.distanceTreveled = 'sdfdsf';
console.log(auto.distanceTreveled);

// task 4
class CustomString {
    constructor(str, str2) {
        this._str = str;
        this._str2 = str2;
    }
    getReverse() {
        console.log(this._str.split('').reverse().join(''))
    }
    capFirstWord() {
        console.log(this._str[0].toUpperCase() + this._str.slice(1))
    }
    capAllWords() {
        console.log(this._str2.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' '))
    }
}
let customString = new CustomString('hello', "hello world")

customString.getReverse();
customString.capFirstWord();
customString.capAllWords();

// task5

// class Rast{
//     constructor(name, description, typ, )
// }




