// HOME WORK 
// Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.
const items = [
  { name: 'Item 1', price: 30 },
  { name: 'Item 2', price: 50 },
  { name: 'Item 3', price: 70 },
  { name: 'Item 4', price: 20 },
];


function hasExpensiveItem(arr) {
  return arr.some(item => item.price > 50);
}

const result = hasExpensiveItem(items);
console.log(result); 

console.log("====================");


// Вывести элементы массива
// Напишите функцию, которая принимает массив чисел и с помощью forEach выводит каждый элемент в консоль.

const array = [1, 2, 3, 4, 5, 6, 7];
function printArray(arr) {
  arr.forEach((value) => {
    console.log(value);
  });
}
printArray(array);

console.log("====================");

// Тут база чисто, ничего сложного, просто чтоб отработать синтаксис. Кто не отработает - будут проблемы с пониманием в будущем
// Сумма элементов массива
// Напишите функцию, которая принимает массив чисел и с помощью forEach подсчитывает их сумму.
const array2 = [19, 32, 44, 55, 77];
let sum = 0;
array2.forEach((value) => {
  sum += value;
});
console.log(sum);

console.log("========================");

// Вывести индексы элементов
// Используя forEach, напишите функцию, которая выводит индекс каждого элемента массива.

function indexArray(array2) {
  array2.forEach((value, index) => {
    console.log(`value ${value} / index: ${index}`);
  });
}
indexArray(array2);

console.log("============================");

// Конкатенация строк
// Напишите функцию, которая принимает массив строк и с помощью forEach объединяет все строки в одну.
const str = ["hi", "paradeis", "geld"];
function beideStr(arr) {
  let beideStr = "";
  arr.forEach((value) => {
    beideStr += value + " ";
  });
  console.log(beideStr);
}
beideStr(str);

// Преобразование массива в HTML список
// Используя forEach, преобразуйте массив строк в список <ul> с элементами <li>.
function newUl(arr) {
  const ul = document.createElement("ul");
  arr.forEach((item) => {
    const li = document.createElement("li");
    ul.append(li);
    li.innerText = item;
  });
  document.body.append(ul);
}
newUl(str);

// Проверка на четность
// Напишите функцию, которая принимает массив чисел и с помощью forEach выводит сообщение, является ли каждое число четным или нечетным.

const arrayEl = [1, 2, 3, 4, 5, 6, 7];
function trueFalse(arr) {
  arr.forEach((value) => {value % 2 == 0 ? console.log(`эти числа четные:${value}`): console.log(`эти числа нечетные:${value}`);
  });
}
trueFalse(arrayEl);

console.log("====================================================");

// Модификация массива объектов
// Напишите функцию, которая принимает массив объектов с ключом name и с помощью forEach добавляет каждому объекту новое свойство isActive: true.
const peopls1 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];
  
  peopls1.forEach(person => {
    person.isActive = true;
  });
  
  console.log(peopls1);
  
  console.log("====================================================");

// Умножение каждого элемента на 2
// Напишите функцию, которая принимает массив чисел и с помощью forEach умножает каждый элемент на 2 (модифицирует исходный массив).


arrayEl.forEach((value, index, arr) => arr[index] = value * 2);
console.log(arrayEl);


console.log("====================================================");
// Копирование значений
// Используя forEach, скопируйте все элементы из одного массива в другой.
const copdArray = [];
arrayEl.forEach(value => copdArray.push(value));
console.log(copdArray);

console.log("====================================================");
// Поиск максимального числа
// Напишите функцию, которая принимает массив чисел и с помощью forEach находит максимальное число в массиве.
const arrayEl1 = [1, 2, 3, 4, 5, 6, 7];
const suchMax = (numbers) => {
let max = numbers[0]
numbers.forEach((num) => {
  
  if (num > max) {
    max = num; 
  }
});

return max;
};
console.log(suchMax(arrayEl1));



// Создайте HTML-страницу с кнопкой "Кликни меня" и блоком, в котором будет отображаться количество кликов.

// Используя JavaScript, при клике на кнопку увеличивайте счетчик кликов и изменяйте цвет фона блока. Если количество кликов делится на 5 без остатка, цвет фона должен изменяться на случайный цвет.

// При достижении 10 кликов выведите сообщение под блоком с количеством кликов: "Поздравляем! Вы достигли 10 кликов!".

// Задание 1
// Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод map, чтобы создать новый массив объектов, в которых добавлено новое свойство "статус" со значением "взрослый" для тех, кто старше 18 лет, и "ребенок" для остальных.

const people = [
  { name: "Alice", age: 25 },

  { name: "Bob", age: 30 },

  { name: "Charlie", age: 15 },
];
const newPeople = people.map((item) => {
  if (item.age > 18) {
    item.status = "взрослый";
    return item;
  } else {
    item.status = "ребенок";
    return item;
  }
});
console.log(newPeople);

console.log("======================");

// Задание 2
// Создайте массив объектов с полями "название" и "рейтинг". Используйте метод forEach, чтобы вывести в консоль названия объектов, у которых рейтинг больше 4.
const movies = [
  { title: "Inception", rating: 4.9 },

  { title: "The Dark Knight", rating: 5.0 },

  { title: "Interstellar", rating: 4.8 },

  { title: "The Matrix", rating: 4.5 },
];
movies.forEach((value) => {
  if (value.rating > 4) {
    console.log(value.title);
  }
});

console.log("=====================");

// Умножение каждого элемента на 2
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, где каждое число умножено на 2.

const array1 = [1, 2, 3, 4, 5, 6, 7];
function multiplayArray(arr) {
  const newArray = arr.map((item) => {
    console.log(item * item);
    return item * 2;
  });
  return newArray;
}

console.log(multiplayArray(array1));

console.log("===============");

// Преобразование чисел в строки
// Используя map, преобразуйте массив чисел в массив строк.
const newArray = array1.map(String);
const newArray2 = array2.map((item) => String(item));
const newArray3 = array1.map((item) => (item = item + ""));
array1.length = 20;
console.log(array1);

console.log(newArray);
console.log(newArray2);
console.log(newArray3);

console.log("=========================");

// Преобразование объектов
// Напишите функцию, которая принимает массив объектов с ключом name и возвращает массив строк, состоящих из этих имен.

const arrayObj = [
  {
    username: "Serjio",
  },
  {
    username: "Kreal",
  },
  {
    username: "Muhammad",
  },
];
const newArrObj = arrayObj.map((value) => {
  return {
    ...value,
    isActive: true,
  };
});
console.log(arrayObj);

console.log("====================================================");

// Создание нового массива с длиной строк
// Напишите функцию, которая принимает массив строк и возвращает массив, содержащий длину каждой строки.
const strok = ["hello", "bruder", "как ты?"];
function strokLenght(arr) {
  const strokLenght = arr.map((value) => value.length);
  return strokLenght;
}
console.log(strokLenght(strok));

console.log("====================================================");

// Добавление свойства объектам
// Используя map, добавьте каждому объекту в массиве объектов новое свойство isActive: true, возвращая новый массив.
const peopls = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];
  
  const updatedPeoples = peopls.map(person => ({
    ...person,
    isActive: true
  }));
  
  console.log(updatedPeoples);
  

  console.log("====================================================");

// Создание массива квадратов чисел
// Напишите функцию, которая принимает массив чисел и возвращает массив квадратов этих чисел.
function squareArray(numbers) {
  return numbers.map(number => number * 2);
}
const numbers = [1, 2, 3, 4, 5];
const squares = squareArray(numbers);
console.log(squares);

console.log("====================================================");
// Преобразование регистра строк
// Используя map, преобразуйте массив строк в новый массив, где все строки в верхнем регистре.
 const strok1 = [ 'hello', 'world','morgen']
 const newStrok = strok1.map(str => str.toUpperCase())
 console.log(newStrok);
 console.log("====================================================");
 
// Создание массива первых букв
// Напишите функцию, которая принимает массив строк и возвращает массив первых букв каждой строки.
const ersteBuch = strok1.map(str => str[0])
console.log(ersteBuch);
console.log("====================================================");
// Добавление префикса к строкам
// Используя map, создайте новый массив строк, где к каждому элементу массива добавляется префикс "Item: ".
const newStrok1 = strok1.map(str =>  "Item:" + str)
console.log(newStrok1);

console.log("====================================================");
// Преобразование чисел в булевы значения
// Напишите функцию, которая принимает массив чисел и возвращает новый массив булевых значений (true, если число четное, и false, если нечетное).

const numbers3 = [1, 2, 3, 4, 5];
const convertToBoolean = (arr) => arr.map(num => num % 2 === 0);
const booleanArray = convertToBoolean(numbers);
console.log(booleanArray); 
console.log("====================================================");