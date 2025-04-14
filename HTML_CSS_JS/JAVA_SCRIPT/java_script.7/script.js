// let a;

// if (a) {
//     console.log ('here')
// } else {
//     console.log('not here')
// }

// const number = 8;
// if ( 'number' > 0 ){

// } else if ('number' < 0) {

// } else ('number' = 0){
//     console.log('number = 0');
// }

// const grade  = 5;
// if ('grade === 5') {
// console.log('otlichno');
// } else if ( grade === 4 ){xs
//     console.log('horosho')
// }else if ( grade === 3) {
//     console.log('norm');
// }else if ( grade === 2){
//     console.log('dno');
// }else { console.log('net ozenki') }
// let b = 25;
// switch (b) {
//   case 5:
//     console.log("its 5");
//     break;
//   case 10:
//     console.log("its 10");
//     break;
//   case 15:
//     console.log("its 15");
//     break;
//     case 20:
//         console.log ("its 20")
//         break;
//         case 25:
//             console.log("its 25")

//             default:
//                 console.log("nema")
// }

let dayOfWeek = 3;
switch (dayOfWeek) {
  case 1:
    console.log("ПАНЕДИЛДАК")
    break;
    case 2:
    console.log("Увторник")
    break;
    case 3:
    console.log("Cреда")
    break;
    case 4:
    console.log("Четверг")
    break;
    case 5:
    console.log("Пятницв")
    break;
    case 6:
    console.log("Суббота")
    break;
    case 7:
    console.log('Воскресенье')
    break;
    default:
    console.log ( "от 1 до 7")
}

function evaluateStudentScore(score) {
    if (score < 0 || score > 100) {
      console.log();
      return;
    }
  
    let grade;
  
    switch (true) {
      case score >= 90:
        grade = 'A';
        break;
      case score >= 80:
        grade = 'B';
        break;
      case score >= 70:
        grade = 'C';
        break;
      case score >= 60:
        grade = 'D';
        break;
      default:
        grade = 'F';
    }
  
    console.log(`Ваши баллы: ${score}, ваша оценка: ${grade}`);
  }
  const score = prompt('75,90,60,80');
  evaluateStudentScore(parseInt(score));
  


// const x = 100;
// const y = 200;
// const z = x * y;

// x > y ? console.log('x > y') :
// (z > y && z > x) ? console.log('z samoe bolshoe') :
// console.log('false')

// let g;
// let str = 'hello world'
// if(g) {
//     console.log(str)
// }
// console.log(g && str);





// //объявляем initial state - начальное значение, условие работы, шаг. Переход к следующему пункту через ; i++ тоже самое что и i = i + 1 
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }
// for(let i = 1; i < 5; i++) {
//     console.log(i);
// }

// for (let a = 1; a <= 3; a++){
//     console.log(Math.pow (a, 2));
// }

// for(let b = 2; b <= 8; b++ ){
//     if(b % 2 === 0){
//         console.log(b)
//     }
// }
// for(let index = 10; index >= 1; index--){
//     console.log(index);
// }
// let counter = 0
// do {
//     counter++
//     console.log(counter);

// }while (counter < 25)

//     for (let i = 10; i > 0; i--){
//         console.log(i)
//     }
//     const arr = [5, 10, 'hello', 5,3,2,4,56,7,9]
//     console.log(arr[2], arr[3], arr[5]);
//     console.log(arr.length);
//     for (let i = 0; i < arr.length; i++){
//         if( arr[i] === 'hello'){console.log(arr[i])}
    
//     }
   