class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  getFullname() {
    return `${this.name}, ${this.lastName},${this.age}`;
  }
  canVote() {
    if (this.age >= 18) {
      return `User ${this.name} ${this.lastName} can Vote`;
    } else if (this.age < 18) {
      return `User ${this.name} ${this.lastName} cannot vote.`;
    }
  }
}
const person1 = new Person("Serjio", "Zeus", "23");
console.log(person1.getFullname());
console.log(person1.canVote());
const person2 = new Person("Kreal", "Zeus", "28");
console.log(person2.getFullname());
console.log(person2.canVote());

console.log("====================================");

class Student {
  constructor(name, lastName, age, grade) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.grade = grade;
  }

  getAverageGrade() {
    const sum = this.grade.reduce((total, grade) => total + grade);
    return sum / this.grade.length;
  }

  getStatus() {
    const result = this.getAverageGrade();
    if (result > 70) {
      return `${this.name} ${this.lastName} studied well`;
    } else if (result > 50 && result < 70) {
      return `${this.name} ${this.lastName} studied normal`;
    } else {
      return `${this.name} ${this.lastName} studied bad`;
    }
  }
}

const students = [
  {
    name: "jane",
    lastName: "ivanova",
    age: 21,
    grade: [44, 33, 35, 40],
  },
  {
    name: "kate",
    lastName: "iva",
    age: 24,
    grade: [42, 59, 75, 89],
  },
  {
    name: "mari",
    lastName: "ivanich",
    age: 33,
    grade: [55, 66, 87, 99],
  },
];

const renderStudent = (students) => {
  const container = document.querySelector(".container");
  students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
  students.forEach((item) => {
    const studentElement = document.createElement("div");
    studentElement.innerHTML = `
            <h3>${item.name} ${item.lastName}</h3>
            <p>Возраст: ${item.age}</p>
            <p>Средний балл: ${item.getAverageGrade()}</p>
            <p>Статус: ${item.getStatus()}</p>
        `;
    container.append(studentElement);
  });
};

const result = students.map(
  (item) => new Student(item.name, item.lastName, item.age, item.grade)
);
renderStudent(result);

console.log("====================================");

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
        <p>City: ${this.userPosts.length}</p>       
    `;
    container.append(userDetails)
      }
    }
    (async () => {
      const userDat = new UserDetails(5);
      await userDat.fetchUser();
      await userDat.fetchPosts();
      userDat.renderUserData();
      console.log(userDat);
      
    })();