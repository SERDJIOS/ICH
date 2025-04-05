const fn = (a, b) => {
    console.log(a, b)
}

fn(5, 1)
fn('hello', 'world')

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


// Задача 1: Класс Book
// Создайте класс Book, который принимает title (название книги) и author (автора) при создании.
// Добавьте метод getDescription(), который возвращает строку:"Книга '<название>' написана автором <автор>."

class Book {
    constructor(title, author) {
        this.title = title;  
        this.author = author; 
    }

    getDescription() {
        return `Книга '${this.title}' ${this.author}.`;
    }
}


const book1 = new Book("1993", "Написал лично");


console.log(book1.getDescription()); 



console.log("=============================");

// Задача 2: Класс Counter
// Создайте класс Counter, который имеет свойство count, равное 0 при создании.
// Добавьте методы:
// increment() — увеличивает count на 1.
// decrement() — уменьшает count на 1.
// getValue() — возвращает текущее значение count.

class Counter {
    constructor(){
        this.count = 0;
    }
    increment(){
        this.count += 1;
    }

    decrement(){
        this.count -= 1;
    }
    getValue(){
        return this.count;
    }
}

const counter = new Counter()

counter.increment()
counter.increment()
console.log(counter.getValue());

counter.decrement()
console.log(counter.getValue());

console.log("=============================");

// Задача 3: Класс Person
// Создайте класс Person, который принимает name и age при создании.
// Добавьте метод greet(), который выводит в консоль:"Привет, меня зовут <name> и мне <age> лет."
// Добавьте метод celebrateBirthday(), который увеличивает возраст на 1.



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Привет, меня зовут ${this.name} и мне ${this.age} `;
    }

    celebrateBirthday() {
        this.age += 1;
        return `${this.age}`;
        
    }
}

const person = new Person('Tipu', 32);
console.log(person.greet());
console.log(person.celebrateBirthday());




console.log("=============================");








// Задача 1: Наследование животных
// Создайте базовый класс Animal, который принимает name (имя животного) в конструкторе.
// Добавьте метод speak(), который выводит в консоль:"Я — <имя>, и я издаю звуки."
// Создайте класс Dog, который наследует Animal, и переопределите метод speak(), чтобы он выводил:"Я — <имя>, и я лаю: Гав-гав."
 

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
       return `Я —${this.name}, и я издаю звуки.`;
    }
}

class Dog extends Animal {
    speak() {
        return `Я — ${this.name}, и я лаю: Гав-гав.`;
    }
}

const animal1 = new Animal ('Dog')
const dog = new Dog ('Wowowow')

console.log(animal1.speak());
console.log(dog.speak());


// Задача 2: Наследование форм
// Создайте базовый класс Shape, который принимает color (цвет) в конструкторе.
// Добавьте метод getColor(), который возвращает текущий цвет.
// Создайте класс Square, который наследует Shape, и добавьте новое свойство side (длина стороны).
// Добавьте метод getArea(), который возвращает площадь квадрата (side×side).


class Shape {
    constructor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
}
    class Square extends Shape {
        constructor(color,side) {
            super(color)
            this.side = side
            
        }
        getArea(){
            return this.side * this.side
        }
    }
const area = new Square('red',5)
console.log(area.getArea());
console.log("=============================");

// Задача 1: Класс User для загрузки данных пользователя
// Создайте класс User с методом fetchUser(id), который загружает данные пользователя с JSONPlaceholder по указанному id.
// Добавьте метод getInfo(), который возвращает строку:"Пользователь <name>, email: <email>, город: <city>".

class User {
    constructor() {
      this.userInfo = null
    }
    async fetchUser(id) {
      const url = `https://jsonplaceholder.typicode.com/users/${id}`
      const response = await fetch(url)
      this.userInfo = await response.json()
    }
    getinfo() {
      if (!this.userInfo) {
        return 'User does not exists'
      }
      const { name, email, address } = this.userInfo
      return `Пользователь ${name}, email: ${email}, город: ${address.city}`
    }
  }
  
  (async () => {
    const user1 = new User()
    await user1.fetchUser(2)
    console.log(user1.getinfo())
  })()
  