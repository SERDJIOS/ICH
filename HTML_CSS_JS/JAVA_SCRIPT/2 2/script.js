// По подгрузке данных с jsonPlaceholder сделать всплывающее уведомление что все готово, если ошибка, так же вызываем уведомление но с текстом ошибки, ошибку отлавливаем в catch
// У вас есть 2 типа. Успех и ошибка, заголовок успеха один, ошибки - другой, текст тоже самое


const posts = document.querySelector('.quote')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const postTitle = document.querySelector('.postTitle')
const postDescription = document.querySelector('.postDescription')
const notification = document.querySelector('.notification')

let counter = 1
async function fetchPostsAPI(id) {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        const response = await fetch(url)
        if(!response.ok){
            throw new Error ("URL FEHLER)")
        }
        const data = await response.json()    
        postTitle.innerText = `${data.title}`; 
        postDescription.innerText = `${data.body}`; 
        constructorNotification("success", data.title, data.body)
        
    } catch (error) {
        console.error(error)
        constructorNotification("error")    
    }
    
}





fetchPostsAPI(counter)
btn2.addEventListener('click', () => {
    counter++
    fetchPostsAPI(counter)
})

btn1.addEventListener('click', () => {
    if (counter <=1) {
        fetchPostsAPI(1)
    } else {
        counter--
        fetchPostsAPI(counter)
    }
})

function constructorNotification(status,title=null,text=null) {
    notification.innerHTML = `
      <div
        class="notification notification--${status}"
      >
        <div class="notification__icon">
          <span class="material-symbols-rounded"> done </span>
        </div>
        <div class="notification__data">
          <div class="notification__title">${title ? title : 'Error'}</div>
          <div class="notification__text">${text ? text : 'Bad request'}</div>
        </div>
        <span class="material-symbols-rounded notification__close">
          close_small
        </span>
      </div>
    `
  }