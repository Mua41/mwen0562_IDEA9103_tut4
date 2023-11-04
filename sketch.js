let circles = [];
let gap = 90;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  let color1 = color(255, 0, 230);
  let color2 = color(200, 255, 0);

  for (let x = 0; x < width * 1.1; x += gap) {
    for (let y = 0; y < height * 1.1; y += gap) {
      let color = lerpColor(color1, color2, (x + y) / (width + height));
      circles.push(new Circle(x, y, 40, 1, color));
    }
  }

}

function draw() {

  for (let circle of circles) {
    circle.display();
    circle.rate = 0.5 + 0.9 * noise(circle.x * 0.01, circle.y * 0.01, frameCount * 0.09);
  }

}

class Circle {
  constructor(x, y, r, rate, col) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rate = rate;
    this.col = col;


    // this.colorA = color(random(360), 100, 100);
    // this.colorB = color(random(360), 150, 100);
    // this.colorC = color(random(360), 150, 100);
    // this.colorD = color(random(360), 100, 100);
    // this.colorF = color(random(360), 100, 100);
    // this.colorE = color(random(360), 50, 100);
  }

  display() {

    noStroke()
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2 * this.rate, this.r * 2 * this.rate);

  }



}