'use strict';

//скалярний тип

const inc = (n) => {
    return n + 1;
}

let a = 5;
let b = inc(a);

console.log('Скалярний тип:');
console.dir({a, b}); // {a: 5, b: 6}

//посилальний тип

const incRef = (num) =>{
    num.n++;
}

const obj = {n: 5};
incRef(obj);

console.log('Посилальний тип:');
console.dir(obj);