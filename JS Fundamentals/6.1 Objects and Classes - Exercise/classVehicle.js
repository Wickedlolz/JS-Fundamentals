class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = { engine: parts.engine, power: parts.power, quality: parts.engine * parts.power };
        this.fuel = fuel;
    }


    drive(lossFuel) {
        this.fuel -= lossFuel;
    }
}

let parts = { engine: 6, power: 100 };
let vehacle = new Vehicle('a', 'b', parts, 200);
vehacle.drive(100);
console.log(vehacle.fuel);
console.log(vehacle.parts.quality);