// // function fn(arr, n) {
// //     let result = [];  // Initialize result array
// //     for (let i = 0; i < arr.length; i++) {
// //         if (typeof arr[i] === 'number' && arr[i] > n) {
// //             result.push(arr[i]);
// //         }
// //     }
// //     return result;
// // }

// // console.log(fn([1, 2, 3, 4543, 3456], 8));  // Corrected function call
// // console.log(fn(['dafa', 'oqugerbvn', 'aielrgukfbjn', 'hello', 9], 7));
// const dataList = [
//   {
//     userName: "Stanley Cooper",
//     description:
//       "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
//   },
//   {
//     userName: "Stanley Cooper",
//     description:
//       "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
//   },
//   {
//     userName: "Stanley Cooper",
//     description:
//       "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
//   },
// ];
// const container = document.querySelector(".container");
// for (let i = 0; i < dataList.length; i++) {
//   const listItem = document.createElement("div");
//   const title = document.createElement("h3");
//   const paragraph = document.createElement("p");
//   const btnSubmit = document.createElement("button");
//   const img = document.createElement("img");

//   listItem.classList.add("listItem");
//   btnSubmit.classList.add("btnSubmit");

//   title.innerText = dataList[i].userName;
//   paragraph.innerText = dataList[i].description;
//   btnSubmit.innerText = "Submit";

//   img.setAttribute("src", "./images/oof.jpg");

//   container.appendChild(listItem);
//   listItem.append(img, title, paragraph, btnSubmit);
// }
// const btn2 = document.createElement("button");
// document.createElement("button");
// btn2.classList.add("btn2");
// container.insertAdjacentElement("afterend", btn2);
// btn2.innerText = "Modal  Window";

// const modal = document.querySelector('.modal')
// const closeModalBtn = document.querySelector('.close__modal')
// btn2.addEventListener('click', () => {
//     modal.style.display = 'flex'
// })

// closeModalBtn.addEventListener('click', () => {
//     modal.style.display = 'none'
// })
// Функция для создания элементов списка
function createListItem(data) {
  const listItem = document.createElement('div');
  const title = document.createElement('h3');
  const paragraph = document.createElement('p');
  const image = document.createElement('img');
  const btn = document.createElement('button');

  // Добавление классов и атрибутов
  listItem.classList.add('listItem');
  btn.classList.add('btnS');
  image.setAttribute('src', './images/off.jpg');

  // Добавление текста
  title.innerText = data.username;
  paragraph.innerText = data.description;
  btn.innerText = 'submit';

  // Вставка элементов в listItem
  listItem.append(image, title, paragraph, btn);

  return listItem;
}


// Функция для отображения списка данных
function renderDataList(dataList, container) {
  for (let i = 0; i < dataList.length; i++) {
      const listItem = createListItem(dataList[i]);
      container.appendChild(listItem);
  }
}

// Функция для создания и добавления кнопки открытия модального окна
function createModalButton(container) {
  const btn2 = document.createElement('button');
  btn2.classList.add('btn2');
  btn2.innerText = 'Modal  Window';
  container.insertAdjacentElement('afterend', btn2);
  return btn2;
}

// Функция для управления модальным окном
function setupModalHandlers(btn2, modal, closeModalBtn) {
  // Открытие модального окна
  btn2.addEventListener('click', () => {
      modal.style.display = 'flex';
  });

  // Закрытие модального окна
  closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });
}

// Основной код
const dataList = [
  { username: 'Stanley Cooper', description: 'lorem lorem lorem lorem lorem...' },
  { username: 'Stanley Cooper', description: 'lorem lorem lorem lorem lorem...' },
  { username: 'Stanley Cooper', description: 'lorem lorem lorem lorem lorem...' }
];

const container = document.querySelector('.container');

// Отображаем список данных
renderDataList(dataList, container);

// Создаем и добавляем кнопку для модального окна
const btn2 = createModalButton(container);

// Настраиваем модальное окно
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close__modal');
setupModalHandlers(btn2, modal, closeModalBtn);
