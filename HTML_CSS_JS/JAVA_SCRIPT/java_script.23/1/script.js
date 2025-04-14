// Работа с методами массивов
const arr = ['dcln', 1, 2, 3, 4, 5];

// Добавляем элемент в конец массива
arr.push('hello world');
console.log(arr);  // ['dcln', 1, 2, 3, 4, 5, 'hello world']

// Удаляем последний элемент массива и сохраняем его в переменную
const newEl = arr.pop();

// Удаляем первый элемент массива и сохраняем его в другую переменную
const newEl2 = arr.shift();

// Выводим удалённые элементы
console.log(newEl, newEl2);  // 'hello world', 'dcln'


// Обмен местами первого и последнего элементов массива
const newArr = ['hello', 1234, 234, 'world'];

// Временная переменная для сохранения последнего элемента массива
let temp = newArr[newArr.length - 1];

// Меняем местами первый и последний элементы
newArr[newArr.length - 1] = newArr[0];
newArr[0] = temp;

console.log(newArr);  // ['world', 1234, 234, 'hello']


// Функция, которая принимает в качестве аргумента callback
const helloFn = (a, b, callback) => {
    return a + b + callback;
};

// Callback функция, которая возвращает строку
const callbackFn = (str) => {
    return str;
};

// Исправление вызова callback
console.log(helloFn(5, 10, callbackFn("callback result")));  // 15callback result


// Два способа использования forEach
const resArr = ['dcln', 1, 2, 3, 4, 5, 'hello', 'world'];

// Обычный цикл for
for (let i = 0; i < resArr.length; i++) {
    console.log(resArr[i]);
}

// Использование метода forEach
resArr.forEach((value, index, array) => {
    console.log(value);
});


// Использование метода map для переворота строк и возведения чисел в квадрат
const result = resArr.map((item) => {
    if (typeof item === 'string') {
        // Переворачиваем строку
        return [...item].reverse().join('');
    } else if (typeof item === 'number') {
        // Возводим число в квадрат
        return item ** 2;
    }
});

console.log(result);  // ['ncld', 1, 4, 9, 16, 25, 'olleh', 'dlrow']


// Использование метода map для создания нового массива с длинами элементов
const mapArr = resArr.map((item) => {
    if (typeof item === 'string') {
        // Возвращаем строку с длиной
        return `это строка и ее длина ${item.length}`;
    } else {
        // Возвращаем строку для чисел
        return 'это число';
    }
});

console.log(mapArr);


// Использование метода map для создания массива с квадратными корнями чисел
const numbers1 = [1, 3, 4, 5];
const squareArr = numbers1.map((item) => {
    return Math.sqrt(item);  // Вычисляем квадратный корень числа
});

console.log(squareArr);  // [1, 1.7320508075688772, 2, 2.23606797749979]


// Использование метода forEach для вывода только четных чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((value) => {
    if (value % 2 === 0) {
        console.log(value);  // Выводим только четные числа
    }
});
