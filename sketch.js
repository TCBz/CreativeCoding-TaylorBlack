function setup() {
  createCanvas(400,400);
  strokeWeight(10);
  rectMode(CENTER);
}

function draw() {
  background(100);

quad(10,10, 200,10, 390,390, 200,390);
ellipse(100,100,100,350);
 rect(200,200,100,100)
 line(0,0,400,400);
 triangle(400,0, 200,0, 400,400);
 arc(300,300, 100,100, 0, PI, CHORD);
}