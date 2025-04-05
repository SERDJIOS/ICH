// https://jsonplaceholder.typicode.com/users
// На странице async делаем подгрузку пользвоателей
// fun fact: тут цитата https://api.kanye.rest/

async function fetchUserAPI() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Url not found");
    }
    const data = await res.json();
    renderData(data);
  } catch (error) {
    console.error(error);
  }
}

function renderData(users) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  users.forEach((user) => {
    const userHTML = `
        <div class="userItem">
          <div><img src="./oofofoofofff.jpg" alt="User Image"></div>
          <div class="text"><p><span>name:</span>${user.name}</p>
          <p><span>username:</span>${user.username}</p>
          <p><span>email:</span>${user.email}</p>
          <div class="userAddress"><span class="line">address:</span>
            <ul>
              <li>street: ${user.address.street}</li>
              <li>suite: ${user.address.suite}</li>
              <li>city: ${user.address.city}</li>
              <li>zipcode: ${user.address.zipcode}</li>
            </ul>
          </div>
            </div>
        </div>
    
      `;
    container.innerHTML += userHTML;
  });
}

fetchUserAPI();

async function fetchCatAPI() {
  const url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Url not found");
    }
    const data = await res.json();
    renderCat(data[0]);
  } catch (error) {
    return data[0];
  }
}
async function fetchKanyeAPI() {
  const url = ` https://api.kanye.rest/`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Url not found");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
// function renderCat(random){
//     const cat = document.querySelector('.cat')
//     cat.innerHTML = `<div><img src="./oofofoofofff.jpg" alt="User Image"></div>
//           <p><span>name:</span>${user.name}</p>
//           <p><span>username:</span>${user.username}</p>`

// }
fetchKanyeAPI();
fetchCatAPI();

// function renderCat(catData) {
//     const cat = document.querySelector('.cat');
//     cat.innerHTML = `
//       <div>
//         <img src="${catData.url}" alt="Random Cat" style="max-width: 100%; height: auto;">
//         <p><span>Breed:</span> ${catData.breeds?.[0]?.name || "Unknown"}</p>
//       </div>
//     `;
//   }

//   function renderQuote(quoteData) {
//     const quote = document.querySelector('.quote');
//     quote.innerHTML = `
//       <blockquote>"${quoteData.quote}"</blockquote>
//     `;
//   }

//   // Fetch and render data
//   fetchCatAPI();
//   fetchKanyeAPI();
