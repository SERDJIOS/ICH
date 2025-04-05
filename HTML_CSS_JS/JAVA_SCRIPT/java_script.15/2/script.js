// const container = document.querySelector('.container')
// console.log(container);
// container.innerHTML = 
// `Heloo world  <h3>hello world</h3>`


const image = document.querySelector('#image')
image.setAttribute('src', './assets/stanleu.png')
console.log(image);



const h3 =document.querySelector('.h3')
h3.innerText ='kjhbfvnw'
const image3 = document.querySelector('#image3')
image3.setAttribute('src', './images/fire.png')
console.log(img1);



const item1 = document.querySelector('.item1')
const input = document.querySelector('#input') 


// cherez value menyaem input
input.value = 'hello  world'
console.log(input.value);


const content = document.querySelector('.content')
// cherez createEllement sozdaem element na stranizu
const titel = document.createElement('h3')
// inner Text zadaem text dlya elementaa
titel.innerText = 'New titel from js'
content.append(title)

