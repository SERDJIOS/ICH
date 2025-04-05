function getRealTime() {
  const creationDate = new Date();
  const year = creationDate.getFullYear();
  const month = String(creationDate.getMonth() + 1).padStart(2, "0");
  const day = String(creationDate.getDate()).padStart(2, "0");

  const hour = String(creationDate.getHours()).padStart(2, "0");
  const minute = String(creationDate.getMinutes()).padStart(2, "0");
  const seconds = String(creationDate.getSeconds()).padStart(2, "0");

  const startDate = new Date().toLocaleString("en-EN", {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  });
  return {
    day: `${day}-${month}-${year}`,
    time: `${hour}-${minute}-${seconds}`,
    newDate: startDate,
    id: "todo_" + Math.random().toString(16).slice(2),
  };
}

console.log(getRealTime());

const createForm = document.querySelector("#create-form");

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
                <input type="checkbox" name="${id}" id="${id}" ${todo.done ? "checked" : ""}/>
                <span class="material-symbols-rounded checkbox__check-icon">
                    check
                </span>
            </label>
            <div class="todo-block__data">
                <p class="todo-block__date">${startDate}</p>
                <h3 class="todo-block__title">${todo.description}</h3>
            </div>
          </li>

                `
      );
    });
  }
};

createForm.addEventListener("submit", (e) => {
    e.preventDefault()
  createTodo(e);
});

renderTodos()
