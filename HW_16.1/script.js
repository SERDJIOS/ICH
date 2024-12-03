
// Задание 1
// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1. Результат вывести в консоль.

async function fetchToddosApi(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await (await fetch(url)).json()
    console.log(response);
    
    
}
fetchToddosApi(1)


// Задание 2
// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts. Ответ должен содержать 10 элементов (query-параметр _limit). Результат вывести в консоль.
async function fetchPostApi() {
    const url = `https://jsonplaceholder.typicode.com/posts?_limit=10`
    const response = await (await fetch(url)).json()
    console.log(response);
    
    
}
fetchPostApi()