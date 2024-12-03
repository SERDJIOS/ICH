async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
  }
  
  fetchUsers();
  
  const asyncFn = async () =>{
    const data = await...
  }
  let newData;
// в таком случае не удастся достать результат возвращения промисса и использовать вне контекста fetch. Проблема решается функцией
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    newData = data
    console.log(newData);
    
  })
 function fetchBasicApi() {
        const url = `https://jsonplaceholder.typicode.com/users`
        return fetch(url)
    }
    
    fetchApi()
    
    fetchBasicApi()
        .then(res => res.json())
        .then(data => console.log(data))



    
    async function fetchApi () {
       const url = `https://jsonplaceholder.typicode.com/users`
       const response = await fetch(url)
       const data = await response.json()
       console.log(data);
       return data
       
   
    }
    fetchApi()

    const renderData = async ()=>{
         // ...логика отображения данных на странице
         const result = await fetchApi()
         console.log(result);
         
    }
renderData()


async function fetchUserApi (){
    const url = `https://jsonplaceholder.typicode.com/users`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    
}

fetchUserApi ()

// async function postApi() {
//     const url =`https://jsonplaceholder.typicode.com/posts/`
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data);
    
// }
// postApi()



async function postApi() {
    const url =`https://jsonplaceholder.typicode.com/posts`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    
}
postApi()


async function todos(id) {
    const url =`https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    
}
todos(1)

async function todosA(id) {
    const url =`https://jsonplaceholder.typicode.com/todos/3`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    
}
todosA()



const fetchTodoApi = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const result = fetchTodoApi(1)

console.log(result);

const result = fetchTodoApi(1)

Первый вариант обработки того что возвращает функция - then catch
result.then(response => console.log(response))

второй вариант - вернуть в новой функции
 async function someLogic() {

    const newData = await fetchTodoApi(1)
    console.log(newData);
    
}

someLogic()


const urls = [
    `https://jsonplaceholder.typicode.com/todos`,
    `https://jsonplaceholder.typicode.com/comments`,
    `https://jsonplaceholder.typicode.com/users`,
    ];

    async function fetchMultiplyApi(){
        const fetchPromise = urls.map(item => fetch(urls))
        const allResponses = Promise.all(fetchPromise)
        const formatRespons = allResponses.map(item => item.json())
        const finalFormat = await Promise.all(formatRespons)
        console.log(finalFormat);
        
    }
    fetchMultiplyApi()