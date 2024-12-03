// Учебный проект —
// это регламентированная практическая работа,
// которая поможет вам повторить то, что вы изучили к
// текущему моменту прохождения курса, отработать
// навыки и получить первый кейс в портфолио.

// Описание концепции
// Рассмотреть работу с объектами в localStorage на примере разработки проекта регистрации и авторизации.
// Необходимо реализовать функционал регистрации и авторизации с помощью localstorage, где localstorage
// выступает в роли базы данных.

// Общие требования
// ● Реализовать формы регистрации и логина.
// ● Данные зарегистрированных пользователей хранить в массиве объектов в localStorage.
// ● Для обеих форм сделать проверку на пустые поля при отправке.
// ● При вводе неверного логина или пароля выводить сообщение об ошибке.
// ● При успешном логине и регистрации выводит сообщение и очищать поля.

const inputName = document.querySelector('.name')
const inputPhone = document.querySelector('.phone')
const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.password')
const singupBtn = document.querySelector('.signup')
const notification = document.createElement('p')

const checkNameError = document.createElement('p')
const checkPhoneError = document.createElement('p')
const checkEmailError = document.createElement('p')
const checkPasswordError = document.createElement('p')

inputName.insertAdjacentElement('afterend', checkNameError)
inputPhone.insertAdjacentElement('afterend', checkPhoneError)
inputEmail.insertAdjacentElement('afterend', checkEmailError)
inputPassword.insertAdjacentElement('afterend', checkPasswordError)

const users = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : []

function nameValidation() {
  checkNameError.innerText = ''
  checkNameError.style.color = 'red'
  const re = /[a-zA-Z]/
  if (!inputName.value.match(re)) {
    checkNameError.innerText = 'Имя должно быть только буквы'
  } else if (inputName.value.length < 2) {
    checkNameError.innerText = 'Name should have more than 2 letters'
  } else if (inputName.value.length > 24) {
    checkNameError.innerText = 'Name should have less than 24 letters'
  } else {
    return true
  }
}

function phoneValidation() {
  checkPhoneError.innerText = ''
  checkPhoneError.style.color = 'red'
  const re = /[0-9]+/
  if (inputPhone.value[0] !== '+') {
    checkPhoneError.innerText = 'Number start with "+"'
  } else if (!inputPhone.value.match(re)) {
    checkPhoneError.innerText = 'должны быть только числа'
  } else if (inputPhone.value.length < 8) {
    checkPhoneError.innerText = 'min 8 numbers'
  } else if (inputPhone.value.length > 12) {
    checkPhoneError.innerText = 'click 12 numbers'
  } else {
    return true
  }
}

function emailValidation() {
  checkEmailError.innerText = ''
  checkEmailError.style.color = 'red'
  if (!inputEmail.value.includes('@')) {
    checkEmailError.innerText = 'Email should incluce "@"'
  } else if (inputEmail.value.length < 7) {
    checkEmailError.innerText = 'Should have more than 7 symbols'
  } else {
    return true
  }
}

function passwordValidation() {
  checkPasswordError.innerText = ''
  checkPasswordError.style.color = 'red'
  if (inputPassword.value.length < 5) {
    checkPasswordError.innerText = 'Password should have more than 5 symbols'
  } else if (inputPassword.value.length > 26) {
    checkPasswordError.innerText = 'Password should have more than 26 symbols'
  } else {
    return true
  }
}

singupBtn.addEventListener('click', () => {
  nameValidation()
  phoneValidation()
  emailValidation()
  passwordValidation()
  if (
    nameValidation() &&
    phoneValidation() &&
    emailValidation() &&
    passwordValidation()
  ) {
    let isError = false
    users &&
      users.forEach(item => {
        if (item.email === inputEmail.value) {
          isError = true
        }
      })
    if (isError) {
      notification.innerText = 'User with this email exists'
      notification.style.color = 'red'
    } else {
      const userData = {
        name: inputName.value,
        phoneNumber: inputPhone.value,
        email: inputEmail.value,
        password: inputPassword.value,
      }
      users.push(userData)
      localStorage.setItem('users', JSON.stringify(users))
      inputName.value = ''
      inputPhone.value = ''
      inputEmail.value = ''
      inputPassword.value = ''

      notification.innerText = 'You are succesfully signup'
      notification.style.color = 'green'
    }
  } else {
    notification.innerText = 'All fields are required'
    notification.style.color = 'red'
  }
  document.body.appendChild(notification)
})

const loginInputEmail = document.querySelector('.emailLogin')
const loginInputPassword = document.querySelector('.passwordLogin')
const loginBtn = document.querySelector('.login')

loginBtn.addEventListener('click', () => {
  let isLoginError = true
  users.forEach(item => {
    if (
      loginInputEmail.value === item.email &&
      loginInputPassword.value === item.password
    ) {
      isLoginError = false
    }
  })
  if (isLoginError) {
    if (loginInputEmail.value === '' || loginInputPassword.value === '') {
      notification.innerText = 'All fields are required'
      notification.style.color = 'red'
    } else {
      notification.innerText = 'Email or password is incorrect'
      notification.style.color = 'red'
    }
  } else {
    loginInputEmail.value === ''
    loginInputPassword.value === ''
    notification.innerText = 'You successfully login'
    notification.style.color = 'green'
    document.body.innerHTML = `<p>Hello, people</p>`
    const btnLogout = document.createElement('button')
    btnLogout.innerText = 'Logout'
    document.body.append(btnLogout)
  }
  document.body.appendChild(notification)
})
