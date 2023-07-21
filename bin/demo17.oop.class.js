"use strict";
class Person {
    name;
}
const person = new Person();
console.log(person);
person.name = 'Henry';
console.log(person);
class School {
    name = 'RMIT';
    constructor(name) {
        if (name !== undefined)
            this.name = name;
    }
    err() {
        console.log('Cannot access readonly property Name');
    }
}
const sc_1 = new School();
console.log(sc_1);
const sc_2 = new School('MIT');
console.log(sc_2);
class Point2D {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
const p_1 = new Point2D();
console.log(p_1);
const p_2 = new Point2D(3, 4);
console.log(p_2);
//# sourceMappingURL=demo17.oop.class.js.map