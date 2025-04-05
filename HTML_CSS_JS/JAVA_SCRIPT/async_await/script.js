
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


// Получение списка пользователей:
// Напишите функцию, которая использует async/await для получения списка пользователей с JSONPlaceholder (https://jsonplaceholder.typicode.com/users).
// Выведите список имен пользователей в консоль.
async function fetchUsersApi() {
    const url = `https://jsonplaceholder.typicode.com/users`
    const response = await (await fetch(url)).json()
    const result = response.map(item => item.name)
    console.log(result);
    
}
fetchUsersApi(1)




// Посты определенного пользователя:
// Напишите функцию, которая принимает userId и с помощью async/await получает все посты этого пользователя (https://jsonplaceholder.typicode.com/posts?userId=USER_ID).
// Выведите заголовки постов на страницу.
function renderPost(item) {
    const title = document.createElement('p');
    title.innerText = item.title;
    document.body.append(title);
}

async function fetchPostApi(userId) {
    const url = `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`
    const response = await (await fetch(url)).json()
    response.forEach(item => renderPost(item))
    
}
fetchPostApi(1)

// Комментарии к посту:
// Напишите функцию, которая принимает postId и с помощью async/await получает все комментарии к этому посту (https://jsonplaceholder.typicode.com/comments?postId=POST_ID).
// Отобразите комментарии на странице.
// Функция для отображения комментариев на странице
async function getComments(POST_ID) {
    const comments = await userComms(POST_ID);
    const commentsTitle = document.createElement('h2');
    commentsTitle.innerText = "Comments!!!!";
    document.body.appendChild(commentsTitle);

    comments.forEach(comment => {
        const bodyElement = document.createElement('p');
        bodyElement.innerText = comment.body;
        document.body.appendChild(bodyElement);
    });
}

async function userComms(POST_ID) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${POST_ID}`;
    const response = await fetch(url);
    return await response.json();
}

// Вызов функции для отображения комментариев поста с ID 1
getComments(1);



// Создание нового поста:
// Напишите функцию, которая создает новый пост через POST-запрос на JSONPlaceholder (https://jsonplaceholder.typicode.com/posts).
// Используйте async/await и отправьте данные через fetch.
// Выведите ответ сервера в консоль.

// Функция для создания нового поста через POST-запрос
async function createPost() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: "My New Post",
            body: "This is the content of my new post.",
            userId: 1
        })
    });

    const responseData = await response.json();
    console.log(responseData);
}
createPost();





// Обновление поста:
// Напишите функцию для обновления поста (PUT запрос) через JSONPlaceholder (https://jsonplaceholder.typicode.com/posts/POST_ID).
// Используйте async/await и измените, например, заголовок поста.
// Отобразите результат на странице.

// Удаление поста:
// Напишите функцию, которая удаляет пост через async/await (DELETE запрос на https://jsonplaceholder.typicode.com/posts/POST_ID).
// Подтвердите успешное удаление, отобразив сообщение на странице.

// Получение списка задач:
// Напишите функцию, которая с помощью async/await получает список задач (https://jsonplaceholder.typicode.com/todos).
// Отфильтруйте задачи, которые не завершены, и отобразите их на странице.

// Фильтрация пользователей по имени:
// Напишите функцию, которая получает список пользователей и фильтрует тех, у кого имя начинается с определенной буквы.
// Используйте async/await для получения данных и отобразите результаты на странице.

// Множественные запросы:
// Напишите функцию, которая параллельно запрашивает список пользователей и список постов (Promise.all).
// Используйте async/await и объедините пользователей с их постами по userId.
// Отобразите данные на странице в виде списка.

// Запрос с ошибкой:
// Напишите функцию, которая намеренно делает запрос на несуществующий ресурс на JSONPlaceholder.
// Обработайте ошибку с использованием try/catch и отобразите сообщение об ошибке на странице.