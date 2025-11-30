'use strict';

const store = (value) => {
    return () => {
        return value;
    };
};


const read = store(5);
const value = read();

console.log(value);