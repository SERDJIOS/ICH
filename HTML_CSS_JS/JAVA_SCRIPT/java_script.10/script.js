// // fuction
// const a = 5
// const b = false
// const c = 10
// if (a < c && !b){
//     console.log('Hello world')
// }
// const a2 = 5
// const b2 = false
// const c2 = 10
// if (a2 < c2 && !b2){
//     console.log('Hello world')
// // }
// const obj = {
//     kittyName: 'Persik',
//     age: 48,
//     color: 'orange white',
//     habits: ['scratch a sofa', 'love to be pet', 'sleep on lags'],
//     playful: false,
//     bonus: 'morning alarm',
//     paws: 4,
//     passport:{
//         id:312324,
//         address:{
//          city:   'Munchen',
//          country: 'Germany',
//          street: 'Avenida Portugal 28',
//          ZIP: '29837465-3765'
        

//         }
//     },
//     sayMeo: function(){
//         console.log('MEEEEEEOW');
//     }
// }
// obj.sayMeow();

// const habits = obj.habits

// function greetings (){
//     console.log('hello,user')
// }
// greetings()
// function kitten( name, age, habits, color){
//     console.log( name, age, habits, color)
// }
// kitten('Persik', 48, 'play','orange white')
// const habitsOfPersik = ['scratch a sofa', 'love to be pet', 'sleep on lags']
// kitten('Persik', 2, 'braun')

// greetings('Serjo')

// const x = 300;
// const y = 200;
// if( y > x){
//     sum (' not error', x,y)
// } else {
//     sum('error')
// }


//  function sum (error,a,b,){
   
//     if( a !== undefined && b !== undefined){
//         console.log(a+b)
        
//     }else {
        
//     }  console.log(error)
//  }
 
//  sum('error2')
//  sum('rundom err', 10,20)   

//  sum(10,20)
//  sum(45,96)
//  sum(5,8)

//  function multiply (a,b,c){
//     return a*b*c
//  }
//  const result = multiply


//  function hello(callbackH1) {
//     return callbackH1
//  }
//  function sayHello(string){
//     console.log(string);
    
//  }
//  hello ( sayHello('hello world'))

//  function fn(){
//     const a = 5
//     const a2 = 53
//     const a4 = 58
//     const a3 = 45
//     return {
//         1: a,
//         2: a2,
//         3: a3,
//         4: a4,
//         name: 'serjio'
//     }
   

//  }
//  const res =fn()
//  console.log(fn()['name']);

//  const arrowFn = (nameq) => {
//     return `Hello`, ${nameq}
//  }
//  console.log(fn('Serjio'));
//  console.log(arrowFn('Serjio2'));
 
 function sum (f,r){
    return f + r
 }
 console.log(sum(10,20))

 function greet (){
    return 'Hello world'
 }
 console.log(greet);

function square (a){
return Math.pow(a,2)
   
}
console.log(square(1));

// Напишите функцию `isEven`, которая принимает число в качестве аргумента, проверяет его на четность и выводит результат в консоль.
function isEven(num){
    num % 2 === 0 ? console.log('четкое') : console.log('нечетное');
    ;
    
}
isEven(121)
// Создайте функцию `concatenate`, которая запрашивает у пользователя две строки, объединяет их и выводит результат.

function concatenate (str,str2){
    return `${str}  ${str2}`
}
console.log(concatenate('hello', 'world'));


const coin = { 
    name: 'Atom',
    age: 7,  
}
coin.greet = function(){
    return `Hello, ${coin.name + coin.age}`
}
console.log(coin.greet());



console.log(coin.name + "" + coin.age);
console.log(`${coin.name}` + `${coin.age}`)

function multiply (y, x){
    return y * x

}
console.log(multiply(11,13))

const multiply2 = (y, x) =>  y * x ;
console.log(multiply(11,13));

const calc = {
    add: function(a,b){
        return a + b;
    },
    substrackt: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b){
        return a / b;
    },
}
console.log(calc.add(2,7));
console.log(calc.substrackt(2,4));
console.log(calc.multiply(3,6));
console.log(calc.divide(44,54));


const person ={
    name: 'Serjio',
    age: 31
}

console.log(person);

person.greet = function() {
    console.log("Privet," + this.name + "!");
    
}
person.greet()
