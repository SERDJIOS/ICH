// const arr = [ 1, 2,44,12,5,9]
// const accamulator = arr.reduce((acc, currentValue)=> {
//     return acc + currentValue
// },200)
// console.log(accamulator);


const people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 22 }
    ];
    const accValue =people.reduce ((a,b,index) => {
        return a + (index) + b.name
    },'')
    console.log(accValue);
    