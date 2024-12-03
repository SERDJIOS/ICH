// На странице async делаем подгрузку пользвоателей

const container = document.querySelector('.container');
const catDiv = document.createElement('div');

catDiv.classList.add('catDiv')



const fetchUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    try {
        const response = await fetch(url)
        const data = await response.json()

        console.log(data);

        data.forEach(element => {
            renderUsers(element)
        });

    } catch (error) {
        console.log(error);
    }
}

fetchUsers()

const fetchCat = async () => {
    const catUrl = 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'

    try {
        const response = await fetch(catUrl);
        const data = await response.json()

        const dataUrl = data[0].url

        renderCat(dataUrl)

    } catch (error) {
        console.log(error);
    }

    const yeUrl = 'https://api.kanye.rest/'
    
    try {
        const response = await fetch(yeUrl);
        const data = await response.json()

        console.log(data);
        

        const quote = data.quote

        renderQoute(quote)

    } catch (error) {
        console.log(error);
    }
}

fetchCat()

// const fetchYe = async () => {
//     const yeUrl = 'https://api.kanye.rest/'
    
//     try {
//         const response = await fetch(yeUrl);
//         const data = await response.json()

//         console.log(data);
        

//         const quote = data.quote

//         renderQoute(quote)

//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchYe()

const renderUsers = (obj) => {
    const card = document.createElement('div');
    card.classList.add('card')
    const imgUser = document.createElement('img');
    const userList = document.createElement('ul');
    const name = document.createElement('li');
    const username = document.createElement('li');
    const email = document.createElement('li');
    const address = document.createElement('li');

    imgUser.src = './img/img.jpg';
    
    name.innerHTML = `<u>Name:</u> ${obj.name}`;
    username.innerHTML = `<u>Username:</u> ${obj.username}`;
    email.innerHTML = `<u>Email:</u> ${obj.email}`;
    address.innerHTML = `
    <div class="address-container">
        <div class="address-left"><u>Address:</u></div>
        <div class="addresss-right">
            <p>Street: ${obj.address.street}</p>
            <p>Suite: ${obj.address.suite}</p>
            <p>City: ${obj.address.city}</p>
            <p>Zipcode: ${obj.address.zipcode}</p>
        </div>
    </div>
`;

    userList.append(name, username, email, address)
    card.append(imgUser, userList)
    container.append(card)
}

const renderCat = (data) => {
    const catImg = document.createElement('img');
    catImg.classList.add('catImg')
    const catName = document.createElement('p');
    catName.textContent = 'Name: Vasily Cat'
    catImg.src = data

    catDiv.append(catImg, catName);
    container.append(catDiv)
}

const renderQoute = (quote) => {
    const yeQoute = document.createElement('h3');
    yeQoute.textContent = quote

    catDiv.insertAdjacentElement('beforeend', yeQoute)
    container.append(catDiv)
}