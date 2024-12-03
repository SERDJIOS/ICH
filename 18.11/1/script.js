const btn = document.createElement("button");
const swearText = document.createElement("div");
document.body.append(btn);
document.body.append(swearText);
btn.textContent = "Загрузить ругательство";


document.body.margin = "50px auto"
document.body.padding = "20 px"

swearText.style.display = "flex";
swearText.style.justifyContent = "center";

btn.addEventListener('click', async () => {
  const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
  const proxyUrl = `https://api.allorigins.win/get?url=`;  // Используем AllOrigins

  try {
    const response = await fetch(proxyUrl + encodeURIComponent(url));
    const data = await response.json();
    const result = JSON.parse(data.contents); // Распаковываем данные из прокси
    swearText.innerHTML =
  `Ругательство: ${result.insult} <br>
   Дата создания: ${result.created}<br>
   Автор: ${result.createdby || "Автор не известен"}<br>
   Язык: ${result.language}<br>
   `
  }catch (error) {
        swearText.innerHTML = `Ошибка`
    
    }
})
