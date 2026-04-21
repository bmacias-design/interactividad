let fps = 60;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(fps);
}

function draw() {
    background(147, 112, 219);
    noStroke();
    let colorValue = map(mouseX, 0, width, 0, 255);
    let colorRed = map(mouseX, 0, width, 0, 255);
    let colorGreen = map(mouseY, 0, height, 0, 255);
    fill(colorRed, colorGreen, 150);
    ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
