// function checkEvenNumber(number) {
//     return new Promise((res, rej) => {
//         if (number % 2 === 0) {
//             res("Число четное");
//         } else {
//             rej("Число нечетное");
//         }
//     });
// }

// // Пример использования функции
// checkEvenNumber(0)
//     .then(message => console.log(message))  // Вывод: "Число четное"
//     .catch(error => console.log(error));    // Если число нечетное, этот код не выполнится

// // checkEvenNumber(5)
// //     .then(message => console.log(message))  // Если число четное, этот код выполнится
// //     .catch(error => console.log(error));    // Вывод: "Число нечетное"

//     function random (a,b) {
//         return new Promise((res, rej) => {
//             if (a.length > b) {
//                 res('норм')
//             } else {
//                 rej ('ну такое')
//             }
//         })
//     }
//     random('hello', 4)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Это конец'))
    
const form = document.querySelector('.form')
form.addEventListener('submit', e => {
  e.preventDefault()
  const task = e.target['task'].value
  const description = e.target['description'].value
  localStorage.setItem('task', JSON.stringify({ task, description }))
  console.log(task, description)
})