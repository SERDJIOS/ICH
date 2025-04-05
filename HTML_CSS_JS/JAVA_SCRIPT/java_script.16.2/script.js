// const btn = document.querySelector('#btn')

// console.log(btn);

// btn.addEventListener('click', function(){})

// btn.addEventListener('click',() => {})

// // function hello(callBackFn){
// //     return callBackFn()
// // }

// // function fn(){
// //     console.log('hello world');

// // }
// // hello (fn())

const arr = ["one", "two", "drei"];
const ul = document.createElement("ul");

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function () {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.innerText = arr[i];
    ul.append(li);
  }
});

document.body.insertAdjacentElement("afterbegin", ul);



//     У вас есть элемент, например, <p>. При клике на элементе, измените его текст. При следующем клике восстановите исходный текст.
// {/* Задачу решить двумя способами:  c помощью атрибута onclick и с помощью addEventListener. */}
const p = document.querySelector('p');
function click() {
  p.innerText = "1click";
  
}
p.addEventListener("click", function () {
    p.innerText = '2click'
  });
