"use strict";
class MyShape {
    static #count = 0;
    static _color = 'no-color';
    static num = 99;
    static print_count = () => console.log(MyShape.#count);
    static print_color() { console.log(MyShape._color); }
    static print_num = () => console.log(MyShape.num);
}
console.log(`#count = ${MyShape.#count}`);
console.log(MyShape.num);
MyShape.num = 1000;
MyShape.print_count();
MyShape.print_color();
MyShape.print_num();
//# sourceMappingURL=demo22.oop.static.js.map