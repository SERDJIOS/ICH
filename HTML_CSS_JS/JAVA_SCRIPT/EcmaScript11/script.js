// Создайте HTML-страницу с кнопкой "Кликни меня" и блоком, в котором будет отображаться количество кликов.

// Используя JavaScript, при клике на кнопку увеличивайте счетчик кликов и изменяйте цвет фона блока. Если количество кликов делится на 5 без остатка, цвет фона должен изменяться на случайный цвет.

// При достижении 10 кликов выведите сообщение под блоком с количеством кликов: "Поздравляем! Вы достигли 10 кликов!".
const btn = document.querySelector('.btn')
const box = document.querySelector('.box')
const div = document.createElement('div')

function getRandomRGB() {
  // Генерируем случайное число от 0 до 255 для каждого цвета
  const r = Math.floor(Math.random() * 256) // Красный компонент
  const g = Math.floor(Math.random() * 256) // Зелёный компонент
  const b = Math.floor(Math.random() * 256) // Синий компонент

  // Формируем строку RGB
  return `rgb(${r}, ${g}, ${b})`
}
let count = 0
btn.addEventListener('click', () => {
  count++
  box.innerText = count
  if (count % 5 == 0) {
    box.style.background = getRandomRGB()
  }
  if (count % 10 == 0) {
    div.innerHTML = ''
    const p = document.createElement('p')
    box.insertAdjacentElement('afterend', div)
    p.innerText = `Поздравляем! Вы достигли ${count} кликов!`
    div.append(p)
  }
})
