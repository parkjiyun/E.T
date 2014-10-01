
var img;

function setup(){
	createCanvas(400,400);
	img=loadImage("diamond.png");
}

function draw(){
  background(0);

  dragon(mouseX,mouseY);
}

  function dragon(x,y){
    fill(50,255,50);
    rect(x=15,y=30,30,50);
    fill(200,140,50);
    rect(x=15,y=60,10,30);
  }