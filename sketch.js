function setup() {
  createCanvas(800,500);
  background(0);
  textSize(24);
  textAlign(LEFT,TOP);
  fill(255);
}

function draw() {
  text("#715: on a black wall, pencil scribbles to maximum density.", 25,60);
if (mouseIsPressed) {
  stroke(170);
} else {
stroke(0);
}
line(mouseX,mouseY, pmouseX,pmouseY);
}