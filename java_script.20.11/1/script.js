function fn() {
    console.log(this)
}

fn()

const obj = {
    name: 'Serjio',
    age: 31,
    lastName: 'Zeus',
    infoAboutUser: function() {
        console.log(`username is ${this.name}, ${this.age}, ${this.lastName}`)
        console.log(this);
        
    }

}

obj.infoAboutUser()

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', function(){
//     console.log(this);
    
// });

// // Создать объект person со свойствами name и age и с методом myAge, который будет выводить сообщение в консоль с использованием свойства age объекта.

const obj1 = {
    name: 'Tipu',
    age: 40,
    lastName: 'Zeus',
    myAge: function() {
        console.log(` tipu ${this.age} let`)
        
    }

}

obj1.myAge()


// // Создать объект calculator с методами add и multiply и свойством result, равному 0, которые будут принимать два числа и возвращать их сумму и произведение соответственно в переменную result.

const calculator = {
    result: 0,

    
    add: function(a,b){
       return(this.result = a + b)
        
        // МЕТОД - ФУНКЦИЯ ВНУТРИ ОБЪЕКТА
    },
    multiply: function(x,y) {
        this.result = x * y
        return this.result
        
    }
   
}
calculator.add(2,2)
console.log(calculator.result);

calculator.multiply(3,3)
console.log(calculator.result);


// // Создать обработчик события “click” для кнопки, при клике на которую будет меняться цвет фона.
// // Создать обработчик события “click” для кнопки, при клике на которую будет меняться цвет фона.

const btn = document.querySelector('.btn')
btn.addEventListener('click', function(){
    this.style.backgroundColor = 'red'
    
})


// Создать объект car с методами start, stop и свойством isRunning, равным false. Метод start должен установить isRunning в true и вывести сообщение "Car is running". Метод stop должен установить isRunning в false и вывести сообщение "Car stopped".

const car = {
    isRunning: false,
    start() {
        this.isRunning = true;
        console.log("Car is running");
    },
    stop() {
        this.isRunning = false;
        console.log("Car stopped");
    }
};


car.start(); 
// car.stop();  


// Задача 4: Объект rectangle
// Создать объект rectangle с методами area и perimeter, а также свойствами width и height. Метод area должен возвращать площадь, а метод perimeter — периметр.
const rectangle = {
    width: 10, 
    height: 5, 

    area() {
        return this.width * this.height;
    },

    perimeter() {
        return 2 * (this.width + this.height);
    }
};

console.log(rectangle.area());
console.log(rectangle.perimeter()); 


// Задача 5: Объект bankAccount
// Создать объект bankAccount с методами deposit, withdraw и свойством balance, равным 0. Метод deposit должен увеличивать balance на указанную сумму, а метод withdraw должен уменьшать balance, если на счете достаточно средств, или выводить сообщение "Insufficient funds".


const bankAccount = {
    balance: 0,

    deposit: function (sum) {
        this.balance += sum;
        return `Баланс пополнен: ${sum}. Текущий баланс: ${this.balance}`;
    },

    withdraw: function (sum) {
        return this.balance >= sum
            ? `Снято: ${sum}. Текущий баланс: ${this.balance -= sum}`
            : "Недостаточно средств";
    }
};

// Пример использования:
console.log(bankAccount.deposit(100));  // Баланс пополнен: 100. Текущий баланс: 100
console.log(bankAccount.withdraw(30)); // Снято: 30. Текущий баланс: 70
console.log(bankAccount.withdraw(100)); // Недостаточно средств
