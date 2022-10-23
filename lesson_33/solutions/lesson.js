// С ниже приведенным массивом пользователей решить следующие задачи:
// 1. Получить средний возраст пользователей.
// 2. Отсортировать массив по возрасту от большего к меньшему.
// 3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соотвествуещего возраста.
//    Например, есть ли пользователь, которому 22 года? Ответ должен быть: true
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
]

// Решение
// #1
const getAverageAge = (users) => {
  return users.reduce((sumOfAges, user) => {
    return sumOfAges + user.age / users.length
  }, 0)
}

console.log(getAverageAge(users))

// #2
const sortUsersByAge = (users) => users.sort((a,b) => b.age - a.age)

console.log(sortUsersByAge(users))

// #3
const checkUserByAge = (users, age) => users.some((user) => user.age === age)

console.log(checkUserByAge(users, 18))