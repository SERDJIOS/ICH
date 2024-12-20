// Задача 1: Создание кнопки с выводом сообщения
// Создайте кнопку с текстом "Click me". При клике на кнопку в консоль должно выводиться сообщение "Button clicked!".
const buttonApi = document.getElementById('btn');
btn1.addEventListener('click',() => { 
 console.log("Button clicked!");
 
})




// Задача 2: Создание списка с удалением элементов
// Создайте список из трёх элементов (li). Каждому элементу добавьте кнопку "Удалить". При клике на кнопку соответствующий элемент списка должен удаляться.
const deleteBtn = document.querySelectorAll('.button');
deleteBtn.forEach(button =>{
    button.addEventListener('click', (e)=>{
        e.target.parentElement.remove();
    });
});


// Задача 3: Добавление новых элементов списка
// Создайте кнопку с текстом "Добавить элемент". При клике на кнопку в конец списка добавляется новый элемент списка с текстом "New Item".
const btn1 = document.querySelector('.newElement');
const list = document.querySelector('.element');
btn1.addEventListener('click', () => {
    const newList = document.createElement('li');
    newList.textContent = "New Item";
    list.appendChild(newList)
});



// Задача 4: Переключение класса по клику
// Создайте блок <div> с текстом "Click to toggle". При клике на этот блок добавьте/удалите класс, который изменяет его цвет.
const toggleDiv = document.querySelector('.toggleDiv');
toggleDiv.addEventListener('click', () => {
    toggleDiv.classList.toggle('highlight');
});


// Задача 5: Создание галереи изображений
// Создайте кнопку "Добавить изображение". При клике на кнопку добавляется новое изображение на страницу.

// Задача 6: Изменение текста элемента по клику
// Создайте несколько элементов списка (li). При клике на любой элемент его текст должен изменяться на "Clicked!".

// Задача 7: Увеличение счетчика кликов
// Создайте кнопку с текстом "Click me". При каждом клике на кнопку увеличивайте счетчик кликов и выводите его в параграф под кнопкой.

// Задача 8: Создание элемента с событием удаления
// Создайте кнопку с текстом "Добавить элемент". При клике на кнопку создается новый элемент списка, который содержит текст "New Item". Каждый новый элемент списка также должен содержать кнопку "Удалить", которая удаляет этот элемент при клике.

// Задача 9: Отображение скрытого текста по клику
// Создайте кнопку "Показать текст" и блок <p> с текстом, который изначально скрыт (с display: none). При клике на кнопку текст должен становиться видимым.

// Задача 10: Смена изображения по клику
// // Создайте элемент изображения и кнопку "Сменить изображение". При клике на кнопку меняйте изображение на другое.