


const el = 5

console.log(el);
const mainData = {
    a: 1,
    b: 2,
    c: 3
}
const arr = ['hello', 32432, '32425']

const [firstEl, second] = arr
console.log(...arr, second);
//деструктуризирующие присваивание
const {a, b, c} = mainData

console.log(c);


const string = 'hello world'
const formatedString = [...string]

console.log(formatedString);

const newData = [
    {
        id: 1,
        title: 'title  1',
        description: 'description 1'
    }, 
    {
        id: 2,
        title: 'title  2',
        description: 'description 2'
    }, 
    {
        id: 3,
        title: 'title  3',
        description: 'description 3'
    }
]


const newObjToArr = {
    id: Date.now(),
    title: 'title 4',
    description: 'description 4'
}

const newArr = [...newData, newObjToArr]


console.log(newArr)


function factorial(n) {
    // 5 <= 1
    if(n <= 1) {
        return 1
    }
    //5 * 4
    console.log(n);
    
    return n * factorial(n - 1)
}
// 5! = 5 * 4 * 3 * 2 * 1 --- factorial umnozheniya
console.log(factorial(5));

function jj(x) {
    
    
    console.log(x)
}

jj(10)

async function fetchKanyeApi() {
    const url = 'https://api.kanye.rest/'
    try {
        const response = await fetch(url)
        const {quote} = await response.json()
        document.write(quote)
        console.log(quote);
        
    } catch(error) {
        console.error(error)
    } 
}

fetchKanyeApi()