"use strict";
const printObj = (obj) => {
    if (typeof obj === 'string')
        console.log(obj.toUpperCase());
    else
        console.log(obj);
};
printObj(100);
printObj('Hello world');
const getName = (name) => {
    if (Array.isArray(name))
        console.log(`Name is array string: ${name}`);
    else
        console.log(`Name: ${name}`);
};
getName(['hello', 'World', 'Petter', 'Marry']);
getName('NDHuy');
//# sourceMappingURL=demo11.syntax.union_types.js.map