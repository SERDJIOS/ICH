// class User {
//   constructor(name, age, lastName, sex) {
//     this.name = name;
//     this.age = age;
//     this.lastName = lastName;
//     this.sex = sex;
//   }

//   sayHi(x, y) {
//     const sexDefinition = this.sex == "male" ? "his" : "her";
//     if (this.age > x + y) {
//       console.log(
//         `Hello from ${this.name} ${this.lastName}, ${sexDefinition} age is ${this.age}`
//       );
//     } else {
//         console.log(`sorry, but ${this.name} ${this.lastName} is younger and i cant show ${sexDefinition} age`)
//     }
//   }
// }

// const Yury = new User("Yury", 27, 'Arakelov');
// const Adilya = new User("Adilya", 20, "Ivanova");
// Yury.sayHi(2, 10);
// Adilya.sayHi(3, 3) 
// console.log(Yury);
// console.log(Adilya);


// class Animal {
//     constructor(animal) {
//         this.animal = animal
//     }

//     sayHi(animalSound) {
//         console.log(`${this.animal} says ${animalSound}`)
//     }
// }

// class Cat extends Animal {
//     meow() {
//         console.log(`${this.animal} says meow`)
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log(`${this.animal} says wow wow wow`)
//     }
// }

// const obj = {
//     catName: 'Cercei',
//     cat: function() {
//         console.log(`${this.catName} says meow`)
//     }
// }

// console.log(obj);

// const Cercei = new Cat('Cat')
// console.log(Cercei);

// const Luna = new Dog('Dog')
// const RandomAnimal = new Animal('Elephant')
// RandomAnimal.sayHi('troooooo')
// Luna.bark()
// Cercei.meow()
// console.log(Cercei);

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
    
//     hello() {
//       console.log("I'm here");
//     }
  
//   }

//   class Student extends Person {
//     constructor(name, age, gpa) {
//       super( name, age)
//       this.gpa = gpa;
//     }
    
//     hello(){
      
//       super.hello()
//       console.log('whats up');
//     }
    
//   }
  
//   class Teacher extends Person {
//     constructor(name, age, classSize) {
//       super(name, age)
//       this.classSize = classSize;
//    }
   
//    hello(){
//      super.hello()
//      console.log('hello');
//    }
//  }
 
 
//  const st1 = new Student("Alex", 30, 5.0)
//  const t1 = new Teacher("Jhon", 56, 30)
 
//  t1.hello()
 

// class Man extends Person {
//     constructor(lastName, name, age) {
//       super(name, age)
//       this.lastName = lastName

//     }
  
//     getAge() {
//       return 22;
//     }
// }

// class Woman extends Man {
//     randomMethod() {
//         console.log(`${this.lastName} ${this.name}`)
//     }
// }

// const oneWoman = new Woman('Ivankova', 'Merrie', 90)
// console.log(oneWoman);


  
// const user1 = new Man('Arakelov', 'Yury', 27)
// console.log(user1.name);
// console.log(user1);

// const fn = (a, b) => {
//     console.log(a, b)
// }

// fn(5, 1)
// fn('hello', 'world')

// class Car{
//     constructor(model, year) {
//         this.model = model
//         this.year = year
//     }

//     getCarInfo(){
//         console.log(`${this.model, this.year}`)
//     }
// }


// class Toyota extends Car{
//     getToyotaInfo(){
//         console.log(`${this.model}, ${this.year}`)
//     }
// }

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