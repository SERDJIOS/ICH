// async function fetchApi(){
//     try{
//         const url = `https://api.chucknorris.io/jokes/random`
//         const response = await fetch(url)
//         if(!response.ok){
//             throw new Error ('server error noch mal')
//         }
//         const data = await response.json()
//         console.log(data);
        
 
//     }catch(error){
//         console.error(error)
//     }finally{
//         console.log('true');
        
//     }
// }
// fetchApi()

// По клику вывести на страницу insult + дата создания + автор + язык
// Если автора нет - подписать: автор не известен, Кнопка: Ругаться

// Функция для получения случайного ругательства с API
// Создаем элементы: кнопку и блок для текста
const btn = document.createElement("button");
const swearText = document.createElement("div");
document.body.append(btn);
document.body.append(swearText);

// Текст кнопки
btn.textContent = "Загрузить ругательство";

// Стили для body
document.body.style.margin = "50px auto";
document.body.style.padding = "20px";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";

// Стили для блока текста
swearText.style.display = "flex";
swearText.style.justifyContent = "center";
swearText.style.marginTop = "20px";
swearText.style.fontSize = "18px";
swearText.style.border = "1px solid #ccc";
swearText.style.borderRadius = "5px";
swearText.style.padding = "10px";
swearText.style.maxWidth = "500px";
swearText.style.margin = "20px auto";
swearText.style.backgroundColor = "#f9f9f9";

// Обработчик нажатия на кнопку
btn.addEventListener('click', async () => {
  const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
  const proxyUrl = `https://api.allorigins.win/get?url=`; // Используем AllOrigins

  try {
    // Выполняем запрос через прокси
    const response = await fetch(proxyUrl + encodeURIComponent(url));
    const data = await response.json();
    const result = JSON.parse(data.contents); // Распаковываем данные из прокси

    // Отображаем ругательство и другие данные
    swearText.innerHTML = `
       ${result.insult}
      ${result.created}
     ${result.created_by}
     ${result.language}
    `;
  } catch (error) {
    // Обрабатываем ошибку
    swearText.innerHTML =
    console.error("Ошибка запроса:", error);
  }
});



// Создаем кнопку и контейнер для отображения собаки
const fetchDogBtn = document.createElement('button');
const dogContainer = document.createElement('div');

// Добавляем текст кнопке
fetchDogBtn.textContent = "Показать собаку";

// Добавляем элементы в тело страницы
document.body.append(fetchDogBtn);
document.body.append(dogContainer);

// Стили для контейнера
dogContainer.style.textAlign = "center";
dogContainer.style.marginTop = "20px";

// Функция для генерации случайного имени
function generateDogName() {
    const names = ["Барбос", "Шарик", "Бобик", "Мухтар", "Лаки", "Белла", "Макс", "Чарли", "Рекс", "Роза"];
    return names[Math.floor(Math.random() * names.length)];
}

// Функция для загрузки случайного изображения собаки
async function fetchDogImage() {
    const apiUrl = "https://dog.ceo/api/breeds/image/random";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const dogImage = data.message;

        // Очистить контейнер перед добавлением новой собаки
        dogContainer.innerHTML = '';

        // Создать и добавить элементы для собаки
        const img = document.createElement('img');
        img.src = dogImage;
        img.alt = "Собака";
        img.style.maxWidth = "300px";
        img.style.borderRadius = "10px";
        img.style.boxShadow = '1px 1px 40px black'
        const name = document.createElement('div');
        name.className = "dog-info";
        name.textContent = `Имя собаки: ${generateDogName()}`;

        dogContainer.append(img, name);
    } catch (error) {
        console.error("Ошибка загрузки собаки:", error);
        dogContainer.innerHTML = `<p style="color:red;">Не удалось загрузить собаку. Попробуйте еще раз.</p>`;
    }
}

// Добавить обработчик события на кнопку
fetchDogBtn.addEventListener('click', fetchDogImage);

