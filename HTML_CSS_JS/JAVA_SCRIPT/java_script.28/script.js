// // Сохраняем значение с ключом 'username'
// localStorage.setItem('username', 'serjio27');

// // Получаем значение по ключу 'username'
// const username = localStorage.getItem('username');

// // Удаляем значение с ключом 'username'
// localStorage.removeItem('username');

// // Выводим значение в консоль
// console.log(username); // 'serjio27'
// localStorage.setItem('username', 'serjio')
// localStorage.setItem('username2', 'yury19972')
// localStorage.setItem('username3', 'yury19973')
// const username1 = localStorage.getItem('username')
// // localStorage.removeItem('username')
// // localStorage.clear()

// const h1 = document.querySelector('.h1')
// const btn1 = document.querySelector('.btn')


// btn.addEventListener('click', () => {
//     h3.textContent = username1
// })


// localStorage.setItem('firstName', 'Serjio');
// localStorage.setItem('lastName', 'Hrytsenko');

// const firstName = localStorage.getItem('firstName');
// const lastName = localStorage.getItem('lastName');

// const infa = document.querySelector('.h3')
// infa.textContent = `Auf, ${firstName} ${lastName}!`

const form = document.querySelector('#form')
const btn = document.querySelector('#btn__value')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const target = e.target['input'].value
    localStorage.setItem('inputValue', target)
})
btn.addEventListener('click', () => {
    const value = localStorage.getItem('inputValue')
    console.log(value);
    
    document.querySelector('p').textContent = value
})
localStorage.removeItem('inputValue');
localStorage.clear()