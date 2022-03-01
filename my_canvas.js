var canvas = document.querySelector('canvas');

canvas.width = 2000;
canvas.height = 1000;

var ctx  = canvas.getContext('2d');

//ground
ctx.beginPath();
ctx.lineWidth = '10';
ctx.moveTo(0,700)
ctx.lineTo(1000,700);
ctx.stroke();
ctx.closePath();

//grass
var moveIncr = 0;
var lineIncr = 10;
for(var i =0; i<130; i++) {
ctx.beginPath();   
ctx.lineWidth = "1"  
ctx.strokeStyle = "green";    
ctx.moveTo( moveIncr, 700 );     
ctx.lineTo( lineIncr, 680);     
ctx.stroke()
moveIncr+=3;
lineIncr+=3;
}
var moveIncr1 = 1000;
var lineIncr1 = 990;
for(var i =0; i<115; i++) {
ctx.beginPath();   
ctx.lineWidth = "1"  
ctx.strokeStyle = "green";    
ctx.moveTo( moveIncr1, 700 );     
ctx.lineTo( lineIncr1, 680);     
ctx.stroke()
moveIncr1-=3;
lineIncr1-=3;
}
ctx.fillStyle = 'lightgreen';
ctx.fillText("Grass", 18,670);
ctx.closePath();

//house
ctx.beginPath(); 
ctx.lineWidth = '4';    
ctx.strokeStyle = "black";  
ctx.fillRect(400, 450, 250, 250);
ctx.fillStyle = 'brown';
ctx.fillRect(515, 600, 30, 100);
ctx.fillStyle = 'red';
ctx.fillRect(450, 500, 50, 50);
ctx.fillStyle = 'red';
ctx.fillRect(550, 500, 50, 50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'green'
ctx.moveTo(400,450);
ctx.lineTo(520,335);
ctx.lineTo(650,450);
ctx.fill();
ctx.font = '20px Arial';
ctx.fillStyle = 'white';
ctx.fillText("House", 480,405);

ctx.closePath();


//fence
var moveIncr2 = 400;
var lineIncr1 = 370; 
var lineIncr2 = 370;
for(var i =0; i<10;i++) {
ctx.beginPath();
ctx.moveTo(moveIncr2,629)
ctx.lineTo(lineIncr1,629);
ctx.lineTo(lineIncr2,700)
ctx.stroke()
moveIncr2 -=30;
lineIncr1 -=30;
lineIncr2 -=30;
}
var mv3 = 644;
var ln1 = 672; 
var ln2 = 672;
for(var i =0; i<10;i++) {
ctx.beginPath();
ctx.moveTo(mv3,629)
ctx.lineTo(ln1,629);
ctx.lineTo(ln2,700)
ctx.stroke()
mv3 +=30;
ln1 +=30;
ln2 +=30;
}
ctx.fillStyle = 'white';
ctx.fillText("Fence", 180,610);
ctx.closePath();
ctx.closePath();

//cloud
function drawCloud (x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
    ctx.arc(x + 70, y - 60, 70, Math.PI , Math.PI * 1.85);
    ctx.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    ctx.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    ctx.moveTo(x + 200, y + 60);
    ctx.lineTo(x, y + 60);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.fill();
    ctx.closePath()
}
    drawCloud(110,160);
    drawCloud(600,155);
    ctx.fillStyle = 'black';
    ctx.fillText("Cloud", 150,123);
    ctx.closePath();
    

//sun
ctx.beginPath();
ctx.fillStyle = "yellow";  
ctx.arc(1520, 80, 50, 0, Math.PI * 2,false);
ctx.fill();
ctx.fillStyle = 'black';
ctx.fillText("Sun", 1491,80);
ctx.closePath();

//river
ctx.beginPath();
ctx.moveTo(59,770);
ctx.bezierCurveTo(829,779,1300,900,1000,200);
ctx.moveTo(30,930);
ctx.bezierCurveTo(278,941,1600,1100,1100,180);
ctx.strokeStyle = '#9cd3db';
ctx.stroke();


//water
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(20,911);
ctx.bezierCurveTo(245,700,400,900,607,933);
ctx.bezierCurveTo(607,933,600,790,1044,807);
ctx.bezierCurveTo(1044,807,1067,630,1195,540);
ctx.bezierCurveTo(1080,420,1165,340,1047,280);
ctx.stroke();

//ladder
ctx.beginPath()
ctx.lineWidth = '10';
ctx.strokeStyle = '#BA8C63';
ctx.moveTo(1280,860);
ctx.lineTo(1280,300);
ctx.moveTo(1500,300);
ctx.lineTo(1500,860);
ctx.stroke();
ctx.closePath();
//ladder_Steps

var ladderY = 320;
for(var i =0; i<18; i++){
    ctx.beginPath();
    ctx.moveTo(1500,ladderY);
    ctx.lineTo(1280,ladderY);
    ctx.stroke();
    ladderY += 30
}
ctx.fillStyle = '#BA8C63';
ctx.fillText("Ladder",1350 ,300);
ctx.closePath();

