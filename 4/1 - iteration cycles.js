'use strict';

//Цикл for
function sum_a(...args) {
    let result = 0;
    for (let i = 0; i <= args.length; i++) {
        result += i;
    }
    return result;
}
console.log("a ===", sum_a(1, 2, 3)); // a === 6


//Цикл for of
function sum_b(...args) {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
}
console.log("b ===", sum_b(0)); // b === 0


//Цикл while
function sum_c(...args) {
    let result = 0;
    let i = 0;

    while (i < args.length) {
        result += args[i];
        i++;
    }
    return result;
}
console.log("c ===", sum_c()); // c === 0


//Цикл do while
function sum_d(...args) {
    let result = 0;
    let i = 0;

    do {
        result += args[i];
        i++;
    } while (i < args.length);
    return result;
}
console.log("d ===", sum_d(1, -1, 1)); // d === 1

//Цикл Array.prototype.reduce()
const sum_e = (...args) => args.reduce((acc, current) => acc + current, 0);
console.log("e ===", sum_e(10, -1, -1, -1)); //e === 7