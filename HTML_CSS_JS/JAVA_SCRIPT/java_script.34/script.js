// const p1 = new Promise((res, rej) => {
//     setTimeout(res, 3000, 'John')
// })

// const p2 = 'Hello'
// const p3 = Promise.resolve(33)
// const p4 = Promise.reject('error is here')

// Promise.all([p1, p2, p3, p4])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch(error => {
//         console.log(error)
//     })

//     Создайте три функции fetchData1, fetchData2 и fetchData3, каждая из которых возвращает Promise
// с имитацией загрузки данных с сервера, все три функции должны резолвиться через
// определенное кол-во времени: 2000 1500 и 1000 миллисекунд. Используя Promise.all(), создайте
// функцию loadAllData, которая одновременно загружает данные из всех трех ресурсов и
// возвращает массив с результатами.

// function fetchData1() {
//     return new Promise((res, rej) => {
//         setTimeout(() => res('Data is loaded 1'), 2000);
//     });
// }

// function fetchData2() {
//     return new Promise((res, rej) => {
//         setTimeout(() => res('Data is loaded 2'), 1500);
//     });
// }

// function fetchData3() {
//     return new Promise((res, rej) => {
//         setTimeout(() => res('Data is loaded 3'), 1000);
//     });
// }

// function fetchData4() {
//     return new Promise((res, rej) => {
//         setTimeout(() => rej('ERROR'), 500);
//     });
// }

// Promise.all([fetchData1(), fetchData2(), fetchData3()])
//     .then(res => console.log(res))
//     .catch(err => {
//         console.log(err);
//     });

const p1 = new Promise((res, rej) => {
  setTimeout(res, 1000, "Hello p1");
});

const p2 = Promise.resolve("Hello p2");
const p4 = Promise.reject("error is here");

Promise.allSettled([p1, p2, p4]).then((res) => {
  console.log(res);
});


// Создайте две функции fetchDataFast и fetchDataSlow, каждая из которых возвращает промис с имитацией загрузки данных с сервера (например можно использовать setTimeout который срабатывает через 2 секунды). Используя Promise.race, определите, какая из функций загрузит данные быстрее. Выведите результат в консоль.
function fetchDataFast() {
  return new Promise((res) => {
    setTimeout(() => res("tut bistree"), 1000);
  });
}

function fetchDataSlow() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("tut medlenee"), 2000);
  });
}

Promise.race([fetchDataFast(), fetchDataSlow()]).then((result) => {
  console.log("сюда", result);
});



// Создайте три функции tryOperation1, tryOperation2, и tryOperation3, каждая из которых возвращает промис с имитацией попытки выполнить операцию (например можно использовать setTimeout который срабатывает через 2 секунды). Используя Promise.any, определите, какая из функций завершится успешно первой. Выведите результат в консоль.
function tryOperation1 (){
    return new Promise((resolve, reject) => {
        setTimeout (()=> resolve('uspech'), 1000)
    })
}
function tryOperation2 (){
    return new Promise((resolve, reject) => {
        setTimeout (()=> resolve('tut bistree'), 500)
    })
}
function tryOperation3 (){
    return new Promise((resolve, reject) => {
        setTimeout (()=> reject('ne uspech'), 3000)
    })
}
Promise.any([tryOperation1(), tryOperation2(), tryOperation3()])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    console.log("=====================================");
    
    
    const p5 = new Promise((res) => res('hello world'))
    console.log(p5);
    p5.then(res => console.log(res))


    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
    async function fetchFn() {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        console.log(data)
    }
    fetchFn()

    console.log("=====================================");
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then(response ⇒ response.json())
//  .then(json ⇒ console.log(json))




fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers:  {"Content-Type": "application/json"},
    body: JSON.stringify({
        "title": "HELLO VLADIMIR",
        "completed": true
    })
})
.then(res => res.json())
.then(res => console.log(res))
console.log("=====================================");


// Используя fetch сделать запрос на https://jsonplaceholder.typicode.com/todos и после получения ответа вывести все id туду в консоль.

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => data.forEach(todo => console.log(todo.id)))

