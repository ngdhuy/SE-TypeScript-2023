"use strict";
class Circle {
    _name = 'no-name';
    constructor(name) {
        if (name !== undefined)
            this._name = name;
    }
    draw(size) {
        console.log(`Circle is drawing with the name ${this._name} and size ${size}`);
    }
}
const cir = new Circle('The Ring');
cir.draw(100);
//# sourceMappingURL=demo19.oop.heritage.js.map