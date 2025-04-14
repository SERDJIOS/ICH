// class Person {
//     constructor(age, name, lastname) {
//         this.name = name
//         this.age = age
//         this.lastname = lastname
//     }
//     getFullname() {
//         return `${this.age, this.name, this.lastname}`

//     }
//     canvote() {
//         if (this.age > 18) {
//             return "Can vote" + `${this.name} `

//         }
//         else {
//             console.log("Can not vote");

//         }
//     }
// }
// const person1 = new Person("Nati", "Lastname", 15)
// console.log(person1.getFullname());
// console.log(person1.canvote());

// class Student {
//     constructor(name, lastName, age, grade) {
//         this.name = name,
//         this.lastName = lastName,
//         this.age = age,
//         this.grade = grade
//     }

//     getAverageGrade() {
//         const average = this.grade.reduce((sum, grade) => sum + grade)
//         return average / this.grade.length
//     }

//     getStatus() {
//         const result = this.getAverageGrade();

//         if(result > 70) {
//             return `${this.name} ${this.lastName} studied well`
//         } else if(result > 50 && result < 70){
//             return `${this.name} ${this.lastName} studied normal`
//         }else {
//             return `${this.name} ${this.lastName} studied bad`
//         }
//     }
// }
// class Student {
//     constructor(name, lastname, age, grades) {
//         this.name = name
//         this.lastname = lastname
//         this.age = age
//         this.grades = grades
//     }
//     average() {
//         const average = this.grades.reduce((acum, cur) => acum + cur)
//         return average / this.grades.length
//     }
//     getStatus() {
//         const result = this.average()
//         if (result > 70) {
//             return `${this.name} ${this.lastname} studied well`

//         }
//         else if (result > 50 && result < 70) {
//             return `${this.name} ${this.lastname} studied normal`
//         }
//         else {
//             return `${this.name} ${this.lastname} studied normal`
//         }
//     }
// }


// const masstudent = [

//     {

//         student: "Jorje",
//         lastname: "Brown",
//         age: 21,
//         grade: [111, 22, 56, 47]


//     },
//     {

//         student: "Jarjelino",
//         lastname: "Rudial",
//         age: 17,
//         grade: [111, 22, 43, 47]


//     },
//     {

//         student: "Jacob",
//         lastname: "B",
//         age: 18,
//         grade: [111, 33, 56, 47]


//     },
//     {

//         student: "Jorje",
//         lastname: "B",
//         age: 21,
//         grade: [122, 22, 56, 47]


//     },

// ]





// const renderStudent = (students) => {
//     const container = document.querySelector('.container')
//     students.sort((a, b) => b.average() - a.average())
//     students.forEach(e => {
//         const div = document.createElement('div')
//         div.innerHTML = ` <h3>${e.name} ${e.lastname}</h3> <p>Возраст: ${e.age}</p> <p>Средний балл: ${e.average()}</p> <p>Статус: ${e.getStatus()}</p> `;
//         container.append(div)
//     });
// }


// const result = masstudent.map(item => new Student(item.name, item.lastname, item.grade))

// renderStudent(result)





// Создайте класс UserDetails.
// Конструктор принимает userId (ID пользователя).
// Добавьте метод fetchUser(), который загружает данные пользователя с JSONPlaceholder.
// Добавьте метод fetchPosts(), который загружает список постов пользователя.
// Добавьте метод renderUserDetails(containerId), который отображает на странице:
// Имя пользователя,
// Email,
// Город,
// Количество постов.
// Вызывайте методы асинхронно для отображения данных на странице.



class UserDetails {

    constructor(userId) {
        this.userId = userId;
        this.userData = null;
        this.userPosts = [];
    }

    async fetchUser() {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${this.userId}`
        );
        this.userData = await response.json();
    }
    async fetchPosts() {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`
        );
        if (!response.ok) {
            throw new Error("request error");
        }
        this.userPosts = await response.json();
    }
    renderUserData() {
        const container = document.querySelector(".user__container");
        const userDetails = document.createElement("div");
        userDetails.classList.add('details')
        userDetails.innerHTML = `
        <h3>${this.userData.username}  </h3>
         <p>Email: ${this.userData.email}</p>
        <p>City: ${this.userData.address.city}</p> 
        <p class="details_amount">Amount of posts: ${this.userPosts.length}</p>       
    `;
        container.append(userDetails)
        
    }
}
(async () => {
    const userDat = new UserDetails(8);
    try {
        await userDat.fetchUser();
        await userDat.fetchPosts();
        userDat.renderUserData();
        console.log(userDat);
    }
    catch (error) {
        console.error("Error");
    }


})();