// const btn = document.querySelector("#button");
// const btnStatus = document.querySelector("#btn_status");
// const btn_fetch = document.querySelector("#btn_fetch");
// const container = document.querySelector(".container");
// const list = document.querySelector('.list')
// let status = true;
btn.addEventListener("click", () => {
  localStorage.setItem("isLogin", status);
  render(status);
});
btnStatus.addEventListener("click", () => {
  localStorage.setItem("isLogin", !status);
  render(!status);
});
btn_fetch.addEventListener("click", () => { const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((item) =>{
          const listItem = document.createElement('li')
          const userName = document.createElement('h3')
          const userEmail = document.createElement('p')
          userName.innerText = item.username
          userEmail.innerText = item.email
          listItem.append(userName, userEmail)
          list.append(listItem)
        });
      });
  });
  function render(isLogin) {
    const p = document.createElement("p");
    if (isLogin) {
      p.innerText = "Login is successfully";
    } else {
      p.innerText = "Login is unsuccessfully";
    }
    container.append(p);
    console.log(isLogin);
  }
// дз: доделать так чтоб при обновлении страницы список пользователей сохранялся
// Advanced дз. Для каждого пользователя добавить кнопку удалить и по клику удалять этого юзер
const btn = document.querySelector("#button");
const btnStatus = document.querySelector("#btn_status");
const btn_fetch = document.querySelector("#btn_fetch");
const container = document.querySelector(".container");
const list = document.querySelector(".list");
let status = true;

btn.addEventListener("click", () => {
  localStorage.setItem("isLogin", status);
  render(status);
});

btnStatus.addEventListener("click", () => {
  localStorage.setItem("isLogin", !status);
  render(!status);
});

// Загрузка данных пользователей и сохранение в LocalStorage
btn_fetch.addEventListener("click", () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("userList", JSON.stringify(data)); // Сохранить пользователей в localStorage
      renderUsers(data);
    });
});

// Функция для отрисовки списка пользователей
function renderUsers(users) {
  list.innerHTML = ""; // Очищаем список перед отрисовкой
  users.forEach((item) => {
    const listItem = document.createElement("li");
    const userName = document.createElement("h3");
    const userEmail = document.createElement("p");
    const deleteButton = document.createElement("button");

    userName.innerText = item.username;
    userEmail.innerText = item.email;
    deleteButton.innerText = "Удалить";

    deleteButton.addEventListener("click", () => {
      deleteUser(item.id);
    });

    listItem.append(userName, userEmail, deleteButton);
    list.append(listItem);
  });
}

// Функция для удаления пользователя
function deleteUser(userId) {
  const storedUsers = JSON.parse(localStorage.getItem("userList")) || [];
  const updatedUsers = storedUsers.filter((user) => user.id !== userId);
  localStorage.setItem("userList", JSON.stringify(updatedUsers)); // Обновить localStorage
  renderUsers(updatedUsers); // Обновить отображение
}

// Функция отображения статуса логина
function render(isLogin) {
  const p = document.createElement("p");
  if (isLogin) {
    p.innerText = "Login is successful";
  } else {
    p.innerText = "Login is unsuccessful";
  }
  container.append(p);
  console.log(isLogin);
}

// При загрузке страницы проверяем наличие данных в localStorage и отображаем их
document.addEventListener("DOMContentLoaded", () => {
  const storedUsers = JSON.parse(localStorage.getItem("userList"));
  if (storedUsers) {
    renderUsers(storedUsers);
  }
});
