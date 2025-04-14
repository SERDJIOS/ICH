// // class Person {
// //     constructor(name, age, lastName) {
// //         this.name = name
// //         this.lastName = lastName
// //         this.age = age
// //     }

// //     sayHello(){
// //         console.log(`${this.name} ${this.lastName} says hello`)
// //     }
// // }

// // const person1 = new Person('Tatiana', 31, 'Nagornaya')
// // console.log(person1.age);


// // const obj1 = new Object()
// // const newObj = new Array(12)
// // Array.isArray(newObj)
// // Array.isArray()

// const obj = {
//     id: 2423,
//     name: 'Sunflower',
//     merchantName: 'Issomesmo',
//     paymentMethod: 'PIX',
//     additionalParams: ['param1', 'param2', 'param3'],
//     userData: {
//         username: 'sunflower123',
//         password: '1234565'
//     }
// }
// // for(let k in obj) {
// //     console.log(obj[k])
// // }
// // Object.keys()
// // Object.values()
// // Object.entries()

// const result = Object.keys(obj)
// const valueResult = Object.values(obj)
// const basicFormat = Object.entries(obj)
// .map(([key, value]) => ({key, value }))
// .filter((item)=>!Array.isArray(item.value)&& typeof item.value !== 'object')
// console.log(result);
// console.log(valueResult);
// console.log(basicFormat);



// const item = ['hello', 'world']
// const [p1, p2] = item
// console.log(p1, p2);

// console.log("===========================");

// class Person {
//     static staticSayHello() {
//         return 'hello everyone'
//     }
// }

// const res = Person.staticSayHello()
// console.log(res);

// console.log("===========================");

// Создайте класс Calculator, у которого будет статический метод add(), который будет принимать два числа и возвращать их сумму.

class Calculator{
    static add (a,b) {
        return a + b;
    }
}

console.log(Calculator.add(2,9));



// Создайте класс RandomNumberGenerator, у которого будет статический метод generate(), который будет генерировать случайное число в заданном диапазоне.

class RandomNumberGenerator{
    static generate (min,max){
        return Math.floor(Math.random()* (max - min +1 )+ min)
    }
}

console.log(RandomNumberGenerator.generate(1,33));


// Создайте класс StringUtils, у которого будет статический метод reverse(), который будет принимать строку и возвращать ее в обратном порядке.

class StringUtils{
    static reverse(str){
        return str.split('').reverse().join('');
    }
}
console.log(StringUtils.reverse("auf"));


// Создайте класс MathUtils (Математический утилитар), у которого будет статический метод getMax(), который будет принимать массив чисел и возвращать наибольшее число.

class MathUtils{
    static getMax(numbers){
        return Math.max(...numbers);
    }
}
console.log(MathUtils.getMax([11,27,99,45]));



class Book {
    constructor(book){
        if(book) {
            this.book = book
        } else {
            this.book = Book.defaultBook
        }
        this.element = 'hello world'
        this.defaultAuthor = Book.defaultBook
    }

    static defaultBook = 'Alex Fromm'
}

console.log(Book.defaultBook);

const book1 = new Book()
const book2 = new Book('Jerry Smith')
console.log(book1.book);
console.log(book2.element);
console.log(book2.defaultAuthor);
class ExtendedBook extends Book {
    

}


// const newBook = new ExtendedBook('Jack London')
console.log(ExtendedBook.defaultBook);
console.log();



// Создайте класс Counter, у которого будет статическое свойство count, которое будет хранить текущее значение счетчика.
// Создайте статический метод increment(), который будет увеличивать значение счетчика на 1.
// Создайте статический метод decrement(), который будет уменьшать значение счетчика на 1.

class Counter{
    static count = 0;
    static increment(){
        this.count ++;
    }
    static decrement(){
        this.count --;
    }
}

console.log(Counter.count);
Counter.increment();
console.log(Counter.count);
Counter.increment();
console.log(Counter.count);
Counter.decrement();
console.log(Counter.count);
Counter.decrement();




// Создайте класс Configuration, у которого будет статическое свойство settings, которое будет хранить объект с настройками приложения.
// Создайте статический метод getSetting(key), который будет возвращать значение настройки по заданному ключу.
// Создайте статический метод setSetting(key, value), который будет устанавливать значение настройки по заданному ключу.

class Configuration{
    static settings = {};

    static getSetting(key){
        return this.settings[key];
    }
    static setSetting(key, value){
        return this.settings[key] = value;
    }
}
Configuration.setSetting("theme","teal");
Configuration.setSetting("sprache","deutch");
Configuration.setSetting("city","düss");

Configuration.getSetting("spache")
Configuration.getSetting("theme")

console.log(Configuration.getSetting("sprache"));

console.log(Configuration.getSetting("theme"));
console.log(Configuration.getSetting("city"));

console.log(Configuration.settings);

// Создайте класс MathOperations (Математические операции), у которого будут статические свойства PI (число Пи) и E (число Эйлера).
// Создайте статический метод calculateCircleArea(radius), который будет возвращать площадь круга по заданному радиусу, используя статическое свойство PI.
// Создайте статический метод calculateExponentialPower(base, exponent), который будет возвращать результат возведения числа в степень, используя статическое свойство E.


PI = 3.14159; 
E = 2.71828;


class MathOperations{
    static PI = 3.14159;
    static E = 2.71828;

    static calculateCircleArea(radius){
       return this.PI * radius * radius;
    }
    static calculateExponentialPower(base, exponent){
       return Math.pow(base * this.E, exponent);
    }
}
console.log(MathOperations.calculateCircleArea(7));
console.log(MathOperations.calculateExponentialPower(2,2));

// Задача 2: Фильтрация числовых значений
// Есть объект с данными о различных параметрах. Вам нужно получить только те значения, которые являются числами.

const stats = { 
    clicks: 120, 
    impressions: 3400, 
    ctr: '5%', 
    country: 'Brazil',
    avgPosition: 7.5 
};

const numericValues = Object.values(stats).filter(value => typeof value === 'number');
console.log(numericValues);

class User {
    st
}
    

