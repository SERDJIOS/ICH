// Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. По пути(path)  /users получить всех пользователей. На веб-странице для каждого пользователя отрисовать карточку и указать следующие данные: id, username, email, address.city, phone и company.name. Стили добавляем произвольно.
const usersCards = document.createElement('div')
document.body.append(usersCards)
usersCards.style.maxWidth = 'fit-content'
usersCards.style.display ='flex'
usersCards.style.flexWrap = 'wrap'

async function fetchCards () {
    const url = "https://jsonplaceholder.typicode.com/users"
    const response = await(await fetch(url)).json()
    response.forEach(user => {
        const infoUserCards = document.createElement('div')
        infoUserCards.style.border ='1px solid black'
        infoUserCards.style.padding = '10px'
        infoUserCards.style.borderRadius = '5px'
        infoUserCards.style.margin = '10px'
        infoUserCards.style.backgroundColor ='gray'
        infoUserCards.style.filter = 'drop-shadow(1px 1px 10px black)'
        infoUserCards.style.color = 'white'
        infoUserCards.innerHTML = `
        ${user.id} 
        ${user.username}
        ${user.email}
        ${user.address.city}
        ${user.phone}
        ${user.company.name}`
        
        usersCards.append(infoUserCards)

    });
    
    
}
fetchCards ()
      
