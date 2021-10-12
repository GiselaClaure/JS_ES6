//7.1

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sum = exams.reduce((sum, exam) => sum + exam.score, 0);
console.log(sum)

//7.2

let sumApproved = exams.reduce((sum, exam) => {
    return exam.score >= 5 ? sum += exam.score : sum += 0
}, 0);
console.log(sumApproved)

//7.3

let average = sum / exams.length
console.log(average)