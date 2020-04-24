let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c in canvas is always stands for canvas.getContext('...');
let c = canvas.getContext('2d');

/*
//fillRect => draw a filled x * y pixels rectangle with width and height.
//c.fillRect(x, y, width, height);
// adding color to rect
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(300, 300, 100, 100);
console.log(canvas);

// line
// beginPath() indicating we are going to begin a path
c.beginPath();
// moveTo and lineTo takes x and y;
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
// adding color to a line
c.strokeStyle = '#fa34a3';
c.stroke();

// Arc/ Circle
c.beginPath();
// Arc takes x, y(as int), a radius(as int), startAngle, endAngle, drawCounterClockwise(boolean)
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

for (let i=0; i<1000; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, ${Math.random()})`;
  c.stroke();  
}
*/
let mouse = {
  x: undefined,
  y: undefined
}

let maxRadius = 40;
let minRadius = 2;

let colorArray = [
  '#012340',
  '#023059',
  '#4A738C',
  '#F2F2F2',
  '#BFAE99'
];

window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fillStyle = this.color;
    c.stroke();
    c.fill();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) this.dx = -this.dx;
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;   

    // interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
        this.radius += 1;        
      }

    } else if (this.radius > minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

let circleArray = [];

function init() {
  circleArray = [];
  for (let i=0; i<800; i++) {
    let radius = (Math.random() * 3) + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }  
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i=0; i<circleArray.length; i++) {
    circleArray[i].update(); 
  }


}

init();
animate();
