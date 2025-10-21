'use strict';

const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log('Випадкове число від 10 до 20:', random(10, 20));
console.log('Випадкове число від 0 до 100:', random(100));
console.log('Випадкове число від -10 до 10:', random(-10, 10));