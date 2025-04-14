// Продолжить работу над функционалом переключения между постами. В качестве API использовать https://jsonplaceholder.typicode.com/posts/
// Страница должна содержать 2 кнопки (вперед, назад), которые переключают к следующему и предыдущему посту соответственно.
// При загрузке страницы должен отправляться запрос на получение поста с id=1.

// Написать функцию отрисовки постов.
// Написать слушатели события click для кнопок.
// // Для первой кнопки добавить проверку на то, что post_number не равно нулю, чтобы не передавать на бэкенд отрицательное значение и избежать ошибки.


const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
let post_number = 1;

async function loadPostAPI(id) {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const responce = await fetch(url);
    if (!responce.ok) {
      throw new Error("Url not found!");
    }
    const data = await responce.json();
    renderPost(data); // Вызываем функцию для отображения данных
  } catch (error) {
    console.error(error);
  }
}

function renderPost(data) {
  const root = document.querySelector('#root');
  const title = document.createElement('h3');
  const comment = document.createElement('p');
  root.innerHTML = ''; // Очищаем предыдущий контент
  title.innerText = `Title: ${data.title}`;
  comment.innerText = `Body: ${data.body}`;
  root.append(title, comment); // Добавляем новый контент
}

// Загружаем первый пост при загрузке страницы
loadPostAPI(post_number);

// Обработчик кнопки "Предыдущий пост"
btn1.addEventListener("click", () => {
  if (post_number > 1) { // Проверяем, что мы не уходим ниже первого поста
    post_number--;
    loadPostAPI(post_number);
  }
});

// Обработчик кнопки "Следующий пост"
btn2.addEventListener("click", () => {
  post_number++;
  loadPostAPI(post_number);
});