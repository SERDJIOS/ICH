const btnForm = document.getElementById('btn-form')

const container = document.querySelector('.container')
const containerLeft = document.querySelector('.container-left')
const containerRight = document.querySelector('.container-right')

async function fetchCat() {
  const url =
    'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
  const response = await fetch(url)
  const data = await response.json()

  const img = document.createElement('img')
  img.src = data[0].url

  containerLeft.append(img)
}
fetchCat()

async function catZitat() {
  const quote = document.createElement('p')
  const cont = document.querySelector('.description')
  cont.append(quote)

  const url = `https://api.chucknorris.io/jokes/random`
  const response = await fetch(url)
  const data = await response.json()

  quote.textContent = data.value
}
catZitat()

btnForm.addEventListener('click', () => {
  if (container.style.display === 'none' || container.style.display === '') {
    container.style.display = 'block'
  } else {
    container.style.display = 'none'
  }
})

const form = document.querySelector('.form')
form.addEventListener('submit', e => {
  e.preventDefault()
  const nameValue = document.querySelector('.nameValue').value
  const telValue = document.querySelector('.telValue').value
  const emailValue = document.querySelector('.emailValue').value
  const compValue = document.querySelector('.compValue').value
  const name = document.createElement('p')
  const tel = document.createElement('p')
  const email = document.createElement('p')
  const comp = document.createElement('p')
  const div = document.createElement('div')
  div.append(name, tel, email, comp)
  document.body.appendChild(div)
  name.innerHTML = ''
  tel.innerHTML = ''
  email.innerHTML = ''
  comp.innerHTML = ''
  name.innerText = nameValue
  tel.innerText = telValue
  email.innerText = emailValue
  comp.innerText = compValue
  //   form.innerHTML = ''
  form.reset()
  div.classList.add('newPost')
})
