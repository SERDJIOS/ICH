const fakeData = [
    {
        title: 'Title',
        body: 'Body'
    },
    {
        title: 'Title2',
        body: 'Body2'
    }
]

async function fetchPostAPI (){
    const url = 'https://jsonplaceholder.typicode.com/posts'

    try{
    const res = await fetch(url)
    const data = await res.json()
    
    data.forEach(element => {
    renderData(element)
    });
    }catch (error){
      console.log('error');
    fakeData.forEach(element => {
        renderData(element)
    })
    }
}
fetchPostAPI ()

function renderData (obj) {
    const listItem = document.createElement('li')
    const content = document.createElement('div')
    const title = document.createElement('p')
    const description = document.createElement('p')
    const img = document.createElement('img')

    listItem.classList.add('post')

    const contentAPI = document.querySelector('.contentAPI')
    contentAPI.append(listItem)
    listItem.append(content)
    content.append(title, description)
    listItem.append(img)

    title.textContent = obj.title
    description.textContent = obj.body
    img.src = './img/cat.png'  
}