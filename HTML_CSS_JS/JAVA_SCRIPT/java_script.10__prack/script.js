// const container = document.querySelector('.container')
// const btn1 = document.createElement('button')
// const btn2 = document.createElement('button')
// const btn3 = document.createElement('button')
// container.append(btn1,btn2)
// btn1.innerText ='Click1'
// btn2.innerText = 'Click2'
// btn3.innerText = 'Toogle'
// const p = document.createElement('p')
// p.innerText = 'Dobavleniya texta v element'
// container.insertAdjacentElement('afterbegin',p)
// const arr = [1,2,3,4,'hello world']
// const list = document.createElement("ul")
// p.insertAdjacentElement('afterend',list)
// function arrFn(randomArr) {
//     for (let i = 0; i < randomArr.length; i++) {
//       const listItem = document.createElement('li')
//       listItem.textContent = randomArr[i]
//       listItem.classList.add('listItem')
//       list.append(listItem)
//     }
  

        
//     }
    
// arrFn(arr);
// const span = document.createElement('span')
// btn1.addEventListener('click',function(){
//     p.classList.add('content');
//     document.body.style.background = 'magenta'
//     span.innerHTML = ''

// })
// btn2.addEventListener('click',function(){
//     p.classList.remove('content')
//     document.body.style.background = 'unset'
    
//     span.innerText = 'eti stili bili uzhasni'
//     span.classList.add('text')
//     container.append(span)

// })
// btn3.addEventListener('toogle', () => {
//     list.Item = document.querySelector('listItem')
//     for(let i = 0; i > listItem.length; i++){
//         // listItem[i].classList.toggle
//         listItem[i].addEventListener('click',function () {
//             listItem[i].classList.toggle('aktive')
//         })
//     }

// })


// Задание 1
// У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.


const content = document.querySelector('.content')
content.addEventListener('mouseover', () => {
    content.style.background = 'red'
})
content.addEventListener('mouseout', () => {
    content.style.background = 'blue'
})


// Задание 2
// У вас есть блок с id "colorBlock" и кнопка с id "colorButton".
// При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент


const colorBlock = document.querySelector('#colorBlock');
const colorButton = document.querySelector('#colorButton'); // Исправлена опечатка

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

colorButton.addEventListener('click', () => {
    colorBlock.style.background = getRandomRGB();
});




