// Полиморфизм —
// это один из принципов ООП, он помогает
// проектировать объекты таким образом, чтобы они
// могли совместно использовать или переопределять
// любое поведение с конкретными предоставленными
// объектами.

// Полиморфизм - способность объекта использовать методы с одинаковым именем, но с разным поведением в зависимости от контекста
// primer:
// class Animal {
//   constructor(animal) {
//     this.animal = animal
//   }

//   sayHi(animalSound) {
//     console.log(`${this.animal} says ${animalSound}`)
//   }
// }
// // extends —
// // это ключевое слово, которое используется для
// // создания наследования классов в JavaScript.
// class Cat extends Animal {
//   meow() {
//     console.log(`${this.animal} says meow`)
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log(`${this.animal} says wow wow wow`)
//   }
// }

// const Cercei = new Cat('Cat')
// const Luna = new Dog('Dog')
// const RandomAnimal = new Animal('Elephant')
// RandomAnimal.sayHi('troooooo')
// Luna.bark()
// Cercei.meow()
// console.log(Cercei)

// =
// =

// Инкапсуляция —
// это одно из ключевых понятий ООП, представляет
// сокрытие состояния объекта от прямого доступа
// извне для поддержания целостности данных.

// # в JavaScript —
// это символ, с помощью которого можно создавать
// приватные свойства. Это обозначение указывает,
// что свойство является приватным и не должно быть
// доступно извне класса.

class UserProfile {
  #reputation = 770

  getUserReputation(currentReputation) {
    if (currentReputation > 0) {
      this.#reputation += currentReputation
      console.log(`new rep = ${this.#reputation}`)
    }
  }
  getCurrentReputation() {
    console.log(this.#reputation)
  }

  // Геттер —
  // это метод для получения значения.
  get rep() {
    return this.#reputation
  }

  // Сеттер —
  // это метод для изменения значения.
  //эта функция вызывается и в нее присваивается явно новое значение reputation так будто вы присваиваете значение переменной
  set changePrivateRep(newRep) {
    if (newRep) {
      return (this.#reputation = newRep)
    }
  }
}

class newProfile extends UserProfile {
  getNewProfile() {
    // zdes mi hoteli vizvat this.#reputation, no eto privatnoye svoystvo
    // console.log(this.);
  }
}

const userPr1 = new UserProfile()
console.log(userPr1.rep)
userPr1.changePrivateRep = 999
console.log(userPr1.rep)
userPr1.getCurrentReputation()

const user1 = new UserProfile()
user1.getUserReputation(100)
user1.getCurrentReputation()
