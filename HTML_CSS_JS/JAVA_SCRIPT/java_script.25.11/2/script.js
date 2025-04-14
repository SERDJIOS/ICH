// Задача 1
// Создайте класс CopyEntity. У него должен быть статический метод copyObject, который бы копировал любой объект. Метод copyObject принимает любой объект и возвращает его копию.
class CopyEntity{
  static copyObject(obj){
    return Array.isArray(obj) ? [...obj] : {...obj};
  }
}
const arr1 = [1, 2, 3];
const obj1 = {
  a: 1,
  b: 2,
}

const arr2 = CopyEntity.copyObject(arr1);
const arr3 = CopyEntity.copyObject(obj1);

arr1[0] = 999;

console.log(arr1);
console.log(arr2);
console.log("============================");

// Задача 1: Библиотека книг
// Создайте класс Library, который управляет коллекцией книг. У класса должны быть методы:

// addBook(book): Добавляет книгу в библиотеку. Книга представляет собой объект с ключами title, author и year.
// getBookByTitle(title): Возвращает книгу по названию (title).
// listBooks(): Возвращает массив объектов всех книг в библиотеке.
// removeBookByTitle(title): Удаляет книгу из библиотеки по названию.

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (book && book.title && book.author && book.year) {
      this.books.push(book);
      return `Book "${book.title}" has been added.`;
    } else {
      throw new Error("Invalid book format. Ensure it has title, author, and year.");
    }
  }

  getBookByTitle(title) {
    return this.books.find(book => book.title === title) || null;
  }

  listBooks() {
    return this.books;
  }

  removeBookByTitle(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      return `Book with title "${removedBook.title}" has been removed.`;
    } else {
      throw new Error(`Book with title "${title}" not found.`);
    }
  }
}

// Example usage:
const book1 = {
  title: "auf",
  author: "er",
  year: 33,
};

const newLibrary = new Library();
console.log(newLibrary.addBook(book1)); // Add a book
console.log(newLibrary.getBookByTitle("auf")); // Get book by title
console.log(newLibrary.listBooks()); // List all books
console.log(newLibrary.removeBookByTitle("auf")); // Remove book by title
console.log(newLibrary.listBooks()); // List books after removal

console.log("============================");


// Задача 2: Фильтрация объектов с Object.entries()
// Есть объект с информацией о студентах и их оценках. Используя Object.entries(), получите массив студентов, которые сдали экзамен (оценка >= 50).

const students = {
  student1: {
      name: "John Doe",
      grades: {
          math: 90,
          english: 85,
          science: 88,
          history: 92
      }
  },
  student2: {
      name: "Jane Smith",
      grades: {
          math: 78,
          english: 92,
          science: 81,
          history: 75
      }
  },
  student3: {
      name: "Emily Johnson",
      grades: {
          math: 25,
          english: 33,
          science: 33,
          history: 33
      }
  },
  student4: {
      name: "Michael Brown",
      grades: {
          math: 70,
          english: 80,
          science: 75,
          history: 72
      }
  }
};
const passedStudents = Object.entries(students)
.filter(([key,student]) => Object.values(students.grades).every(grade => grade >= 50))
.map(([key,student])  => student.name);
console.log(passedStudents); 



// Задача 3: Преобразование объекта с Object.values()
// Есть объект, представляющий инвентарь магазина. Преобразуйте значения (количество товаров) в массив, увеличив каждое значение на 10%.


// Задача 4: Поиск ключей с Object.keys()
// Есть объект с данными о задачах. Каждая задача имеет статус done или pending. Используя Object.keys(), получите массив ключей задач, которые находятся в статусе done.