'use strict';

const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let max = m[0][0];
for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
        if (m[i][j] > max) {
            max = m[i][j];
        }
    }
}
console.log(max);