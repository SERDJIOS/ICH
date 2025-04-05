// // 1. Вывести числа от 1 до 10 с помощью цикла.
//   } else {
// //     console.log("Число меньше или равно 100.");
// //   }
  
// //   // 24. Вывести только нечетные числа от 1 до 20.
  
  
// //   25.Вывести строку в обратном порядке.// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
  
//   // 2. Запросить у пользователя его имя и вывести его 5 раз с помощью цикла.
//   const name = prompt("Введите ваше имя:");
//   for (let i = 0; i < 5; i++) {
//     console.log(name);
//   }
  
//   // 3. Вывести только четные числа от 1 до 20.
//   for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
//   }
  
//   // 4. Запросить у пользователя число и вывести все числа от 1 до этого числа.
//   const num = parseInt(prompt("Введите число:"));
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
  
//   // 5. Сумма чисел от 1 до 10.
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log("Сумма чисел от 1 до 10:", sum);
  
//   // 6. Вывести числа от 10 до 1 с помощью цикла.
//   for (let i = 10; i >= 1; i--) {
//     console.log(i);
//   }
  
//   // 7. Запросить два числа и вывести все числа между ними.
//   const start = parseInt(prompt("Введите первое число:"));
//   const end = parseInt(prompt("Введите второе число:"));
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
  
//   // 8. Проверка, положительное или отрицательное число введено пользователем.
//   const number = parseInt(prompt("Введите число:"));
//   if (number > 0) {
//     console.log("Число положительное.");
//   } else if (number < 0) {
//     console.log("Число отрицательное.");
//   } else {
//     console.log("Число равно нулю.");
//   }
  
//   // 9. Вывести наибольшее из двух введенных чисел.
//   const num1 = parseInt(prompt("Введите первое число:"));
//   const num2 = parseInt(prompt("Введите второе число:"));
//   console.log("Наибольшее число:", Math.max(num1, num2));
  
//   // 10. Вывести количество символов в строке.
//   const str = prompt("Введите строку:");
//   console.log("Количество символов:", str.length);
  
//   // 11. Вывести все буквы строки с новой строки.
//   const text = prompt("Введите текст:");
//   for (let char of text) {
//     console.log(char);
//   }
  
//   // 12. Сообщение в зависимости от возраста.
//   const age = parseInt(prompt("Введите ваш возраст:"));
//   if (age >= 18) {
//     console.log("Вам больше 18 лет.");
//   } else {
//     console.log("Вам меньше 18 лет.");
//   }
  
//   // 13. Вывести "Привет" 10 раз.
//   for (let i = 0; i < 10; i++) {
//     console.log("Привет");
//   }
  
//   // 14. Таблица умножения для введенного числа.
//   const numberToMultiply = parseInt(prompt("Введите число:"));
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${numberToMultiply} * ${i} = ${numberToMultiply * i}`);
//   }
  
//   // 15. Сумма чисел от 1 до введенного числа.
//   const endNumber = parseInt(prompt("Введите число:"));
//   let total = 0;
//   for (let i = 1; i <= endNumber; i++) {
//     total += i;
//   }
//   console.log("Сумма чисел:", total);
  
//   // 16. Проверка четное или нечетное число.
//   const checkNumber = parseInt(prompt("Введите число:"));
//   if (checkNumber % 2 === 0) {
//     console.log("Число четное.");
//   } else {
//     console.log("Число нечетное.");
//   }
  
//   // 17. Вывести числа от 1 до 50, которые делятся на 5 без остатка.
//   for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
  
//   // 18. Найти наибольшее из трех чисел.
//   const a = parseInt(prompt("Введите первое число:"));
//   const b = parseInt(prompt("Введите второе число:"));
//   const c = parseInt(prompt("Введите третье число:"));
//   console.log("Наибольшее число:", Math.max(a, b, c));
  
//   // 19. Сообщение с именем и возрастом.
//   const userName = prompt("Введите ваше имя:");
//   const userAge = parseInt(prompt("Введите ваш возраст:"));
//   console.log(`Привет, ${userName}, тебе ${userAge} лет.`);
  
//   20. Вывести числа от 1 до 100, пропуская каждое третье число.
//   for (let i = 1; i <= 25; i++) {
//     if (i % 3 !== 0) {
//       console.log(i);
//     }
//   }
  
//   // 21. Вывести все числа до введенного, увеличивая на 2.
//   const limit = parseInt(prompt("Введите число:"));
//   for (let i = 1; i <= limit; i += 2) {
//     console.log(i);
//   }
  
//   // 22. Вывести все элементы массива.
//   const array = [1, 2, 3, 4, 5];
//   for (let item of array) {
//     console.log(item);
//   }
  
//   // 23. Сообщение, если число больше 100.
//   const userNumber = parseInt(prompt("Введите число:"));
//   if (userNumber > 100) {
//     console.log("Число больше 100.");
// 


// massivi

const arr = ['hello', 27, true, {myName: 'Serjio'}];
console.log(arr);
const objArr = [
    {
        id: 0,
        title: 'tetle',
        description: 'description'
    },
    {
        id: 1,
        title: 'tetle',
        description: 'description'
    },
    {
        id: 2,
        title: 'tetle',
        description: 'description'
    },
]

// Способы объявления массива
// 1. С помощью литеральной нотации a.k.a руками
const arrResult = [1, 2, 3, 4, 5]
const res = []
// 2. С помощью оператора new + метода Array()
const newArr = new Array(10).fill('hello')
console.log(newArr);

const str = 'hello'
const obj = {
    myName: 'Serjio',
    myAge: 27,
}
// console.log ([...str]. map(item => item.toUpperCase()).join(''))
console.log(str.split('').reverse().join(''))
const fruitsArr = ['apple', 'kiwi','mango','orange']
const mid = Math.floor(fruitsArr.length / 2)
// seredina massiva
console.log(fruitsArr[mid]);
// konez massiva
console.log(fruitsArr[fruitsArr.length - 1])

const colors = ['black', 'yellow','blue']
console.log(colors)


const war = ['hey', 'bro', 'kakdela?']
let revarr = war.reverse();
console.log(revarr);