// function filterStrings(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'string') {
//             console.log(arr[i])
//             result.push(arr[i])
            
//     } 
// }
// }
// const randomArr = [1,2,3,'hello', 'world', true, false]

// console.log(filterStrings(randomArr))
// console.log(typeof 'hello' === "string")

// const numbers = [];
//  function numbersArr(numbers) {
//     for (let i = 1; i <= 10; i++){
//         numbers.push(i)
//  }

// }
// numbersArr(numbers)
// console.log(numbers)

// const numbersq = [1,33,11,27];
// for (let i = 0; i < numbersq.length; i++){
//     console.log(numbersq[i])
// }


// const nummer = [11,27,204,132]
// function nummerArr(nummer) {
//     for(let i = nummer.length -1; i >= 0; i--){
//         console.log(nummer[i])
//     }
    
// }
// nummerArr(nummer)

// Фильтрация массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы создать новый массив, который содержит только числа из исходного массива, которые больше 5.
const bolshe =[1,2,4,5,9,22,11,56,77];
for(let i = 0; i < bolshe.length; i++){
    if(bolshe[i] > 5){
        console.log(bolshe[i])
    }
}
// У вас есть массив студентов с их оценками в виде объектов. Напишите программу, которая проходит по каждому студенту, вычисляет среднюю оценку и создает новый объект, содержащий имена студентов и их средние оценки.
// Исходный массив студентов с оценками
const students = [
{ name: 'Анна', grades: [85, 90, 92] },
{ name: 'Иван', grades: [88, 75, 96] },
{ name: 'Мария', grades: [78, 82, 94] },
];

// function calculateAverage(grades){
//     let result = 0;
//     for (let i = 0; i < grades.length; i++){
//         result = result + grades[i]
//     }
//     return Math.max (result / grades.length)
        
// }
// function createStudent(student){
//     return {
//         name: student.name,
//         averageGrade: calculateAverage(student.grades)
//     }
// }
// const newStudens = []
// for(let i = 0; i < students.length; i++){
//     const studentAverage = createStudent(students[i])
//     newStudens.push(studentAverage)
// }
// console.log(newStudens);

// Напишите программу, которая проходит по каждому студенту и находит его максимальную оценку, создавая новый объект, содержащий имя студента и его максимальную оценку.
// function maxGrade(student){
//     const maxGrades = Math.max(student.grades);
//     return{name: student.name, maxGrade: maxGrades};
// }
// const studentMaxGrade = students.map(maxGrade);
// console.log(studentMaxGrade);
function max(grade){
    let res = 0;
    for (let i = 0; i < grade.length; i++){
        if(grade[i] > res){
            res = grade[i]
        }
      
    }

        
}
function createStudent(student){
    return {
        name: student.name,
        averageGrade: max (student.grades)
        
    }
}
const newStudens = []
for(let i = 0; i < students.length; i++){
    const studentMax = createStudent(students[i])
    newStudens.push(studentMax)
   
}
console.log(newStudens);