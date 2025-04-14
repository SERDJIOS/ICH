// Создайте функцию, которая принимает массив чисел в качестве параметра и возвращает произведение всех элементов массива. Затем вызовите функцию и выведите результат в консоль.

const nummers = [ 1,2,3,4];
function numbersOne(array){
    let coin = 1
    for (let i = 0; i < array.length; i++) {
        coin *= array[i];
        
    }
    return (coin)
}
console.log(numbersOne(nummers));

// Сумма элементов массива: Создайте массив чисел. Напишите код, который использует цикл while для подсчета суммы всех элементов массива.
const zifri = [1,2,3,4];
let sum = 0;
let i = 0;

while ( i < zifri.length){
    sum += zifri[i];
    i++;
}
console.log(sum);

