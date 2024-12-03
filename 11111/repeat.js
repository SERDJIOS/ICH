localStorage.setItem('username', 'my name')
const username = localStorage.getItem('username')
// localStorage.removeItem('username')
localStorage.clear()



const p1 = new Promise((res, rej) => {
  
// const [data1] = Promise.all([p1])

// console.log(data1);

    if(10 > 15) {
        res('success')
    } else {
        rej('there is a mistake')
    }
})

p1
.then((res)=> {
    console.log(res);
})
.catch((rej) => {
    throw new Error(rej)
})

const arr = new Array()
const obj = new Object()
console.log(arr);



class IUser {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getId() {
        
        // return `${this.name} = doivodfb`
    }

    Array() {
        return [length]
    }

    Object(){

    }
}

const userOne = new IUser('yury', 27)

console.log(userOne.Array());

