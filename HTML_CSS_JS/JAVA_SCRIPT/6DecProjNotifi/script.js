const posts = document.querySelector('.quote');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const postTitle = document.querySelector('.postTitle');
const postDescription = document.querySelector('.postDescription');
const notificationsContainer = document.querySelector('#notificationsContainer');
const cats = document.querySelector('.cats')
const modal = document.querySelector('.modal')

cats.addEventListener('click', ()=>{
    modal.style.display = 'flex'

})

//  показ уведомлений
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.classList.add('notification', `notification--${type}`);

    notification.innerHTML = `
        <div class="notification__icon">
            <span class="material-symbols-rounded">${type === 'success' ? 'done' : 'error'}</span> 
        </div>
        <div class="notification__data">
            <div class="notification__title">${type === 'success' ? 'Success' : 'Error'}</div>
            <div class="notification__text">${message}</div>
        </div>
        <span class="notification__close">&times;</span>
    `; // условие ? значение_если_истина : значение_если_ложь

    notificationsContainer.appendChild(notification);

    // уведомление через 4 секунды
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

let counter = 1;

//  посты с API
async function fetchPostsAPI(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка в урл');
        }

        const data = await response.json();
        postTitle.innerText = `${data.title}`;
        postDescription.innerText = `${data.body}`;

        showNotification('Post loaded successfully', 'success');
    } catch (error) {
        showNotification(`Error: ${error.message}`, 'error');
    }
}


fetchPostsAPI(counter);

// 
btn2.addEventListener('click', () => {
    counter++;
    fetchPostsAPI(counter);
});


btn1.addEventListener('click', () => {
    if (counter <= 1) {
        fetchPostsAPI(1);
    } else {
        counter--;
        fetchPostsAPI(counter);
    }
});