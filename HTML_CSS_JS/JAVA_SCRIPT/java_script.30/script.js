// console.log(window);
// function getCurrentData() {
//     const date = new Date()
//     const year = date.getFullYear()
//     //padstart - кладет в начало строки какое то определенное кол во символов работает со строкой только и в качестве аргумента принимает максимальную величину строки, какой она должна стать, а вторым аругументом - символ в начало
//     const month = String(date.getMonth() + 1).padStart('2', 0)
//     const day = String(date.getDate()).padStart('2', 0)
//     return `сегодня: ${day}-${month}-${year}`
// }
// console.log(getCurrentData())


const btn = document.querySelector('#theme-toggle');
const html = document.querySelector('html');
const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btn-container');
const btnContainer1 = document.querySelector('.btn-container1');

// Устанавливаем сохранённую тему при загрузке страницы
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Переключение темы по клику
btn.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Устанавливаем значение в container, если оно сохранено в localStorage
const savedName = localStorage.getItem('myName');
if (savedName) {
    container.innerText = savedName;
}

// Сохраняем значение "Serjio" в localStorage по нажатию кнопки
btnContainer.addEventListener('click', () => {
    localStorage.setItem('myName', 'Serjio');
    container.innerText = 'Serjio';
});

btnContainer1.addEventListener('click',()=>{
    container.innerText ='';
    localStorage.removeItem('savedName');
})


// Добавить значение инпута в Локал сторадж, вывести на страницу значение из локального хранилища и при обновлении чтоб сохранялось значение. Так же добавить кнопку по клику на которую будем убирать из локального хранилища и страницы данное значение

const input = document.querySelector('#input')
const displayBtn = document.querySelector('.displayLoginName')
const save = document.querySelector('.save')
const clearLoginName = document.querySelector('.clearLoginName')
const inputValue = localStorage.getItem('inputValue')
if(inputValue){
    save.innerText = inputValue
}


displayBtn.addEventListener('click', () => {
    console.log(input.value);
    save.innerText = input.Value
    const value = localStorage.getItem('inputValue')
    if(value){
        save.innerText = value
    }else{
        localStorage.setItem('inputValue',input.value )
    }
})
clearLoginName.addEventListener('click', () => {
    localStorage.removeItem('inputValue'); // Удаление из localStorage
    save.innerText = ''; // Очистка отображаемого текста
});


const obj = {
    a: 5,
    b: 7
}
// ЛХ - локальное хранилище
//локальное хранилище принимает только строки в качестве значени
//JSON.stringify - превращение объекта в строку так как ЛХ принимает только строки
localStorage.setItem('keyObj', JSON.stringify(obj))
const storedObj = localStorage.getItem('keyObj')
//JSON.parse - превращает обратно из строки в объект
const parsedObj = JSON.parse(storedObj)
console.log(parsedObj);


// Передать в ЛХ setItem и вытащить в консоль через getItem. Использовать новые JSON.stringify, JSON.parse
const arr = [
    {
        id: 1,
        titel: 'hello',
        description: 'hello world'
    },
    {
        id: 2,
        titel: 'hello2',
        description: 'hello world2'
    }, {
        id: 3,
        titel: 'hello3',
        description: 'hello world3'
    },
]
localStorage.setItem( 'arrobj', JSON.stringify(arr));
const storeArray = localStorage.getItem('arrobj')
const parseArray = JSON.parse(storeArray)
console.log(parseArray);

console.log("==================================");

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = e.target["username"].value;
    const email = e.target["email"].value;
    const data = { username: username, email: email };
    console.log(data);
    localStorage.setItem("dataObj", JSON.stringify(data));

    const pUsername = document.createElement('p');
    const pEmail = document.createElement('p');
    const storedObj = JSON.parse(localStorage.getItem('dataObj'));

    pUsername.innerText = storedObj.username;
    pEmail.innerText = storedObj.email;

    form.insertAdjacentElement('afterend', pUsername);
    form.insertAdjacentElement('afterend', pEmail);
});
