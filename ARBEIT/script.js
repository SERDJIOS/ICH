// 1.Вывод всех чётных чисел от 1 до N:
function evenNumbers(N) {
    // Создаем пустой массив для хранения чётных чисел
    let result = [];
    
    // Проходим по всем числам с шагом 2
    for (let i = 2; i <= N; i += 2) {
        result.push(i); // добавляем число в массив
    }
    
    // Возвращаем массив с чётными числами
    return result;
}

// Вводим число N
let N0 = parseInt(prompt("Введите N: "));

// Получаем чётные числа
let evenNumbersList = evenNumbers(N);


console.log(evenNumbersList.join(", "));

console.log("============================");


// 2.Вывод всех нечётных чисел от N до 1:
function oddNumbers (N){
    let result = [];
   for (let i = N; i >= 1; i -=2 ){
    if (i % 2 !== 0){
        result.push (i)
    }
   }
   
   console.log(result.join(","));
}

let N1 = parseInt(prompt("Введите N:"));
oddNumbers(N1)

console.log("============================");


// 3. Сумма всех чисел от 1 до N:

function sumNummer (N){
    let total = 0;
    let numbers = [];
    for (let i = 1; i <= N;  i++){
        total += i;
        numbers.push(i)
        
    }
    console.log(`Сумма: ${total} (${numbers.join(" + ")} = ${total})`);
}
let N2 = parseInt(prompt("Введите N: "));
sumNummer(N2);

console.log("============================");


// 4. Количество чётных чисел от 1 до N
function countEvenNummer (N){
    let count = 0;
    
    for (let i = 2; i <= N;  i += 2 ){
        count ++;
        
    }
    console.log(`Количество чётных чисел: ${count}`);
}
let N3 = parseInt(prompt("Введите N: "));
countEvenNummer(N3);

console.log("============================");

// 5. Сумма всех нечётных чисел от N до 1:
function sumNummerReverse (N){
    let total = 0;
    let numbers = [];
    if (N % 2 === 0){
        N -= 1;
    }
       for (let i = N; i >= 1; i -=2 ){
            total += i;
            numbers.push (i);
        }
       }
       console.log(`Сумма: ${total} (${numbers.join(" + ")} = ${total})`);
    
let N4 = parseInt(prompt("Введите N"));
sumNummerReverse(N4)
console.log("============================");


// 6.Квадраты всех чисел от 1 до N:
function squares (N){
    let result = []
    for (let i = 1; i <= N; i++){
        result.push(i * i);

    }
    console.log(result.join(", "));
    
}
let N5 = parseInt(prompt("Введите N: "));
squares(N5);

console.log("============================");

// 7.Числа от 1 до N, кратные 3:
function multiplesOf3(N) {
    let result = [];  // Массив для хранения чисел, кратных 3
    
    // Проходим по всем числам от 1 до N
    for (let i = 3; i <= N; i += 3) {
        result.push(i);  // Добавляем число в массив
    }
    
    // Выводим числа через запятую
    console.log(result.join(", "));
}

// Вводим число N
let N6 = parseInt(prompt("Введите N: "));
multiplesOf3(N6);
console.log("============================");

//8.Произведение всех чисел от 1 до N:
function productNumbers(N) {
    let product = 1;  // Инициализируем переменную для произведения
    let numbers = [];  // Массив для хранения чисел
    
    // Проходим по всем числам от 1 до N
    for (let i = 1; i <= N; i++) {
        product *= i;  // Умножаем на текущее число
        numbers.push(i);  // Добавляем число в массив
    }
    
    // Выводим произведение и объяснение
    console.log(`Произведение: ${product} (${numbers.join(" * ")} = ${product})`);
}

// Вводим число N
let N7 = parseInt(prompt("Введите N: "));
productNumbers(N7);
console.log("============================");

// 9.Числа от N до 1, которые делятся на 5:
function divisibleBy5(N) {
    let result = [];  // Массив для чисел, делящихся на 5
    
    // Проходим от N до 1
    for (let i = N; i >= 1; i--) {
        if (i % 5 === 0) {  // Проверяем, делится ли число на 5
            result.push(i);  // Добавляем число в массив
        }
    }
    
    // Выводим числа через запятую
    console.log(result.join(", "));
}

// Вводим число N
let N = parseInt(prompt("Введите N: "));
divisibleBy5(N);

console.log("============================");

// 10.Числа от 1 до N, пропуская каждое третье число:

function skipEveryThird(N) {
    let result = [];  // Массив для хранения чисел
    
    // Проходим по всем числам от 1 до N
    for (let i = 1; i <= N; i++) {
        if ((i - 3) % 3 !== 0) {  // Пропускаем числа, которые находятся на третьей позиции
            result.push(i);  // Добавляем число в массив
        }
    }
    
    // Выводим числа через запятую
    console.log(result.join(", "));
}

// Вводим число N
let N9 = parseInt(prompt("Введите N: "));
skipEveryThird(N9);

console.log("============================");





