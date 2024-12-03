// // Создать функцию, которая будет отправлять несколько асинхронных запросов на сервер параллельно, используя Promise.all. Дождаться выполнения всех запросов и вернуть массив результатов в том порядке, в котором они были отправлены. 
// // // Использовать новый синтаксис(async/await) в этой во всех последующих задачах.
// const urls = [
//    ` https://jsonplaceholder.typicode.com/todos`,
//     `https://jsonplaceholder.typicode.com/comments`,
//     `https://jsonplaceholder.typicode.com/users`,
//     ]
//     async function fetchMultiplyApi(params) {
//       const fetchPromise = urls.map(item => fetch(item))
//       const allResponses = await Promise.all(fetchPromise)
//       const formatResponse = allResponses.map(item => item.json())
//       const finalFormat = await Promise.all(formatResponse)
//       console.log(finalFormat);
      
        
//     }
    
//     fetchMultiplyApi()


// //     https://jsonplaceholder.typicode.com/users
// // Вытащить на страницу username, email + отстилизовать
// // Рекомендация.
// // Отдельно сделать функцию рендера элемента и функцию fetch

async function fetchUserApi() {
const url = `https://jsonplaceholder.typicode.com/users`
const response = await fetch(url)
const data = await response.json()
data.forEach(item => renderUser(item))



}

fetchUserApi();
function renderUser(data) {
    const listItem = document.createElement('div')
    const title = document.createElement('h3')
    const title1 = document.createElement('h4')
    title.innerText = data.username 
    title1.innerText = data.email
    listItem.append(title,title1)
    const container = document.querySelector('.container')
    container.append(listItem)

}


const h3Element = document.createElement('h3')
document.body.appendChild(h3Element)

// async function fetchUse(params) {
//     const url =`https://jsonplaceholder.typicode.com/users`
//     const response = await fetch(url)
//     const data = await response.json()
//     const result = data.map(user => `${user.username} <br> ${user.useremail} <br>`).join("")
//     h3Element.innerHTML = result
    
// }
// fetchUse()
