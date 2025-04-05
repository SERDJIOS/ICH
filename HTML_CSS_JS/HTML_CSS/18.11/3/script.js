// Задача: по клику на страницу доставать картинку собаки но только одну. На странице может быть всегдалишь одна собака. Плюс добавить ей выдуманное имя
const btn = document.createElement("button");
const dogImg = document.createElement("div");
document.body.append(btn);
document.body.append(dogImg);
btn.textContent = "Загрузить собаку";

btn.style.padding = "10px 20px";
btn.style.fontSize = "16px";
btn.style.cursor = "pointer";
btn.style.borderRadius = "5px";
btn.style.border = "2px solid #ccc";
btn.style.backgroundColor = "#4CAF50";
btn.style.color = "white";

document.body.width = "1000px"
document.body.height = "100vh"
document.body.margin = "50px auto"
document.body.padding = "20px"

document.body.display = "flex";
document.body.justifyContent = "center";
document.body.style.alignItems = "center"

btn.addEventListener('click', async () => {
  const url = `https://dog.ceo/api/breeds/image/random`
  const nameUrl = `https://randomuser.me/api/`

  try {
    const response = await fetch(url)
    const data = await response.json();
    const result = data

    const nameResponse = await fetch(nameUrl);
    const nameData = await nameResponse.json();
    const dogName = nameData.results[0].name.first;

    dogImg.innerHTML =
  `<h2>Собачатина:</h2><br> <h1>${dogName}</h1><br>
   <img src="${result.message}"> <br>
   `
  }catch (error) {
    dogImg.innerHTML = `Ошибка`
    
    }
})
