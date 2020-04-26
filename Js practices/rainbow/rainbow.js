let c = document.querySelector('canvas');
let ctx = c.getContext('2d');

let midx = c.width/2;
let midy = c.height/2;
let colorArray = ['#E10000', '#FF8000', '#FFFF00', '#00FF00', '#0000FF'];

let factor = 0.01;

let start1 = 1, end1 = 1.01;
let start2 = 0, end2 = 0.01;
let i =0;
function slowMotion(clockWise) {
  if (start2 <= 0.8 && start2 > 0.4) i = 1;
  else if (start2 <= 1.2 && start2 >0.8) i=2;
  else if (start2 <= 1.6 && start2 > 1.2) i=3;
  else if (start2 <= 2 && start2 > 1.6) i=4;
  drawCir(20, start1+=factor, end1+=factor, i);
  drawCir(-20, start2+=factor, end2+=factor, i);
}

function drawCir(diff, s, e, i) {
  ctx.beginPath();
  ctx.arc(midx+diff, midy, 20, (s)*Math.PI, (e)*Math.PI, false);
  ctx.strokeStyle = colorArray[i];
  ctx.stroke();
}

let count = 0;
let interval = setInterval(function() {
  slowMotion(false);
  count+=1;
  console.log(count);
  if (count >= 206) {
    clearInterval(interval);
    return;
  };
}, 50);