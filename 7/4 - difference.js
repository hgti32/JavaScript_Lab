'use strict';

const difference = (array1, array2) => {
    return array1.filter(item => !array2.includes(item));
};

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result1 = difference(array1, array2);

console.log(result1);
// Результат: [7, -2, 5]


const cities1 = ['Beijing', 'Kiev'];
const cities2 = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(cities1, cities2);

console.log(result2);
// Результат: ['Beijing']