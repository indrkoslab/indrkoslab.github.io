// Star[] stars = new Star[800]


function setup() {
    createCanvas(windowWidth, 600, WEBGL);
}

function draw() {
    background(234, 130, 255);
    // 3d sphere
    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(100);
    pop();
    // text
    textSize(32);
    text('Hello New P5Js Boilerplate', 200, 300);
    fill(0, 102, 153);
    // text("put your p5.js code here",10, frameCount % height);
}


function windowResized() {
    resizeCanvas(windowWidth, 600);
}