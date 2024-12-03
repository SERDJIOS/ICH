const container = document.querySelector('.container_left')
const container2 = document.querySelector('.container_right')
const button = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')

async function fetchCat() {
  const url =
  'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
  const img = document.createElement('img')
  container.append(img)
  const response = await fetch(url)
  const data = await response.json()
  img.src = data[0].url
  
}
fetchCat()


async function catZitat() {
  const url = `https://api.chucknorris.io/jokes/random`
  const response = await fetch(url)
  const data = await response.json()
  const description = document.createElement('p')
  container2.append(description)
  description.innerText = data.value
}
catZitat()