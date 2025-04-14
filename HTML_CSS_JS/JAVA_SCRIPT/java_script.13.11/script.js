// async function fetchCommentsApi() {
//     const url = 'https://jsonplaceholder.typicode.com/comments'; // замените на нужный URL
//     const data = await (await fetch(url)).json();
//     console.log(data);
// }

// fetchCommentsApi();

// // 1. объявление асинхронной функции async
// async function fetchCommentsApiTry() {
//     //2. оборачиваем будущую логику в try catch 
//   try {
//     const url = `https://jsonplaceholder.typicode.com/commentss`;
//     // 3. Отправляем запрос сразу обрабатывая промис через await
//     const response = await fetch(url)
//     // 4. Обрабатываем ошибку запроса, если сам по себе запрос падает (не верный адрес, либо сервер не работает),
//     //  то мы натыкаемся на этот блок.
//     //  Используется для отлова именно ошибки запроса
//     if(!response.ok) {
//         throw new Error('there is nothing in this address')
//     }
//     //5. получение самих данных и обработка объекта response
//     const data = await response.json()
//     //в данном варианте мы намеренно совершаем ошибку не связанную с запросом и нас переводит на блок catch
//     console.log(datascas);
    
//     //catch отрабатыват в случае, если запрос отправлен успешно, но косяки были при реализации логики
//   } catch (error) {
//     console.error(error);

//     blok finaly vipolnitsya v lyubom sluchae
//   } finally {
//     console.log('block will be done anyways');
//   }
// }

// //вызов функции
// fetchCommentsApiTry()

// async function fetchCommentsApi() {
//     const url = `https://jsonplaceholder.typicode.com/commenjnjnts`;
//     const response = await fetch(url);
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   }
  
  
//   // 1. объявление асинхронной функции async
//   async function fetchCommentsApiTry() {
  
//       //2. оборачиваем будущую логику в try catch 
//     try {
  
//       const url = `https://jsonplaceholder.typicode.com/comments`;
//       // 3. Отправляем запрос сразу обрабатывая промис через await
//       const response = await fetch(url)
//       // 4. Обрабатываем ошибку запроса, если сам по себе запрос падает (не верный адрес, либо сервер не работает),
//       //  то мы натыкаемся на этот блок.
//       //  Используется для отлова именно ошибки запроса
//       if(!response.ok) {
//           throw new Error('there is nothing in this address')
//       }
//       //5. получение самих данных и обработка объекта response
//       const data = await response.json()
//       //в данном варианте мы намеренно совершаем ошибку не связанную с запросом и нас переводит на блок catch
//       console.log(data);
      
//       //catch отрабатыват в случае, если запрос отправлен успешно, но косяки были при реализации логики
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   fetchCommentsApiTry()


// async function fetchPostApi (){
//     try{
//         const url = `https://jsonplaceholder.typicode.com/posts`;
//         const response = await fetch(url)
//         if(!response.ok){
//             throw new Error('server error')
            
//         }
//         const data = await response.json()
//         console.log(data);
        
        
//     }catch(error){
//         console.error(error)
//     }
// }
// fetchPostApi ()


// Ссылка должно через / принимать параметр id который мы передаем в функцию

// async function fetchPostId(id) {
//     try{
//         const url = `https://jsonplaceholder.typicode.com/posts${id}`
//         // const response = await fetch(url)

//         console.log(response);
        
//         if(!response.ok){
//             throw new Error('server error noch mal')
//     }
//     const data = await response.json()
//     console.log(data);
    
//     }catch(error){
//         console.error(error)
//     }
    
// }
// fetchPostId(1) 
// fetchPostId(2) 


/////
// https://jsonplaceholder.typicode.com/posts/?_limit=10
////

async function fetchApiComent(){
    try {
        const url = `https://jsonplaceholder.typicode.com/comments`
        const response = await fetch(url)

        if(!response.ok){
            throw new Error ('server error noch mal')
        }
        const data = await response.json()
        console.log(data);
        

    }catch(error){
        console.error(error)
    }
}
fetchApiComent()

async function fetchApiId (id){
    try{
        const url = `https://jsonplaceholder.typicode.com/comments/${id}`
        const response = await fetch(url)

        if(!response.ok){
            throw new Error ('server error noch mal')
        }
        const data = await response.json()
        console.log(data);
        

    }catch(error){
        console.error(error)
    }
}
fetchApiId(1)
fetchApiId(12)


async function fetchApiFotos () {
    try {
        const url = `https://jsonplaceholder.typicode.com/photos`
        const response = await fetch (url)

        if(!response.ok){
            throw new Error ('server error noch mal')
        }
        const data = await response.json()
        console.log(data);
        
    
    }catch(error){
        console.error(error)
    }finally {
        console.log('anyways');
        
    }
    
}
fetchApiFotos () 

async function fetchApiFotosId (id) {
    try {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`
        const response = await fetch (url)

        if(!response.ok){
            throw new Error ('server error noch mal')
        }
        const data = await response.json()
        console.log(data);
        
    
    }catch(error){
        console.error(error)
    }finally {
        console.log('anyways');
        
    }
    
}
fetchApiFotosId (1) 
fetchApiFotosId (6) 



async function fetchApiFotosId (id) {
    try {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`
        const response = await fetch (url)

        if(!response.ok){
            throw new Error ('server error noch mal')
        }
        const data = await response.json()
        console.log(data);
        
    
    }catch(error){
        console.error(error)
    }finally {
        console.log('anyways');
        
    }
    
}
fetchApiFotosId (1) 
fetchApiFotosId (6) 


async function fetchApiFotosId1 (id) {
    try {
        const url = `https://jsonplaceholder.typicode.com/photos/?_limit=3${id}`
        const response = await fetch (url)

        if(!response.ok){
            throw new Error ('server error noch mal')
        }
        const data = await response.json()
        console.log(data);
        
    
    }catch(error){
        console.error(error)
    }finally {
        console.log('anyways');
        
    }
    
}
fetchApiFotosId1 (1) 
 
async function fetchApiPhotosById(id) {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    const cat = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error('there is a mistake')
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    } finally {
        const response = await fetch(cat)
        if(!response.ok) {
            throw new Error('there is a second error')
        }
        const data = await response.json()
        console.log(data)
    }
}
fetchApiPhotosById(3)