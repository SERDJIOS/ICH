// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext('2d')
// ctx.fillStyle = `rgb(66, 135, 245)`
// ctx.fillRect(10, 10, 100, 120)
// console.log([canvas.getContext('2d')]);

// const ctx = canvas.getContext('2d')
// ctx.fillStyle = `rgb(66, 135, 245)`
// ctx.fillRect(0, 0, 150, 150)
// ctx.clearRect(0,0,75,75)

// const ctx = canvas.getContext("2d");
// ctx.fillStylev = `rgb(200,300,245)`;
// ctx.fillRect(0, 0, 150, 150);
// ctx.clearRect(20, 30, 50, 55);
// ctx.clearRect(80, 40, 50, 50);
// ctx.clearRect(40, 120, 100, 20);

// const ctx = canvas.getContext('2d')
// ctx.fillStyle = 'rgb(200, 0, 0)'
// ctx.fillRect(25, 25, 100, 100)

// ctx.strokeStyle = 'pink'
// ctx.styleRect(50, 50, 150, 25)
// ctx.strokeRect(50, 50, 150, 25)

// const ctx = canvas.getContext('2d')
// ctx.fillStyle = `rgb(66, 135, 245)`
// ctx.fillRect(10, 10, 100, 120)
// console.log([canvas.getContext('2d')]);
// const ctx = canvas.getContext('2d')
// ctx.fillStyle = `rgb(66, 135, 245)`
// ctx.fillRect(0, 0, 150, 150)
// ctx.clearRect(0, 0, 50, 50)

//рисуем линию
// ctx.beginPath();
// ctx.moveTo(75, 50);
// ctx.lineTo(150, 50);
// ctx.strokeStyle = "aqua";
// ctx.stroke();
// //рисуем треугольник
// ctx.beginPath();
// ctx.moveTo(75, 50);
// ctx.lineTo(100, 75);
// ctx.lineTo(100, 25);
// ctx.fillStyle = "teal";
// ctx.fill();

// // risuem dugu
// ctx.beginPath();
// ctx.arc(75, 75, 50, 0, 5);
// ctx.lineWidth = 4;
// ctx.stroke();

// Нарисовать треугольник произвольного размера, обведенный зеленым контуром.
// const canvas1 = document.querySelector("#canvas");
// const ctx1 = canvas.getContext("2d");
// ctx1.beginPath();
// ctx1.moveTo(75, 150);
// ctx1.lineTo(200, 150);
// ctx1.lineTo(100, 75);
// ctx1.closePath();
// ctx1.strokeStyle = "green";
// ctx1.lineWidth = 4;
// ctx1.stroke();

// // Нарисовать круг радиусом 25px, залитый розовым цветом.
// const canvas2 = document.querySelector("#canvas");
// const ctx2 = canvas.getContext("2d");
// ctx2.beginPath();
// ctx2.arc(50, 100, 25, 0, Math.PI * 2); // Центр (100, 100), радиус 25px
// ctx2.fillStyle = "pink";
// ctx2.fill();

// // Нарисовать прямоугольник произвольного размера, залитый черным цветом
// const canvas3 = document.querySelector("#canvas");
// const ctx3 = canvas.getContext("2d");
// ctx3.fillStyle = "black";
// ctx3.fillRect(25, 25, 100, 50);

const sun = document.querySelector('#sun');
const ctx = sun.getContext('2d');
const centrX = 200;
const centrY = 200;
const sunRad = 50;

// Draw the sun (circle)
ctx.beginPath();
ctx.arc(centrX, centrY, sunRad, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();

// Rays (luchiki)
const rayCount = 12;
for (let index = 0; index < rayCount; index++) {
    const angle = (2 * Math.PI / rayCount) * index;
    const rayLength = index % 2 === 0 ? 70 : 100
    const startX = centrX + Math.cos(angle) * sunRad;
    const startY = centrY + Math.sin(angle) * sunRad;
    const endX = centrX + Math.cos(angle) * (sunRad + rayLength);
    const endY = centrY + Math.sin(angle) * (sunRad + rayLength);
    
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}


