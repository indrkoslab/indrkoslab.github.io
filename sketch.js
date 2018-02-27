var x = 0;
var run = 100;

function setup() {
  createCanvas(600, 400œ);
}

function draw() {
  background (0);
  stroke(255);
  strokeWeight(4);
  noFill();
  //ellipse(x, 200, 100, 100);
  
  if (x > width || x < 0) {
    run = run * -1
    background(200)
  } else if ( x > 400) {
    background(255)
  } else if (x > 250) {
    background(0, 255, 140)
  } else if (x > 50) {
    background(255, 140, 0)
  }
    x = x + run;
    print(x);
}