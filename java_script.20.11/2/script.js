function User(name, age) {
    this.name = name
    this.age = age
    this.printUser = function() {
        console.log(`user: ${this.name}`)
    }
    this.param = function() {
        return Math.pow(this.age, 2)
    }
}
console.log("===============================================");

const newUser = new User('yury', 27)
const polinaUser = new User("Polina", 30)
const alexandUser = new User("Alex", 12)
alexandUser.printUser()
console.log(newUser.param());


console.log("===============================================");
console.log(polinaUser, newUser, alexandUser);

console.log("===============================================");


// Создать функцию конструктор объекта Car, который имеет поля brand, model, year и метод print, который выводит в консоль все поля строкой.
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.print = function() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    };
}


const bmw = new Car("Бэха", "М8", 2023);
bmw.print();  
console.log("===============================================");

function Car1(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    

    this.print = function(){
        console.log(this.brand, this.model, this.year);
        
    }
}
const audi = new Car1('Audi', 'A6', 2019);
audi.print();  
console.log("===============================================");

function greet() {
    //1. Определяем контекст, его может изначально не быть
    console.log(`Hello, ${this.username}, ${this.age} and i have a car ${this.car} ${this.model}`);
  }
  
  //2. Формируем будущий контекст
  const user = { username: "Alex" };
  const obj = {
      username: 'yury1997',
      age: 27,
      isProgrammer: true,
      greet: 'hello world',
      car: "toyota",
      model: 'Camry'
  }
  
//3. Передаем контекст с помощью метода call в функцию использующую будущий контекст
greet.call(obj);



function myCar(year) {
    console.log(`I have ${this.car}, ${year}`)
}
myCar.call({car: 'toyota'}, 29)


function helloApply(param, userData) {
    console.log(`Params: ${param}, maindata: ${this.mainData}`)
}

helloApply.apply({mainData: 'somerandom data'}, ['data, something, 2'])


function helloUser() {
    return `hello, user: ${this.username}`
}

const delayedFn = helloUser.bind({username: 'Jerry'})

console.log(delayedFn());

function plus(x, y) {
    this.result = x + y
    return this.result
}

const res = plus.apply({result: 0}, [5, 10])
console.log(res);
console.log("===============================================");


// Написать функцию, которая принимает 2 аргумента и результат их сложения записывает в this.result. Использовать метод call().

function newCall(x,y){
    this.result = x + y;
    return this.result
}
const result = newCall.call(this,5,23)
console.log(result);

console.log("===============================================");


// Написать функцию, которая принимает 2 аргумента и результат их деления записывает в this.result. Использовать метод apply().

function divide (a,b) {
    this.result = a / b;
    return this.result

    
}

const resultDivide =  divide.apply(this, [4,12])
console.log(resultDivide);
console.log("===============================================");

// Написать функцию counter, которая будет прибавлять 1 к текущему значению.

function counter (){
    return `Counter: ${++this.result}`
}
const result1 = counter.bind({result: 11})
console.log(result1());
