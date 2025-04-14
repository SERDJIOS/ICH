// Объектно-ориентированное программирование —
// это подход к разработке программного обеспечения, который основывается на
// концепции объектов и их взаимодействия. Позволяет организовать код в виде
// объектов, которые являются экземплярами классов.

// Классы —
// определяют структуру и поведение объектов, а
// объекты могут взаимодействовать друг с другом,
// обмениваясь сообщениями.

// Суть понятия ООП
// Каждый объект — это определённая сущность со своими данными и набором доступных действий

// Объект —
// это часть кода, которая описывает элемент с
// конкретными характеристиками и функциями.

// Класс —
// это шаблон, на базе которого можно построить
// объект в программировании. Классы могут
// наследоваться друг от друга. Подкласс берёт
// свойства из родительского класса.

// Метод —
// это функция внутри объекта или класса, которая
// позволяет взаимодействовать с ним или другой
// частью кода

// Атрибут —
// это характеристики объекта в программировании. В
// классе прописывают, что такие атрибуты есть, а в
// объектах с помощью методов заполняют эти
// атрибуты данными.

// Классы в JS —
// это шаблоны для создания объектов (аналогично
// функциям конструкторам но со своими
// особенностями).

class User {
  //   constructor —
  // это специальный метод, служащий для создания и
  // инициализации объектов, созданных с использованием
  // class. Позволяет произвести начальную инициализацию,
  // которая должна быть выполнена до того, как остальные
  // методы будут вызваны.
  constructor(name, age, lastName, sex) {
    this.name = name
    this.age = age
    this.lastName = lastName
    this.sex = sex
  }

  sayHi(x, y) {
    const sexDefinition = this.sex == 'male' ? 'his' : 'her'
    if (this.age > x + y) {
      console.log(
        `Hello from ${this.name} ${this.lastName}, ${sexDefinition} age is ${this.age}`
      )
    } else {
      console.log(
        `sorry, but ${this.name} ${this.lastName} is younger and i cant show ${sexDefinition} age`
      )
    }
  }
}

const Yury = new User('Yury', 27, 'Arakelov', 'male')
const Adilya = new User('Adilya', 20, 'Ivanova', 'female')
Yury.sayHi(30, 10)
Adilya.sayHi(20, 3)

console.log('===============')

// Наследование классов —
// это процесс, позволяющий создавать иерархию
// классов, где дочерние классы наследуют свойства и
// методы от родительских классов, что позволяет
// переиспользовать код и создавать более
// специализированные классы на основе общих
// характеристик.

class Animal {
  constructor(animal) {
    this.animal = animal
  }

  sayHi(animalSound) {
    console.log(`${this.animal} says ${animalSound}`)
  }
}
// extends —
// это ключевое слово, которое используется для
// создания наследования классов в JavaScript.
class Cat extends Animal {
  meow() {
    console.log(`${this.animal} says meow`)
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.animal} says wow wow wow`)
  }
}

const Cercei = new Cat('Cat')
const Luna = new Dog('Dog')
const RandomAnimal = new Animal('Elephant')
RandomAnimal.sayHi('troooooo')
Luna.bark()
Cercei.meow()
console.log(Cercei)

console.log('===============')

// Дочерний класс —
// может переопределить методы родительского
// класса, добавить новые методы или свойства, а
// также использовать методы и свойства
// родительского класса с помощью ключевого слова
// super.

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  hello() {
    console.log("I'm here")
  }
}

class Student extends Person {
  constructor(name, age, gpa) {
    // super —
    // это ключевое слово, которое используется как
    // функция, вызывающая родительский конструктор.
    // Её необходимо вызвать до первого обращения к
    // ключевому слову this в теле конструктора.
    super(name, age)
    this.gpa = gpa
  }

  hello() {
    super.hello()
    console.log('whats up')
  }
}

class Teacher extends Person {
  constructor(name, age, classSize) {
    // super —
    // это ключевое слово, которое используется как
    // функция, вызывающая родительский конструктор.
    // Её необходимо вызвать до первого обращения к
    // ключевому слову this в теле конструктора.
    super(name, age)
    this.classSize = classSize
  }

  hello() {
    super.hello()
    console.log('hello')
  }
}
const st1 = new Student('Alex', 30, 5.0)
const t1 = new Teacher('Jhon', 56, 30)

st1.hello()
t1.hello()

console.log('===============')

// Создайте класс Circle, который принимает радиус при создании.
// ● У класса должен быть метод getArea(), который возвращает площадь круга.
// ● У класса также должен быть метод getCircumference(), который возвращает длину
// окружности круга.
// ● Создайте экземпляр класса и выведите результаты вызова методов.

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  getArea() {
    return Math.floor(Math.PI * Math.pow(this.radius, 2))
  }

  // dlina okrujnosti
  getCircumference() {
    return Math.floor(2 * Math.PI * this.radius)
  }
}

const circle1 = new Circle(12)
console.log(circle1.getArea())
console.log(circle1.getCircumference())

console.log('===============')

// Создайте класс Rectangle, который принимает ширину и высоту при создании.
// У класса должен быть метод getArea(), который возвращает площадь прямоугольника.
// У класса также должен быть метод getPerimeter(), который возвращает периметр прямоугольника.
// Создайте экземпляр класса и выведите результаты вызова методов.

class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }

  getPerimeter() {
    return 2 * (this.width + this.height)
  }
}

const rectangle1 = new Rectangle(10, 20)
console.log(rectangle1.getArea())
console.log(rectangle1.getPerimeter())

console.log('===============')

// Задача: Создайте класс User.
// Класс должен принимать name и age при создании.
// У класса должен быть метод greet(), который выводит в консоль сообщение:"Привет, меня зовут <name> и мне <age> лет."
// Добавьте метод isAdult(), который возвращает true, если возраст пользователя больше или равен 18, и false в противном случае.
// Создайте экземпляр класса и вызовите методы.

class User2 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`)
  }

  isAdult() {
    if (this.age >= 18) {
      return true
    } else {
      return false
    }
  }
}

const user2 = new User2('Muhammad-Amin', 26)
user2.greet()
console.log(user2.isAdult())
