let circles = [];
let gap = 90;

function setup() {

  createCanvas(windowWidth, windowHeight);
  
  let color1 = color(255, 0, 230);
  let color2 = color(200, 255, 0);

  for (let x = 0; x < width * 1.1; x += gap) {
    for (let y = 0; y < height * 1.1; y += gap) {
      let color = lerpColor(color1, color2, (x + y) / (width + height));
      circles.push(new myCircle(x, y, 40, 0.5, color));
    }
  }

}

function draw() {

  background(0);

  for (let circle of circles) {
    circle.display();
    circle.rate = 0.5 + 1.1 * noise(circle.x * 0.01, circle.y * 0.01, frameCount * 0.1);
  }

}

class myCircle {
  constructor(x, y, r, rate, col) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rate = rate;
    this.col = col;


    this.colorA = color(177,77,114);
    this.colorB = color(random(360), 150, 100);
    
  }

  display() {

    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2 * this.rate, this.r * 2 * this.rate);
    stroke(255);
    strokeWeight(this.rate);
  
    for (let i = 0; i < 3; i++) {
      let l = this.r * 0.7 * this.rate + this.r * 0.1 * i * this.rate;
      for (let i = 0; i < PI * 2; i += PI / 30) {
        let px = this.x + l * cos(i);
        let py = this.y + l * sin(i);
        point(px,py);

      }
    }

    noStroke()
    for (let i = 6; i >= 0; i--) {

      if (i % 2 == 0) {
        fill(this.colorA)
      } else {
        fill(this.colorB)
      }
      ellipse(this.x, this.y, this.r * 0.2 * i * this.rate);
    }

  }



}