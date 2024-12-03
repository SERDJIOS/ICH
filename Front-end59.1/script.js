// https://jsonplaceholder.typicode.com/posts/

// Продолжить работу над функционалом переключения между постами. В качестве API использовать https://jsonplaceholder.typicode.com/posts/
// Страница должна содержать 2 кнопки (вперед, назад), которые переключают к следующему и предыдущему посту соответственно.
// При загрузке страницы должен отправляться запрос на получение поста с id=1.

// Написать функцию отрисовки постов.
// Написать слушатели события click для кнопок.
// Для первой кнопки добавить проверку на то, что post_number не равно нулю, чтобы не передавать на бэкенд отрицательное значение и избежать ошибки.

const btnLeft = document.querySelector('#btn-left')
const btnRight = document.querySelector('#btn-right')

let post_number = 1

async function fetchPostsAPI(id) {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('URL not found!')
    }
    const data = await response.json()
    renderPosts(data)
  } catch (error) {
    console.error(error)
  }
}

fetchPostsAPI(post_number)

function renderPosts(data) {
  const root = document.querySelector('#root')
  const title = document.createElement('h3')
  const comment = document.createElement('p')

  root.innerHTML = ''
  title.innerText = `Title: ${data.title}`
  comment.innerText = `Title: ${data.body}`

  root.append(title, comment)
}
btnRight.addEventListener('click', () => {
  post_number++
  fetchPostsAPI(post_number)
})

btnLeft.addEventListener('click', () => {
  if (post_number > 1) {
    post_number--
    fetchPostsAPI(post_number)
  }
})
