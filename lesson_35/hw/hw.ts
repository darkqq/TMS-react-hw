// С ниже приведенным массивом решить следующие задачи:
// 1. Все функции и данные должны быть протипизированы
// 2. Создать строку из имен пользователей через запятую
// 3. Посчитать общее количнство машин у пользователей
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую

type User = {
    name: string,
    phone: string,
    email: string,
    animals?: Array<string>,
    cars?: Array<string>,
    hasChildren: boolean,
    hasEducation: boolean
}

const users: Array<User> = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

//надо ли типизировать параметры методов массива?

const extractUsernames = (users: Array<User>) => users
    .map((user: User) => user.name)
    .join(',');

const getCarsCountTotal = (users: Array<User>) => users
    .filter((user: User) => user.cars)
    .map((user: User) => user.cars.length)
    .reduce(((previousValue: number, currentValue: number) => previousValue + currentValue), 0);

const getEducatedUsers = (users: Array<User>) => users
    .filter((user: User) => user.hasEducation);

const getUsersWithAnimals = (users: Array<User>) => users
    .filter((user: User) => user.animals);

const extractCars = (users: Array<User>) => users
    .filter((user: User) => user.cars)
    .flatMap((user: User) => user.cars)
