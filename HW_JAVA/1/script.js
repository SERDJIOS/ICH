// Задание 1 
// Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1, в блоке catch сделать вывод консоль сообщения об ошибке. Для проверки блока catch сделать намеренную ошибку в url запроса.

async function fetchApiPostsId (id) {
    try {
        const url = `https://jsonplaceholder.typicode.com/postsццц?userId=1`
        const response = await fetch (url)

        if(!response.ok){
            throw new Error ('server error noch mal')
        }
        const data = await response.json()
        console.log(data);
        
    
    }catch(error){
        console.error(error)
    }finally {
        console.log('опача');
        
    }
    
}
fetchApiPostsId (1) 


// Задание 2
// Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль.

async function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("nu i dela");
        }
        return a / b;
    } catch (error) {
        console.error('error.message');
    }
}

// Пример использования
(async () => {
    const result = await divide(10, 0);
    console.log(result); 
})()

