'use strict';

const iterate = (object, callback) => {
    Object.keys(object).forEach(key => {
        const value = object[key];
        callback(key, value, object);
    });
};

const obj = { a: 1, b: 2, c: 3 };

iterate(obj, (key, value) => {
    console.log({ key, value });
});