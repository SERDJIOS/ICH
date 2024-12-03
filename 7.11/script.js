//const url = 'https://jsonplaceholder.typicode.com/users'
//fetch(url)
//.//then((res) => {
//   return res.json()
//})
//.then((data) => console.log(data))

//fetch(url, {
 //   method: 'POST',
 //   headers: {
 //       'Content-Type': 'application/json',
  //  },
   // body: JSON.stringify({
//        name: 'Jey-Jey',
 //       username: '45445dsds',
//        email: 'hjh@gmail.com'
 //   })
//}) 
//.then((res) => {
//    return res.json
//})

//.then (data => console.log(data))

//function renderPost(post) {
 //   const div = document.createElement('div')
 //   const title = document.createElement('h3')
 //   const paragraph = document.createElement('p')
//    title.innerText = post.title
 //   paragraph.innerText = post.body
 //   console.log(post)
 //   div.append(title, paragraph)
 //   document.body.append(div)
    
//}

//fetch('https://jsonplaceholder.typicode.com/posts')
//.then((res) => res.json())
//.then((post) => {
 //   post.forEach((item) => {
 //       renderPost(item)  
 //   })
//})



const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    e.preventDefault()
    const username = document.querySelector('.username').value
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value
    const obj = {
        username, email, password
    }
    fetch(url, {
        method: 'POST',
       headers: {
           'Content-Type': 'application/json',
        },
        body: 
        JSON.stringify(obj)
        
    }) 
    .then((res) => {return res.json()})
    .then((data) => {randerUser(data)})
    document.querySelector('.username').value = ''
    document.querySelector('.email').value = ''
    document.querySelector('.password').value = ''
})

function randerUser(user) {
    const username = document.createElement('h3')
    const email = document.createElement('h3')
    const password = document.createElement('h3')
    username.innerText = user.username
    email.innerText = user.email
    password.innerText = user.password
    const container = document.querySelector('.container')
    container.append(email, username, password)
}