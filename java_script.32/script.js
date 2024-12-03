// const url = "https://jsonplaceholder.typicode.com/todos"
// const newTask = {
//   title: 'Task',
//   completed: false
// }

//  fetch('https://jsonplaceholder.typicode.com/todos', {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   body: JSON.stringify(newTask),
//  })
// .then ((res) => res.json())
// .then((data) => console.log(data))

// Отправить GET-запрос по адресу “https://jsonplaceholder.typicode.com/todos”, отобразить полученные посты на странице.

// const url2 = "https://jsonplaceholder.typicode.com/todos";

// fetch(url).then(res => res.json()).then(data => console.log(data))

// Сделайте запрос на https://jsonplaceholder.typicode.com. Укажите path/route /comments. Далее укажите query параметр email со значением Lew@alysha.tv

// Сделайте запрос на https://jsonplaceholder.typicode.com. Укажите path/route /users. Далее укажите query параметр username со значением Karianne и id 4.

// Сделать запрос используя api https://jsonplaceholder.typicode.com/photos. Получив первые 5 объектов нужно отрисовать все 20 картинок на веб-странице в ряд.

const photosUrl = "https://jsonplaceholder.typicode.com/photos?_limit=5";

fetch(photosUrl)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) => {
      const newImage = document.createElement("img");
      newImage.src = item.url;
      document.body.append(newImage);
      console.log(item);
    })
  );

// https://jsonplaceholder.typicode.com/posts
// Вытащить на страницу в формате title body все посты из структуры API, добавить минимальные стили
const postsUrl1 = "https://jsonplaceholder.typicode.com/posts?_limit=20";

fetch(postsUrl1)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const listItem = document.createElement("div");
      const h3 = document.createElement("h3");
      const p3 = document.createElement("p");

      h3.innerText = item.title;
      p3.innerText = item.body;

      listItem.append(h3,p3);
      
      const list = document.querySelector(".post__list");
      document.body.append(listItem);
      

      console.log(item);
    });
  });



// const url = "https://jsonplaceholder.typicode.com/posts?_limit=20";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((item) => {
//       const listItem = document.createElement("div");
//       const h3 = document.createElement("h3");
//       const paragraph = document.createElement("p");
//       h3.innerText = item.title;
//       paragraph.innerText = item.body;
//       listItem.append(h3, paragraph);
//       const list = document.querySelector(".post__list");
//       list.append(listItem);
//     });
//   });
