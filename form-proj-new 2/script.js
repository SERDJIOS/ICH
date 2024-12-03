const form = document.querySelector('.form')
const loginForm = document.querySelector('#login-form')
const postForm = document.querySelector('.post-form')

const massage = document.createElement('div')
const title = document.querySelector('.signup__title')

function showMassage(string, color){
    massage.innerText = string
    massage.style.color = color
    form.insertAdjacentElement('beforeend', massage)
}

function showMassageLogin(string, color){
    massage.innerText = string
    massage.style.color = color
    loginForm.insertAdjacentElement('beforeend', massage)
}


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const emailValue = e.target['email'].value
    const passwordValue = e.target['password'].value
   
    const existingUser = JSON.parse(localStorage.getItem('users')) || []
    const userExist = existingUser.some((user) => user.email === emailValue)
    if(userExist){
        showMassage('User exists', 'red')
    } else {
        const newUser = {
            email: emailValue,
            password: passwordValue
        }
        existingUser.push(newUser)
        localStorage.setItem('users', JSON.stringify(existingUser))
        showMassage('user was reg', 'green')
        e.target.reset()
        form.style.display = 'none'
        loginForm.style.display = 'flex'
        title.textContent = 'You were loged in'
    }
})

loginForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const emailValue = e.target['loginEmail'].value
    const passwordValue = e.target['loginPassword'].value
   
    const existingUser = JSON.parse(localStorage.getItem('users')) || []
    const user = existingUser.find((user) => user.email === emailValue)
    console.log(user);
    
    if(user.email === emailValue && user.password === passwordValue) {
        localStorage.setItem('logedInUser', emailValue);
        postForm.style.display = 'block';
        console.log('success');
        showMassageLogin('Log in is successful', 'green');
    }else {
        showMassageLogin('This user doesnt exist', 'red');
    }
    
})
const todos = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
postForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const titleValue = e.target['title'].value
    const descriptionValue = e.target['descriptionValue'].value
   
    const newTask = { titel: titleValue, description: descriptionValue}

    todos.push(newTask)
    localStorage.setItem('tasks',JSON.stringify(todos))

    
})




