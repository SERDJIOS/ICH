const createForm = document.querySelector("#create-form");
const modalForm = document.querySelector(".modal-form");
const openModalForm = document.querySelector(".float-button");
const closeModal = document.querySelector(".closeBtn");

const getTodos = () => {
  const localStorageTodos = JSON.parse(localStorage.getItem("todosStorage"));

  return localStorageTodos;
};

const createTodo = (e) => {
  e.preventDefault();
  const startDate = document.querySelector("#startDate").value;
  const description = document.querySelector("#description").value;
  const localStorageTodos = getTodos();

  const newTodo = {
    id: "todo_" + Math.random().toString(16).slice(2),
    createAt: new Date(),
    startDate,
    description,
    done: false,
  };

  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    localStorageTodos.push(newTodo);
    localStorage.setItem("todosStorage", JSON.stringify(localStorageTodos));
  } else {
    localStorage.setItem("todosStorage", JSON.stringify([newTodo]));
  }
  renderTodos();
};

const renderTodos = () => {
  const localStorageTodos = JSON.parse(localStorage.getItem("todosStorage"));
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    const container = document.querySelector("#todo-list");
    container.innerHTML = "";

    localStorageTodos.forEach((todo) => {
      const startDate = new Date(todo.startDate).toLocaleString("ru-RU", {
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
      });
      const id = todo.id;
      container.insertAdjacentHTML(
        "beforeend",
        `
            <li class="todo-block">
            <label class="checkbox" for="${id}" onclick="toggleTodoDone('${id}')">
                <input type="checkbox" name="${id}" id="${id}" ${
          todo.done ? "checked" : ""
        }/>
                <span class="material-symbols-rounded checkbox__check-icon">
                    check
                </span>
                
            </label>
            <div class="todo-block__data">
                <p class="todo-block__date">${startDate}</p>
                <h3 class="todo-block__title">${todo.description}</h3>
            </div>
            <span class="material-symbols-rounded" onclick="deleteTodo('${id}')">
                <img src="./image/mdi_remove-outline@2x.svg" alt="">
            </span>
          </li>
                `
      );
    });
  }
};

const deleteTodo = (todoId) => {
  const localStorageTodos = getTodos();
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    const newTodos = localStorageTodos.filter((todo) => todo.id !== todoId);
    localStorage.setItem("todosStorage", JSON.stringify(newTodos));
  }
  renderTodos();
};

createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  modalForm.style.display = "none";
  createTodo(e);
});

openModalForm.addEventListener("click", () => {
  modalForm.style.display = "flex";
});
modalForm.addEventListener("click", (e) => {
  const childrens = e.target.contains(createForm);
  if (e.target !== createForm && childrens) {
    modalForm.style.display = "none";
  }
});

closeModal.addEventListener("click", () => {
  modalForm.style.display = "none";
});
renderTodos();


const toggleTodoDone = (id) => {
  const localStorageTodos = getTodos();

  if (localStorageTodos && Array.isArray(localStorageTodos)) {
      // Находим задачу с нужным id и меняем её статус done
      const doneTodos = localStorageTodos.map((todo) => {
          if (todo.id === id) {
              return { ...todo, done: !todo.done}; // Изменяем статус done на противоположный
          }
          return todo;
      });

      // Сохраняем обновленный список задач в localStorage
      localStorage.setItem("todosStorage", JSON.stringify(doneTodos));
  }

  renderTodos(); // Обновляем интерфейс
};
// const splitButtonClickHandler = (button) => {
//     const buttonTab = document.querySelectorAll('.split-button__button')
//     buttonTab.forEach((button) => {
//       button.classList.remove('active')
// }
// }


// // я решил чуть красивше сделать закрытие модала
// modalForm.addEventListener("click", (e) => {
//   const childrens = e.target.contains(createForm);
//   if (e.target !== createForm && childrens) {
//     modalForm.style.display = "none";
//   }
// });













// console.log("=============================================");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((users) => {
//     console.log("Список пользователей:", users);
//   });

// console.log("=============================================");

// const newUser = {
//   name: "John Doe",
//   username: "johndoe",
//   email: "johndoe@example.com",
// };

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify(newUser),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log("=============================================");

// function renderPosts(posts) {
//   const postsContainer = document.querySelector(".posts-container");

//   posts.forEach((post) => {
//     const postItem = document.createElement("div");
//     postItem.classList.add("post-item");

//     const postTitle = document.createElement("h3");
//     postTitle.innerText = post.title;

//     const postBody = document.createElement("p");
//     postBody.innerText = post.body;

//     postItem.append(postTitle, postBody);
//     postsContainer.append(postItem);
//   });
// }

// // Используя fetch для выполнения GET запроса к JSONPlaceholder
// // (URL: https://jsonplaceholder.typicode.com/users).
// // // Выведите список пользователей в консоль.




// function newFunction() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((posts) => renderPosts(posts))
//     .then((data) => {
//       console.log(data);
//     });

//   console.log("=============================================");
// }
// //   2. Используя fetch для выполнения POST запроса к JSONPlaceholder
// // (URL: https://jsonplaceholder.typicode.com/users).
// // Создайте объект пользователя с полями name, username, и email.
// // Отправьте POST запрос с созданным объектом пользователя.
// // Выведите ответ сервера в консоль.

// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: JSON.stringify({
//     name: "DANYA",
//     username: "DAN777",
//     email: "dan@gmail.com",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));






