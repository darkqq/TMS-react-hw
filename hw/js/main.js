const users = [
    {
        id: 1,
        username: "Michael Lawson",
        age: 22,
    },
    {
        id: 2,
        username: "Tom Spot",
        age: 32,
    },
    {
        id: 3,
        username: "Kate Ford",
        age: 18,
    }
];


function validateCollection(collection, fields) {
    let requiredFields = [...fields];

    if (!isCollection(collection)) {
        throw new Error('Argument in not collection');
    }

    if (checkNonNull(collection)) {
        throw new Error('Collection is null');
    }

    for (let collectionElement of collection) {
        for (let requiredField of requiredFields) {
            if (!checkNonNull(requiredField) ||
                !checkNonNull(collectionElement) ||
                !checkField(collectionElement, requiredField)) {
                throw new Error(`Item ${collectionElement} does not contain key ${requiredField}`);
            }
        }
    }

    return true;
}

function getAverageAge(users) {
    validateCollection(users, 'age');

    if (users.length === 0) {
        return 0;
    }

    return users.map(user => user.age).reduce((previousValue, currentValue) => {
        return parseInt(previousValue) + parseInt(currentValue);
    }, 0) / users.length;

}

function sortUsersByAge(users) {
    validateCollection(users, 'age');
    users.sort((e, o) => {
        return e.age - o.age;
    });
}

function isAgeExist(age, users) {
    validateCollection(users, 'age');
    return !!users.find(user => user.age === age);
}

const string = "Welcome to this Javascript Guide!"

function reverseString(string) {
    if (!checkNonNull(string)) {
        throw new Error('String is null');
    }

    return string.split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}


const matrix = [[1, 2], [3, 2], [5, 6, 2], [4]];

function getSumNonFlat(arr) {
    isCollection(arr);
    //todo
    return arr.toString()
        .split(',')
        .map(value => parseInt(value))
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

function checkType(currentObject, targetType) {
    return typeof currentObject === targetType;
}

function checkField(object, field) {
    return !!object[field];
}

function checkNonNull(item) {
    return !!item;
}

function isCollection(collection) {
    return typeof collection[Symbol.iterator] === 'function';
}