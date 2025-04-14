// const randoArr =[1,2,-6,-9,'hello world','blink','ihvbweoiv',
// false, true, {myName: 'Serjio'}, 'hello world']
// for(let i = 0; i < randoArr.length; i++){
//     console.log(randoArr[i]);
// }
// const last = randoArr.length - 1
// console.log(randoArr[last]);

// let middle = Math.floor(randoArr.length / 2)
// console.log(randoArr[middle])

// objekti v javascript

// const additionalParams = {
//   ds: "3DS_ADD_INIT",
//   UNIPAY: "UNIAUTO_LES",
//   OSU: "NXXTTRI",
// };

// const arr = ["3DS_ADD_INIT", "UNIAUTO_LES", "NXXTTRI"];

// const myCar = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "blue",
// };

// for (let key in myCar) {
//   if (myCar[key] === "blue") {
//     console.log(myCar[key]);
//     myCar.color = "red";
//   }

//   console.log(key);
// }
// console.log(myCar);

// console.log(myCar);
// //меняем значение свойства
// myCar.brand = 'Honda'
// delete myCar.color
// console.log(myCar.brand)
// console.log(myCar);

// const words = ["cat", "dog", "delfin", "elefant"];
// let longestWord = "";
// for (let word of words) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }
// console.log(longestWord);




const randomArr = [1, 2, -6, -9, 3, 'hello wolrd', 'blink', 'dcdcd', false, true, {myName: 'Yury'}, 'hello world']


const myName = 'Yury'

const obj = {
    // где а = ключ (key), б = значение(value)
    a: 5,
    b: 8,
    c: 'hello',
    g: true,
    sviuhsdflibhsduifbpsibspob: 'hello world'
}

console.log(obj.sviuhsdflibhsduifbpsibspob)

const myKitten = {
    kittyName: 'Cercei',
    age: '2 months',
    color: 'white',
    habits: ['bite', 'eat on my legs', 'sleep'],
    playful: true,
    bonus: 'pee on flip flops',
    paws: 4
}

const arrKitten = ['Cercei', '2 months', 'white', 'bite']
const ourKittens = [
    {
        kittyName: 'Cercei',
        age: 2,
        color: 'white',
        habits: ['bite', 'eat on my legs', 'sleep'],
        playful: true,
        passport: {
            breed: 'semi - Angora',
            mom: 'Angora',
            father: 'Homeless',
            microchip: {
                address: 'Avenida Portugal 1288',
                id: 2582457824,
                vacineDate: '24.10.24',
                procedures: ['exame FIV', '...'],
                vacines: ['vacine1', 'vacine12', 'vacine16', 'vacine14', 'vacine13', 234, false, true, 'dsdsdd']
            },
            isVacinated: true
        },

        bonus: 'pee on flip flops',
        paws: 4
    },
    {
        kittyName: 'Persik',
        age: 48,
        color: 'orange white',
        habits: ['scratch a sofa', 'love to be pet', 'sleep on lags'],
        playful: false,
        bonus: 'morning alarm',
        paws: 4,
        passport:{
            id:312324,
            address:{
             city:   'Munchen',
             country: 'Germany',
             street: 'Avenida Portugal 28',
             ZIP: '29837465-3765'
            

            }
        }
    },
    {
        kittyName: 'Dynya',
        age: 36,
        color: 'brown',
        habits: ['love treats', 'spend time on balcony', 'eat cucumeber',
        {
            loveToPlayWith: [
                'little mouse',
                 'fat dog',
                  'doll',
                   {option1: 'option1', option2: 'option2', option3: 'option3', option4: ['item1', 'item2', 'item3']}
                ]
        }
    ],
        playful: true,
        bonus: 'beautiful tail',
        paws: 4
    },
  
]
// Задача - вытащить по одному все вакцины в консоль
//перебираем массив объектов и достаем котят по имени если их возраст больше 30 месяцев
for (let index = 0; index < ourKittens[0].passport.microchip.vacines.length; index++) {
    console.log(ourKittens[0].passport.microchip.vacines[index]);
}
console.log(ourKittens[1].passport.address.ZIP);
console.log(ourKittens[2].habits[3].loveToPlayWith[3].option4[1])

