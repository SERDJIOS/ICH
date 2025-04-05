// У вас есть массив объектов, представляющих товары с их названиями, категориями и ценами.
const products = [
    { name: "Laptop", category: "electronics", price: 1000 },
    { name: "Phone", category: "electronics", price: 500 },
    { name: "Shoes", category: "apparel", price: 100 },
    { name: "Watch", category: "accessories", price: 150 },
    { name: "Headphones", category: "electronics", price: 200 },
];
// Отфильтруйте товары категории "electronics".
  const filter = products.filter(item => item.category ==  "electronics")
  console.log(filter);
  
// Затем с помощью map создайте массив с ценами этих товаров.
const price = filter.map(item => item.price)
console.log(price);
console.log("================================");



// С помощью reduce найдите общую стоимость всех товаров в категории "electronics".
const kassa = price.reduce((a,b) => a + b)

console.log(kassa);
console.log("================================");

  
  
// У вас есть массив объектов, представляющих студентов с именами и их средним баллом.
const students = [
    { name: 'Анна', grades: 80 },
    { name: 'Иван', grades: 88 },
    { name: 'Мария', grades: 85 }
];

console.log("================================");

// Найдите первого студента со средним баллом выше 80.
const grades = students.find(student => student.grades > 80)
if (!foundStudent) {
    students.unshift({ name: 'Serjio', grades: 85 });
}
console.log(students)

console.log("================================");


// // Если такой студент не найден, добавьте нового студента в начало массива с баллом 85, используя unshift.



// // Верните обновленный массив студентов.




// У вас есть массив объектов, представляющих товары в корзине с их названиями, количеством и ценой за единицу.
 const cart = [
     { name: 'Laptop', quantity: 1, price: 1200 },
     { name: 'Mouse', quantity: 2, price: 25 },
     { name: 'Keyboard', quantity: 0, price: 45 },
     { name: 'Monitor', quantity: 2, price: 150 }
 ];
 // Отфильтруйте товары, у которых количество больше 0.
 const cartFilterd = cart.filter( item => item.quantity > 0)

 console.log("================================");
 
// Примените map, чтобы пересчитать общую стоимость каждого товара (количество * цена за единицу).
const cardPricea = cartFilterd.map(item => ({
    ...item,
    totalPrice: item.quantity * item.price
  }));

  console.log("================================");

// Используя reduce, найдите итоговую стоимость всех товаров в корзине.
const summa = cardPricea.reduce((sum,item) => sum + item.totalPrice, 0)
console.log(summa);

// У вас есть массив объектов, представляющих задачи с их названиями и статусом (completed: true/false).
const tasks = [
    { title: "Сделать зарядку", completed: true },
    { title: "Приготовить завтрак", completed: false },
    { title: "Почитать книгу", completed: false },
    { title: "Закончить проект", completed: true },
  ];
  
  // Отфильтруйте задачи, которые еще не выполнены (completed: false).
  const filterTasks = tasks
  .filter(item => item.completed === false)
// С помощью map создайте массив, содержащий только названия этих задач.
.map(item => item.title)
// Если массив незавершенных задач пустой, добавьте новую задачу в начало исходного массива с помощью unshift.
if(filterTasks.length === 0){
    tasks.unshift({title:'go to nach hause', completed: false})
}
console.log(filterTasks);

console.log("================================");

// У вас есть массив объектов, представляющих студентов с их именами и оценками (массив чисел).

// Используя map, для каждого студента подсчитайте его средний балл и добавьте это значение как новое свойство averageScore.
// С помощью filter оставьте только тех студентов, у которых средний балл выше 70.
// С помощью reduce найдите средний балл среди отфильтрованных студентов.
// // Создавайте массив самостоятельно!


// Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.
const obj = [
    {name: 'random',price: 22},
    {name: 'item',price: 222},
    {name: 'viel',price: 70},
]
const hasExpensiveItem = obj.find( item=> item.price > 50)
console.log(hasExpensiveItem);

console.log("================================");


function random (a,b) {
    return new Promise((res, rej) => {
        if (a.length > b) {
            res('норм')
        } else {
            rej ('ну такое')
        }
    })
}
random('hello', 4)
.then((result) => console.log(result))
.catch((error) => console.log(error))
.finally(() => console.log('Это конец'))