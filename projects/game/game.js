var canvas;
var ctx;
var ball;
var numBalls = Math.random() * (20)+30;
var balls = [];
var begin = 0;

function Ball(radius, color) {
 this.x = 0;
 this.y = 0;
 this.vx = 0;
 this.vy = 0;
 this.radius = radius;
 this.color = random_color();
}


Ball.prototype.draw = function (ctx) {
ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.fill();
}; 

function random_color() {

  var letter = "0123456789ABCDEF".split(""); 
  var color = "#";                           
  for(var i = 0; i < 6; i++){                
    color += letter[Math.round((Math.random()*6)+8)]; 
  }
  return color;
}


function init() {

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

for (var i = 0; i<numBalls; i++){
    var min =Math.random()* -10 ;
    var max =Math.random()* 10 ;
    console.log(canvas.height);
    ball = new Ball(Math.random() * 40 + 5, Math.random() * 0xffffff);
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.vx = Math.random() *(max-min)+min;
    ball.vy = Math.random() *(max-min)+min;
    ball.draw(ctx);
    balls.push(ball)
}
animFrame();
}

function animFrame() {
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

    requestAnimationFrame(animFrame, canvas);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < numBalls; i++){
        var ball = balls[i];
        ball.x += ball.vx;       // Undefined here down.
        ball.y += ball.vy;
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0)
            ball.vx = -ball.vx;
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0){
            ball.vy = -ball.vy;
        }
    ball.draw(ctx);
    }
  }
  function w3_open() {
      
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("mySidebar").style.display = "block";

  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }