"use strict";
const show_error = (message) => {
    throw new Error(message);
};
const calculate = () => {
    try {
        show_error('Something is failed');
    }
    catch (e) {
        console.error(e);
    }
};
calculate();
//# sourceMappingURL=demo07.syntax.never_types.js.map