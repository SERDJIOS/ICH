// Создайте класс Circle, который принимает радиус при создании.
// У класса должен быть метод getArea(), который возвращает площадь круга.
// У класса также должен быть метод getCircumference(), который возвращает длину окружности круга.
// // Создайте экземпляр класса и выведите результаты вызова методов.

class Circle {
    constructor(radius){
        this.radius = radius
    }
    getArea(){
       return Math.floor(Math.PI * Math.pow(this.radius,2))
        
    }
    getCircumference(){
        return Math.floor(2*Math.PI*this.radius)
    }
}

const circle1 = new Circle(12)
console.log(circle1.getArea());
console.log(circle1.getCircumference());

console.log("==================");


// Создайте класс Rectangle, который принимает ширину и высоту при создании.
// У класса должен быть метод getArea(), который возвращает площадь прямоугольника.
// У класса также должен быть метод getPerimeter(), который возвращает периметр прямоугольника.
// Создайте экземпляр класса и выведите результаты вызова методов.

class Rectangle {
    constructor(height, width) {
        this.height = height; // Инициализация высоты
        this.width = width;   // Инициализация ширины
    }

    // Метод для вычисления площади прямоугольника
    getArea() {
        return this.height * this.width;
    }

    // Метод для вычисления периметра прямоугольника
    getPerimeter() {
        return 2 * (this.height + this.width);
    }
}

// Создание экземпляра класса Rectangle
const rectangle1 = new Rectangle(23, 4);

// Вывод результатов вызова методов
console.log(rectangle1.getArea());
console.log(rectangle1.getPerimeter());


// Задача: Создайте класс User.
// Класс должен принимать name и age при создании.
// У класса должен быть метод greet(), который выводит в консоль сообщение:"Привет, меня зовут <name> и мне <age> лет."
// Добавьте метод isAdult(), который возвращает true, если возраст пользователя больше или равен 18, и false в противном случае.
// Создайте экземпляр класса и вызовите методы.

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;   
    }

    greet() {
        console.log(`Hi ${this.name} i am ${this.age} age`);
    }

    
    isAdult() {
        return this.age >= 18;
    }
}


const user1 = new User("Bruder", 17);

user1.greet();
console.log( user1.isAdult());



// Полиморфизм - способность объекта использовать методы с одинаковым именем, но с разным поведением в зависимости от контекста

// const user1 = new Man('Arakelov', 'Yury', 27)
// console.log(user1.name);
// console.log(user1);

// const fn = (a, b) => {
//     console.log(a, b)
// }

// fn(5, 1)
// fn('hello', 'world')

class Car{
    constructor(model, year) {
        this.model = model
        this.year = year
    }

    getCarInfo(){
        console.log(`${this.model, this.year}`)
    }
}


class Toyota extends Car{
    getToyotaInfo(){
        console.log(`${this.model}, ${this.year}`)
    }
}


const toyota = new Toyota('Corolla', 2020);
toyota.getCarInfo(); // Corolla, 2020
toyota.getToyotaInfo()

class UserProfile {
    #reputation = 770

    getUserReputation(currentReputation) {
        if(currentReputation > 0) {
            this.#reputation += currentReputation
            console.log(`new rep = ${this.#reputation}`)
        }
    }

    getCurrentReputation() {
        console.log(this.#reputation)
    }

    get rep() {
        return this.#reputation
    }

    //эта функция вызывается и в нее присваивается явно новое значение reputation так будто вы присваиваете значение переменной
    set changePrivateRep(newRep) {
        if(newRep) {
            return this.#reputation = newRep
        }
    }
}

const userPr1 = new UserProfile()
console.log(userPr1.rep);
userPr1.changePrivateRep = 999
console.log(userPr1.rep);
userPr1.getCurrentReputation()
// class newProfile extends UserProfile {
//     getNewProfile() {
//         console.log(this.);
        
//     }
// }

// const user1 = new UserProfile()
// user1.getUserReputation(100)
// user1.getCurrentReputation()