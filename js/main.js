// Star[] stars = new Star[800]


function setup() {
    createCanvas(windowWidth, 600);

}

function draw() {
    background(234, 130, 255);
    textSize(32);
    text('Hello New P5Js Boilerplate', 200, 300);
    fill(0, 102, 153);
    // text("put your p5.js code here",10, frameCount % height);
}


function windowResized() {
    resizeCanvas(windowWidth, 600);
}
