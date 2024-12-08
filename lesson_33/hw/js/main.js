// С ниже приведенным объектом решить следующие задачи:
//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количество студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов //Надо ли было добавлять название предмета?
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему //Тот же вопрос что и в 4

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

/* result */

const getSubjectNames = (subjects) => getProperties(subjects).join(',');

const getTotalPeopleCount = (subjects) => getProperties(subjects)
    .map(subjectKey => subjects[subjectKey].students + subjects[subjectKey].teachers)
    .reduce((prev, curr) => prev + curr, 0);

const getAverageStudentsCount = (subjects) => Math.floor(getProperties(subjects)
    .map(key => subjects[key].students)
    .reduce(((previousValue, currentValue) => previousValue + currentValue), 0) / getProperties(subjects).length);

const mapPropertiesToArray = (subjects) => getProperties(subjects)
    .map(key => subjects[key]);

const mapPropertiesToArraySorted = (subjects) => mapPropertiesToArray(subjects)
    .sort((o, e) => o.teachers - e.teachers);


/* util */
const getProperties = (obj) => Object.getOwnPropertyNames(obj);

