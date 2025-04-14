const fetchTodos = async () => {
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      const { todos } = data;
      console.log(todos);
  
      return todos;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  const renderTodos = async () => {
    const todos = await fetchTodos();
    const container = document.getElementById("container");
    todos.map((todo) => {
      const element = createTodoElement(todo);
      container.append(element);
    });
  };
  
  const createTodoElement = (todo) => {
      console.log(todo);
      
    const el = document.createElement("div");
    el.className = "todo";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(todo.completed);
    checkbox.name = "checkbox_" + todo.id;
    checkbox.id = "checkbox_" + todo.id;
    checkbox.addEventListener('change', (event) => {
      const label = document.getElementById('label_' + todo.id)
      label.classList.toggle('todo__label--done')
    })
    const label = document.createElement('label')
    label.id = "label_" + todo.id
    label.htmlFor = checkbox.id
    //передаем задачу в лейбл
    label.innerHTML = todo.todo
    if(checkbox.checked) {
      label.classList.add('todo__label--done')
    }
    el.append(checkbox, label)
    return el
  };
  
  
  const renderSigleTodo = (todo) => {
      const el = createTodoElement(todo)
      document.getElementById('container').append(el)
  }
  
  document.getElementById('form').addEventListener('submit', (e) => {
      e.preventDefault()
      writeNewTodo(e.target.elements.input.value)
      e.target.reset()
  })
  
  const writeNewTodo = async(todo) => {
      try {
          const response = await fetch('https://dummyjson.com/todos/add', {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                  todo,
                  completed: false,
                  userId: 5
              })
          })
          const data = await response.json()
          renderSigleTodo(data)
      } catch(error) {
          console.error(error)
      }
  }