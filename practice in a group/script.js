const fakeData = [
    {
        name: 'Name',
        username: 'user',
        email: 'email@example.com',
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
        }
    }
];

async function fetchPostAPI() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error!`);
        }
        const data = await res.json();

        data.forEach(element => renderData(element));
    } catch (error) {
        console.error('Fetch error:', error);
        fakeData.forEach(element => renderData(element));
    }
}


async function fetchCatAPI() {
    const url1 = `https:api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`

    try {
        const response = await fetch(url1)
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);

        }
       

        const data = await response.json()
        //получаем первый елемент из масива 
        const imageUrl = data[0].url;
        const div = document.querySelector('.cat');
        //формируем кота
        const catHTML = `
            <img src="${imageUrl}" style="max-width: 300px; border-radius: 10px;">
        `;
        div.innerHTML = catHTML;
    } catch (error) {
        console.error("Fetch error:", error)
        document.querySelector('cat').innerText = 'Не удалось получить данные. Попробуйте позже.';
    }
}
fetchCatAPI()



function renderData(obj) {
    const listItem = document.createElement('li');
    const content = document.createElement('div');
    const name = document.createElement('p');
    const username = document.createElement('p');
    const email = document.createElement('p');
    const address = document.createElement('p');
    const img = document.createElement('img');

    listItem.classList.add('post');

    const contentAPI = document.querySelector('.contentAPI');
    img.src = './chel.jpg';
    listItem.append(img);
    contentAPI.append(listItem);
    listItem.append(content);
    content.append(name, username, email, address);

    name.textContent = `Name: ${obj.name}`;
    username.textContent = `Username: ${obj.username}`;
    email.textContent = `Email: ${obj.email}`;
    address.textContent = `Address: ${obj.address.street}, ${obj.address.suite}, ${obj.address.city}, ${obj.address.zipcode}`;
}

fetchPostAPI();
