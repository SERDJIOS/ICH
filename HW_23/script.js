

function createButton(data, containerId) {
  const container = document.getElementById(containerId);

  const list = document.createElement("ul");

  data.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;

   
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';

     
      deleteButton.addEventListener('click', () => {
          listItem.remove(); 
      });
      listItem.appendChild(deleteButton);

      list.appendChild(listItem);
  });
  container.appendChild(list);
}

const data = ['11', '21', '31'];
const containerId = 'listContainer';

createButton(data, containerId);
// Функция, которая принимает другой функцию как callback
function greetUser(name, callback) {
  console.log('Привет, '+ name );  // Приветствуем пользователя
  callback();  // Вызываем callback-функцию
}

// // Callback-функция, которая выводит сообщение
function sayGoodbye() {
  console.log('До свидания!');
}

// // Вызов greetUser с callback
greetUser('Иван', sayGoodbye);




function displayStudentInfo(student) {
  console.log(`Имя: ${student.name}`);
  console.log(`Возраст: ${student.age}`);
  console.log(`Курс: ${student.course}`);
}

// Пример использования
let students = [
  { name: "Иван", age: 20, course: 2 },
  { name: "Мария", age: 22, course: 3 },
  { name: "Алексей", age: 21, course: 2 }
];

// Вывод информации о каждом студенте
students.forEach(displayStudentInfo);

        .dynamic-block {
            background-color: #4caf50; /* Цвет фона */
            color: white; /* Цвет текста */
            font-size: 2vmin; /* Размер шрифта относительно меньшего из высоты или ширины окна */
            width: 50vmin; /* Ширина блока 50% от меньшего размера окна */
            height: 30vmax; /* Высота блока 30% от большего размера окна */
            display: flex; /* Для центрирования текста */
            justify-content: center; /* Горизонтальное выравнивание текста */
            align-items: center; /* Вертикальное выравнивание текста */
            text-align: center; /* Выравнивание текста внутри блока */
            border-radius: 10px; /* Скругленные углы */
        }
    </style>
</head>
<body>
  

