// Задача 1: Добавление параграфа на страницу
// Создайте функцию addParagraph, которая создает элемент <p> с текстом "Hello, World!" и добавляет его в конец тела документа.

function addParagraph (){
    const paragraph = document.createElement('p')
    paragraph.textContent = 'Hello, world!!';
    document.body.appendChild(paragraph);
}
addParagraph()



// Задача 2: Изменение текста заголовка
// Напишите функцию changeTitle, которая находит элемент с тегом <h1> и изменяет его текст на "New Title".
function changeTitle (){
    const title = document.querySelector('h1')
   if (title) {
    title.innerText = "New Title!!!"
    
   }
}
changeTitle ()



// Задача 3: Добавление элемента списка
// Создайте функцию addListItem, которая создает новый элемент списка <li> с текстом "New Item" и добавляет его в существующий список <ul> на странице.

function addListItem (){
    const addListItem = document.createElement('li');
    addListItem.textContent = "New Item!!!";
    const ul = document.querySelector('ul')
    ul.appendChild(addListItem)

}
addListItem();
    

// Задача 4: Замена содержимого div
// Напишите функцию replaceContent, которая находит элемент <div id="content"> и заменяет его содержимое на строку "New Content" с использованием innerHTML.
function replaceContent (){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `New Content`;
}
replaceContent ()
// Задача 5: Добавление кнопки с обработчиком
// Создайте функцию addButton, которая создает кнопку с текстом "Click me" и добавляет ее в документ. При клике на кнопку в консоль должно выводиться сообщение "Button clicked!".

function  addButton (){
    const button = document.createElement('button');
    button.innerText = "Click me";
    document.body.appendChild(button)
    button.onclick = function(){
        console.log("Button clicked!");
        
    };

}
addButton ()


// Задача 6: Удаление элемента
// Создайте функцию removeElement, которая удаляет элемент с классом .to-remove со страницы.

function removeElement (){
    const element = document.querySelector('.to-remove')
    if (element) element.remove();
    
    
}
removeElement ()


// Задача 7: Добавление нового заголовка
// Напишите функцию addNewHeader, которая создает элемент <h2> с текстом "New Header" и добавляет его в начало тела документа.
function addNewHeader (){
    const header = document.createElement('h2');
    header.innerText = "New Header";
    document.body.insertBefore(header,document.body.firstChild)
}
addNewHeader ()
// Задача 8: Вставка элемента перед другим
// Создайте функцию insertBeforeItem, которая добавляет новый элемент списка <li> с текстом "Before First" перед первым элементом в списке <ul>.
function insertBeforeItem() {
 const list = document.querySelector('ul');
 if (list){
    const listItem = document.createElement('li');
    listItem.textContent = "Before First";
    list.insertBefore(listItem, list.firstChild);
 }
}
insertBeforeItem();


// Задача 9: Изменение стиля элемента
// Напишите функцию changeStyle, которая находит элемент с классом .styled и изменяет его цвет текста на красный.
function changeStyle (){
    const newStyle = document.querySelector('.styled');
    if (newStyle) newStyle.style.color = "teal"
}
changeStyle ()
// Задача 10: Вложенный элемент
// Создайте функцию addNestedDiv, которая создает новый элемент <div>, внутри которого будет другой элемент <p> с текстом "Nested Paragraph", и добавляет этот <div> в тело документа 

function addNestedDiv() {
    const outerDiv = document.createElement('div');
    const innerParagraph = document.createElement('p');
    innerParagraph.textContent = "Nested Paragraph";
    outerDiv.appendChild(innerParagraph);
    document.body.appendChild(outerDiv);
}
addNestedDiv();
