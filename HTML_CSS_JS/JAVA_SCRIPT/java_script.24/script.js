// const arr = [1,2,3,4,'owibc']
// const poppedIten = arr.pop()
// console.log(poppedItem);

// Создайте массив animals с элементами "cat", "dog", "rabbit". Используйте метод pop(), чтобы удалить последний элемент массива.
const animals = ["cat", "dog", "rabbit"];
animals.pop();
console.log(animals);
console.log("============================================================");

// Создайте массив letters с элементами "A", "B", "C". Используйте метод pop(), чтобы получить и вывести последнюю букву.
const letters = ["A", "B", "C"];
const constLetter = letters.pop();
console.log(constLetter);
console.log("============================================================");

const arr = [1, 2, 3, "hello world", "how are u"];

const poppedItem = arr.pop();
console.log(arr);
console.log("============================================================");

const result = arr.filter((item, index, arr) => {
  return typeof item === "number";
});

console.log(result);
console.log("============================================================");

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 13, 235, 123, 6];
const filterNums = numArr.filter((item) => item > 5);
console.log(filterNums);
console.log("============================================================");

const arrObj = [
  {
    id: 1,
    title: "hello",
    description: "hello world",
    completed: false,
  },
  {
    id: 2,
    title: "hello",
    description: "hello world",
    completed: true,
  },
  {
    id: 3,
    title: "hello",
    description: "hello world",
    completed: false,
  },
  {
    id: 4,
    title: "hello",
    description: "hello world",
    completed: false,
  },
  {
    id: 5,
    title: "hello",
    description: "hello world",
    completed: true,
  },
  {
    id: 6,
    title: "hello",
    description: "hello world",
    completed: false,
  },
  {
    id: 7,
    title: "hello",
    description: "hello world",
    completed: true,
  },
  {
    id: 8,
    title: "hello",
    description: "hello world",
    completed: true,
  },
];

const filterObjs = arrObj.filter((item) => {
  return item.completed;
});

console.log(filterObjs);
console.log("============================================================");

// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только положительные числа из исходного массива.
const numbers = [-2, 5, -8, 10, -3, 7];
const positiveNumbers = numbers.filter(function (number) {
  return number > 0;
});

console.log(positiveNumbers);

console.log("============================================================");

// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа, которые делятся на 3 без остатка.
const numbersEl = [9, 12, 5, 18, 7, 24];
const filter = numbersEl.filter(function (number) {
  return number % 3 === 0;
});

console.log(filter);

console.log("============================================================");

const arrObj1 = [
  {
    id: 1,
    title: "hello",
    description: "hello world",
    completed: false,
  },
  {
    id: 2,
    title: "hello",
    description: "hello world",
    completed: true,
  },
  {
    id: 3,
    title: "hello",
    description: "hello world",
    completed: false,
  },
  {
    id: 4,
    title: "hello",
    description: "hello world",
    completed: false,
  },
  {
    id: 5,
    title: "hello",
    description: "hello world",
    completed: true,
  },
  {
    id: 6,
    title: "hello",
    description: "hello world",
    completed: false,
  },
  {
    id: 7,
    title: "hello",
    description: "hello world",
    completed: true,
  },
  {
    id: 8,
    title: "hello",
    description: "hello world",
    completed: true,
  },
];
const filteredArr = arrObj1.filter((item) => item.id > 4);
console.log(filteredArr);

console.log(filterObjs);

console.log(filterObjs);

console.log("============================================================");

const randomNumArr = [4, 2, 8, 10, 23, 5, 8];

const orderArr = randomNumArr.sort((a, b) => a - b);
console.log(orderArr);

console.log("============================================================");
const randomLetters = ["g", "b", "c", "a", "k", "l"];
console.log(randomLetters.sort());

console.log("============================================================");
// Используя метод sort(), отсортируйте числовой массив по убыванию.
let array = [4, 2, 5, 1, 3];
array.sort((a, b) => a - b);
console.log(array);

console.log();

console.log("============================================================");
// Используя метод sort(), отсортируйте массив объектов по значению определенного свойства.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];
people.sort((a, b) => a.age - b.age);

console.log(people);
console.log("============================================================");

// Используя метод filter(), создайте новый массив, содержащий только четные числа из исходного массива.

let array2 = [1, 2, 3, 4, 5];
let evenNumbers = array2.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);
console.log("============================================================");

// Создайте массив строк. Напишите функцию, используя метод sort, чтобы отсортировать строки по их длине от самой короткой к самой длинной.
const words = ["apple", "banana", "kiwi", "orange", "grape"];
words.sort((a, b) => a.length - b.length);
console.log(words);

console.log("============================================================");

// Создайте массив чисел. Напишите функцию, используя метод sort, чтобы отсортировать числа в порядке убывания.

const numbers2 = [10, 5, 8, 2, 7, 3];
const orderArr1 = numbers2.sort((a, b) => b - a);
console.log(orderArr1);

console.log("============================================================");

// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа в определенном диапазоне.

const numbers1 = [15, 7, 28, 3, 42, 10];
const minRange = 10;
const maxRange = 30;

function filterNumbers(arr, min, max) {
  return arr.filter((item) => item >= min && item <= max);
}

console.log(filterNumbers(numbers1, minRange, maxRange));
console.log("============================================================");

const randomNumArr1 = [6, 3, 4, 12, 45, 11, 8];

// const max = randomNumArr1.reduce(a,b => Math.max(a,b))
// console.log(max);

// const res = randomNumArr1.sort((a,b) => a - b)

// console.log(res);

for (let i = 0; i < randomNumArr1.length; i++) {
  console.log(randomNumArr[i]);

  for (let j = 0; j < randomNumArr1.length - i; j++) {
    console.log(randomNumArr1[j]);

    if (randomNumArr1[j] < randomNumArr1[j - 1]) {
      let temp = randomNumArr1[j];
      randomNumArr1[j] = randomNumArr1[j - 1];
      randomNumArr1[j - 1] = temp;
    }
  }
}

console.log(randomNumArr1);

console.log("============================================================");

const res = randomNumArr.shift();

const newData = randomNumArr.unshift("hello string", "hello world");
console.log(newData, randomNumArr);

// Создайте массив colors с элементами "red", "green", "blue". Используйте метод shift(), чтобы удалить первый элемент массива.
const colors = ["red", "green", "blue"];
const newEl4 = colors.shift("red");
console.log(newEl4, colors);

// Создайте массив fruits с элементами "banana", "orange". Используйте метод unshift(), чтобы добавить в начало массива новые фрукты: "apple", "grape".
const fruits = ["banana", "orange"];
const unshift = fruits.unshift("apple", "grape");
console.log(unshift, fruits);

const res1 = randomNumArr1.reduce((prevValue, currentValue) => {
  return prevValue + " " + currentValue;
});
console.log(typeof res1);

const randomStrArr = ["helloi", "world", "jjfffjd"];

const resString = randomStrArr.reduce((prevValue, currentValue) => {
  return prevValue + " " + currentValue;
});

console.log(resString);

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
const numberss = [5, 10, 15, 20];
const summa = numberss.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
});
console.log(summa);

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
// const wordss = ["Hello", " ", "world", "!"];
// const summa1 = summa1.reduce((prevValue,currentValue) =>  {
//   return prevValue + " " + currentValue;
// });
// console.log(summa1);

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы найти максимальное число в массиве.
const numbersss = [14, 5, 22, 8, 45, 11];
const maxi = numbersss.reduce((a, b) => Math.max(a, b));
console.log(maxi);

const obj = {
  name: "Yury",
  sayHi: function () {
    return `Hello, ${this.name}`;
  },
};

function fn(name, lastName) {
  (this.name = name), (this.lastName = lastName);
}

const newObj = new fn("Yury", "Arakelov");
console.log(newObj);

console.log(obj.sayHi());

const randomNumArr3 = [4, 2, 8, 10, 23, 5, 8];
const newNum = Math.pow(randomNumArr3[2], 2);
console.log(newNum);

const brandNewArr = Array.from(randomNumArr3, (item) => item > 10);
console.log(brandNewArr);

console.log(randomNumArr3);

// Используя методы filter() и reduce(), вычислите сумму всех четных чисел в числовом массиве.
let numericArray1 = [1, 2, 3, 4, 5];
let sumOf = numericArray1
    .filter(item => item % 2 === 0)
    .reduce((prevValue, currentValue) => prevValue + currentValue,0)
    console.log(sumOf)

// Используя метод from(), создайте новый массив из строки, содержащий только уникальные символы.
let str = "hello";
let simfol = Array.from(new Set(str));
console.log(simfol);

// Используя методы map(), sort() и reduce(), вычислите сумму квадратов всех положительных чисел в числовом массиве, отсортировать массив по возрастанию, последовательно используя filter() map() и reduce().
let numericArray = [-2, 3, -5, 1, 4];
let sum = numericArray
  .filter((item) => item > 0)
  .sort((a, b) => a - b)
  .map((item) => {
   return item * item})
  .reduce((prevValue, currentValue) => prevValue + currentValue, 0);

console.log(sum);

// У вас есть массив объектов, каждый объект представляет продукт с его ценой и количеством на складе. Необходимо выполнить следующие действия:
// Используя map(), создать новый массив, содержащий стоимость каждого продукта (цена умноженная на количество).
// Используя filter(), получить только те продукты, у которых количество на складе больше 0.
// Используя reduce(), найти общую стоимость всех продуктов на складе.
const products = [
  { name: "Product 1", price: 100, quantity: 2 },
  { name: "Product 2", price: 50, quantity: 0 },
  { name: "Product 3", price: 200, quantity: 1 },
  { name: "Product 4", price: 30, quantity: 5 },
];

const formattedArr2 = products
  .filter((item) => item.quantity > 0)
  .map((item) => item.price * item.quantity)
  .reduce((a, b) => a + b, 0); 

console.log(formattedArr2);
