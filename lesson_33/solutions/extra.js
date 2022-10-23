// #1
// Поменять буквы в обратном порядке
// для каждого слова
// "Welcome to this Javascript Guide!" ->
// emocleW ot siht tpircsavaJ !ediuG

const string = "Welcome to this Javascript Guide!"

// #2
// Есть массив из нескольких массивов с числами
// Написать функцию, которая будет возвращать сумму всех чисел во всех массивах
// Пример сумма [[1,2], [3,2], [5, 6, 2], [4]] должна вернуть 25
const matrix = [[1,2], [3,2], [5, 6, 2], [4]]


// Решение
// #1
const reverseEveryWordString = (string, separator) => {
  return string.split(" ").reverse().join(separator)
}

console.log(reverseEveryWordString(string, '.'))

// #2
const getNumbersSumNestedArray = (arr) => {
  const flatArray = arr.flat(Infinity)
  return flatArray.reduce((sum, number) => sum + number)
}

console.log(getNumbersSumNestedArray(matrix))
