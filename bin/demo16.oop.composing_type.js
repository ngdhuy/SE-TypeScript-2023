"use strict";
let first_flag = true;
console.log(`Flag: ${first_flag} - type: ${typeof first_flag}`);
first_flag = false;
console.log(`Flag: ${first_flag} - type: ${typeof first_flag}`);
let first_opt = 2;
console.log(`Option: ${first_opt} - type: ${typeof first_opt}`);
const getLength = (obj) => obj.length;
console.log(getLength('Hello world'));
console.log(getLength(['hello world', 'Petter', 'Mary and Tom']));
const arr_num = [1, 2, 3];
console.log(arr_num);
const logMyPoint = (p) => console.log(p);
const point = { x: 100, y: 200 };
console.log(point);
class SuperPoint {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newPoint = new SuperPoint(45, 88);
logMyPoint(newPoint);
//# sourceMappingURL=demo16.oop.composing_type.js.map