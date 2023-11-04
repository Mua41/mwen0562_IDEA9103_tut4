let circles = [];  


function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  background(200,150,60);

  let maxRadius = new Circle(0, 0, 50, 16, 3).getBoundaryRadius(); 
  let rows = 10;
  let cols = 10;

  for (let rowIndex = 0, y = maxRadius; rowIndex < rows; y += maxRadius * 1.9, rowIndex++) {
    
    let startX = rowIndex % 2 == 0 ? maxRadius : maxRadius + maxRadius; 
    for (let colIndex = 0, x = startX; colIndex < cols; x += maxRadius * 2.1, colIndex++) {
        circles.push(new Circle(x, y, 50, 16, 3));
    }
  }

}

function draw() {

  translate(-200,-100);
  rotate(50);

  for (let circle of circles) {
    circle.display();
  }
}

class Circle {
  constructor(x, y, r, count, gap) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.count = count; 
    this.gap = gap; 
    
    this.colorA = color(random(360), 100, 100);
    this.colorB = color(random(360), 150, 100);
    this.colorC = color(random(360), 150, 100);
    this.colorD = color(random(360), 100, 100);
    this.colorF = color(random(360), 100, 100);
    this.colorE = color(random(360), 50, 100);
  }

  getBoundaryRadius() {
    let smallCircleRadius = 1.5;
    return this.r + this.gap * 2 + 5 * this.gap * smallCircleRadius + smallCircleRadius;
  }

  display() {
    let smallCircleRadius = 1.5;
    let smallcircleNumber = 36;
    let boundaryRadius = this.r + this.gap * 2 + 5 * this.gap * smallCircleRadius + smallCircleRadius;

    fill(this.colorE); 
    ellipse(this.x, this.y, boundaryRadius * 2);
    
    for (let i = 0; i < this.count; i++) {
      let radius = this.r - i * this.gap;
      if (i === this.count - 1) {  
        fill(255);  
      } else if (i <= this.count / 2) {  
        if (i % 2 === 1) {  
          fill(this.colorA); 
        } else { 
          fill(this.colorB);  
        }
      } else if (i >= this.count / 2 + 1 && i < this.count - 1) {  
        if (i % 2 === 1) {  
          fill(this.colorC);  
        } else {  
          fill(this.colorD);  
        }
      }
      noStroke();
      ellipse(this.x, this.y, radius * 2);
    }
    
    for (let j = 0; j < 5; j++) {
      
      let outerRadius = this.r + this.gap * 2 + j * this.gap * smallCircleRadius; 
      fill(this.colorF); 
      for (let i = 0; i < (smallcircleNumber + j * 3); i++) {
        let angle = TWO_PI / (smallcircleNumber + j * 3) * i;
        let smallCircleX = this.x + outerRadius * cos(angle);
        let smallCircleY = this.y + outerRadius * sin(angle);
        
        ellipse(smallCircleX, smallCircleY, smallCircleRadius * 2);
      }
    }
  }
}