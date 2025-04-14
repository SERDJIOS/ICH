const btn = document.querySelector("#btn");
const form = document.querySelector("#form");
const text = document.querySelector(".text");
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let userdata = e.target[0].value
//     const newEl = document.createElement('div')
//     newEl.innerText = userdata
//     document.body.insertAdjacentElement('beforeend', newEl)
//     e.target[0].value = ''
// })

// 1. element.addEventListener - вызываем слушатель события, он принимает 2 аргумента: событие(нап. click, onmouseover, onmouseend, keydown и тд) и слушатель (listener). Listener - это коллбек () => {}
// 2. e.target - внутренности вашего элемента, то, из каких свойств состоит этот объект (элемент), пример на 4 строке
// 3. При работе с формами мы должны сбрасывать дефолтное поведение элемента, например, e.preventDefault()
// 4. Существую методы добавления удаления элементов из дом дерева: append,insertAdjacentElementm, remove(), lastChild, appendChild, textContent, innerHTML, innerText, setAttribute('src', 'путь')
// 5.style

// btn.addEventListener("click", () => {
//   //если применяется много инлайн стилей за раз, лучше писать не в строку напрямую через style, а через setAttribute
// //   text.setAttribute(
// //     "style",
// //     `
// //         background: white;
// //         padding: 10px;
// //         border-radius: 8px;
// //         border: 1px solid black;
// //         display: none
// //     `
// //   );
//     text.style.cssText =     `
//     background: white;
//     padding: 10px;
//     border-radius: 8px;
//     border: 1px solid black;
// `
//   document.body.style.background = "red";
// });

// У вас есть элемент, задайте ему базовые значения ширины, высоты и цвета фона. При клике на кнопку измените его ширину на 100px с использованием setAttribute.
// У вас есть элемент. При клике на кнопку примените несколько произвольных стилей с использованием cssText.
// // У вас есть текст. При клике на кнопку измените цвет текста с использованием объекта style.

// const btn1 = document.querySelector("#btn1");
//     btn1.setAttribute = (
//         "style",
//         "width: 100px; heigth: 100px; background-color: ligthblue "
//     )   
    

// У вас есть несколько кнопок и блок текста. При клике на каждую кнопку, добавьте класс "active" к блоку текста. Если у блока уже есть этот класс, оставьте его без изменений.
// const newEl = document.createElement('p')
// // первый вариант добавления нескольких классов - через запятую
// newEl.classList.add('hello', 'newClass')
// //либо повторить тоже самое но через какое то условие
// if(newEl) {
//     newEl.classList.add('active')
// }
// newEl.textContent = 'hello wolrd from new p'
// text.innerHTML = ``
// text.insertAdjacentElement('afterbegin', newEl)
// Получаем блок текста и все кнопки
// const textBlock = document.getElementById('textBlock');
// const buttons = document.querySelectorAll('.toggleButton');

// // Добавляем обработчик событий для каждой кнопки
// buttons.forEach(button => {
//     button.addEventListener('click', function () {
//         // Добавляем класс "active", если его нет
//         if (!textBlock.classList.contains('active')) {
//             textBlock.classList.add('active');
//         }
//     });
// });

// text.insertAdjacentElement('afterbegin', newEl)
// console.log(newEl.classList.contains('hello'))
// console.log(newEl.classList.contains('hello'))
// newEl.classList.remove('hello ')

// const example = document.querySelector('#example')
// const textContentResult = document.querySelector('#textContentResult')
// const innerTextResult = document.querySelector('#innerTextResult')

// const innerExample = example.innerText
// const textContentExample = example.textContent

// textContentResult.textContent = textContentExample
// innerTextResult.textContent = textContentExample
// const showBlock = () => {
//     const element = document.querySelector(".children");
//     console.log(element);
//     element.classList.replace("hidden", "shown");
//   };

//   const hideBlock = () => {
//     const element = document.querySelector(".children");
//     element.classList.replace("shown", "hidden");
//   };
const toggleBtn = document.querySelector('.toggleBtn')
const el = document.querySelector('.children')
toggleBtn.addEventListener('click', () => {
    el.classList.toggle('hidden')
})