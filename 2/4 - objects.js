'use strict';

function fn() {
    const constObj = { name: 'Марко' };

    let letObj = { name: 'Андрый' };

    console.log('Початкові значення:');
    console.dir({ constObj, letObj });

    constObj.name = 'Іван';
    letObj.name = 'Дмиро';

    console.log('Після зміни полів:');
    console.dir({ constObj, letObj });

    letObj = { name: 'Павло' };

    console.log('Після переприсвоєння letObj:');
    console.dir({ constObj, letObj });
}

fn();

const createUser = (name, city) => ({ name, city });

const user = createUser('Marcus Aurelius', 'Roma');
console.log('Створений користувач:', user);