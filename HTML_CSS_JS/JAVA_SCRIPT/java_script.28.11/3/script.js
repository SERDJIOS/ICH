// Задача 1

// Создайте класс Shape, у которого есть метод draw().
// Создайте два наследника класса Shape: Rectangle и Circle.
// У каждого наследника должен быть свой метод draw(), который переопределяет метод родительского класса.
// Создайте массив, содержащий экземпляры классов Rectangle и Circle.
// // Используйте цикл для вызова метода draw() для каждого элемента массива.
// Базовый класс Shape
class Shape {
    draw() {
      console.log("auuueeeee");
    }
  }
  
  
  class Rectangle extends Shape {
    draw() {
      console.log("rectangle");
    }
  }
  
 
  class Circle extends Shape {
    draw() {
      console.log("circle");
    }
  }
  

  const shapes = [
    new Rectangle(),
    new Circle(),
    new Rectangle(),
    new Circle()
  ];
  
 
  for (const shape of shapes) {
    shape.draw();
  }