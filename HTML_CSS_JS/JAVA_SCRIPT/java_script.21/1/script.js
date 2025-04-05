const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const form = document.querySelector('.form');
const mainInput = document.querySelector('#main__input');
const forms = document.querySelector('.forms')
const h3 = document.createElement('h3');



btn.addEventListener('click', (event) => {
    console.log(event);
});

container.addEventListener('click', (event) => {
    console.log(event);
});

container.addEventListener('click', () => {
    console.log('Hello WORLD');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target['0'].value);
    console.log(e);
    
});


// mainInput.addEventListener('input', (e) => {
//     console.log(e.target.value);
// })

// Напишите форму в которой 1 инпут и кнопка отправить. Надо вывести в консоль введенное в инпут по клику на кнопку
// const btn1 = document.querySelector('.btn1')
// const form1 = document.querySelector('.form1')
// const input1 = document.querySelector('.input1')

// input1.addEventListener('input', (e) => {
//     console.log(e.target.value);
    
// })





// 2. Теперь вывести на страницу в h3 по клику на кнопку отправить то, что пользователь написал в инпут
forms.addEventListener('submit', e=> {
e.preventDefault()
let value = e.target['input2'].value
// if (value.length > 0){
// h3.innerText = value
// }
h3.innerText = e.target['input2'].value
// e.target['input1'].value = ''
console.log(e.target['input2'].value);
forms.append(h3)

})



// Создайте форму с полем для ввода email и кнопкой "Отправить". Напишите JavaScript-функцию, которая будет вызываться при отправке формы. В функции проверьте, чтобы введенный email содержал символ "@". Если условие выполняется, выведите сообщение "Форма отправлена", в противном случае выведите сообщение "Введите корректный email".
// const btnE = document.querySelector('.btn_email')
// const formE = document.querySelector('.formE')
// const inputE = document.querySelector('#input_email')
// const text = document.createElement('h3')
// formE.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const v = e.target['input_email'].value;
//     if ((v.length > 0) && v.includes('@')) {
//         text.innerText = 'Форма отправлена';
//         inputE.insertAdjacentElement('afterend', text);
//     } else {
//         text.innerText = 'Введите корректный email';
//         inputE.insertAdjacentElement('afterend', text);
//     }
//     e.target['input_email'].value = '';
// })