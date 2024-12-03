// Создать функцию, которая будет изменять цвет фона элемента каждую секунду. Цвет должен меняться случайным образом из заданного набора цветов. 
const colors = ['#ff0000', '#00ff00', '#0000ff'];



function changeBackgroundColor(element) {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  }, 500);
}

changeBackgroundColor(colors)
