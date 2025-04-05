const lastName = document.querySelector('#last_name')
const firstName = document.querySelector('#first_name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const error = document.querySelector('.error')


const form = document.querySelector('.form')




form.addEventListener('submit', function(e){
  e.preventDefault()
  const h5 = document.createElement('h5')
  error.innerHTML =''
  console.log(lastName.value)
  if (!email.value.includes('@') ){
    h5.innerText = 'Введите правильный емейл'
    error.appendChild(h5)
    return
  } 
  if (password.value.length < 6){
    h5.innerText = 'Длина пароля должна быть больше 6 символов'
    error.appendChild(h5)
    return
  } 
    h5.innerText = 'Данные отправлены'
    error.appendChild(h5)
    form.reset()
  
})