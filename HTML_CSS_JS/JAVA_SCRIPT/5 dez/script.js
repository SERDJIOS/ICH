const newPost = document.querySelector('.newPost')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')

let counter = 1
async function fetchPosts(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    renderPost(data)
  } catch (error) {
    console.log(error)
  }
}
fetchPosts(1)

function renderPost(obj) {
  const title = document.createElement('p')
  const description = document.createElement('p')
  title.innerHTML = `<b>Title: </b> ${obj.title}`
  description.innerHTML = `<b>Description: </b> ${obj.body}`
  newPost.append(title, description)
}
