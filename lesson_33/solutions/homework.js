// С ниже приведенным объектом решить следующие задачи:
//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количество студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
  mathematics: {
    students: 200,
    teachers: 6
  },
  biology: {
    students: 120,
    teachers: 6
  },
  chemistry: {
    students: 100,
    teachers: 3
  },
  geography: {
    students: 60,
    teachers: 2
  },
}

// Решение
// #1
const getStringOfSubjects = (subjects) => {
  return Object.keys(subjects).join(', ')
}

console.log(getStringOfSubjects(subjects))

// #2
const getStudentsAndTeachersAmount = (subjects) => {
  const arrayOfStudentsAndTeachers = Object.values(subjects)
  return arrayOfStudentsAndTeachers.reduce((total, subject) => {
    const peopleCount = subject.students + subject.teachers
    return total + peopleCount
  }, 0)
}

console.log(getStudentsAndTeachersAmount(subjects))

// #3
const getAverageStudentsCount = (subjects) => {
  const subjectCount = Object.keys(subjects).length
  if (!subjectCount) return 0
  let studentsCount = 0
  for (const subject in subjects) {
    studentsCount += subjects[subject].students
  }
  return studentsCount / subjectCount
}

console.log(getAverageStudentsCount(subjects))

// #4
const getSubjectsArray = (subjects) => {
  return Object.entries(subjects).map(([key, value]) => {
    return { subject: key, ...value }
  })
}

console.log(getSubjectsArray(subjects))

// #5
const sortSubjectsByTeachers = (subjects) => {
  const subjectsArray = getSubjectsArray(subjects)
  return subjectsArray.sort((a, b) => {
    return b.teachers - a.teachers
  })
}

console.log(sortSubjectsByTeachers(subjects))