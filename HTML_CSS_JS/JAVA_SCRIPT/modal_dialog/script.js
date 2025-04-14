const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.open-modal')
const closeModal = document.querySelector('#close')
const renderBtn = document.querySelector('.render')
const newPost = document.querySelector('.newPost')

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'
})

modal.addEventListener('click', e => {
  const target = e.target
  console.log(target)
  if (target === modal) {
    modal.style.display = 'none'
  }
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

async function fetchPostsApi() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=4'
    )
    if (!response.ok) {
      throw new Error('URL error')
    }
    const data = await response.json()
    data.forEach(item => {
      renderPosts(item)
    })
  } catch (error) {
    console.error(error)
  }
}

// fetchPostsApi()

function renderPosts(obj) {
  const posts = document.querySelector('.posts')
  const post = document.createElement('div')
  const postContent = document.createElement('div')
  const img = document.createElement('img')

  post.classList.add('post')
  postContent.classList.add('post_content')
  postContent.innerHTML = `
  <h3><span>Title:</span> ${obj.title}</h3>
  <p><span>Description:</span> ${obj.body}</p>`
  img.src = './catwoman.png'

  post.append(postContent, img)
  posts.append(post)
}

renderBtn.addEventListener('click', () => {
  const posts = document.querySelector('.posts')

  posts.innerHTML = ''

  fetchPostsApi()
})

newPost.addEventListener('submit', e => {
  e.preventDefault()

  const newBox = document.querySelector('.newBox')
  const createdPost = document.createElement('div')
  const createdContent = document.createElement('div')
  const img = document.createElement('img')

  const title = e.target['title'].value
  const description = e.target['description'].value

  createdPost.classList.add('createdPost')
  createdContent.classList.add('created_content')

  createdContent.innerHTML = `
  <h3><span>Title:</span> ${title}</h3>
  <p><span>Description:</span> ${description}</p>`
  img.src = './catwoman.png'

  createdPost.append(createdContent, img)
  newBox.append(createdPost)
  newPost.reset()
})



