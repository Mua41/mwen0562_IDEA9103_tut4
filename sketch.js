let circles = []; // Create an empty array to store instances of circles
let gap = 80; // Set the gap between circles

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas the size of the window
  
  // Define two colors
  let color1 = color(255, 0, 230);
  let color2 = color(200, 255, 0);

  // Nested loops to create a series of circles and push them into the array
  for (let x = 0; x < width * 1.1; x += gap) {
    for (let y = 0; y < height * 1.1; y += gap) {
      // Calculate color based on position using lerpColor() function
      let color = lerpColor(color1, color2, (x + y) / (width + height));
      // Create an instance of myCircle and push it into the circles array
      circles.push(new myCircle(x, y, 40, 0.5, color));
    }
  }
}

function draw() {
  background(0); // Set the background color to black

  // Loop through all circles in the array, display them, and modify their size
  for (let circle of circles) {
    circle.display(); // Display the circle
    circle.rate = 0.5 + 0.9 * noise(circle.x * 0.01, circle.y * 0.01, frameCount * 0.1); // Set rate based on noise
  }
}

class myCircle {
  constructor(x, y, r, rate, col) {
    this.x = x; // x-coordinate of the circle's center
    this.y = y; // y-coordinate of the circle's center
    this.r = r; // Radius of the circle
    this.rate = rate; // Rate of change
    this.col = col; // Color of the circle

    this.colorA = color(177, 77, 114); // Color A
    this.colorB = color(random(360), 150, 100); // Color B
  }

  display() {
    noStroke();
    fill(this.col); // Fill the circle with its color
    ellipse(this.x, this.y, this.r * 2 * this.rate, this.r * 2 * this.rate); // Draw the circle

    stroke(255);
    strokeWeight(this.rate);

    // Draw points around the circle
    for (let i = 0; i < 3; i++) {
      let l = this.r * 0.7 * this.rate + this.r * 0.1 * i * this.rate;
      for (let i = 0; i < PI * 2; i += PI / 30) {
        let px = this.x + l * cos(i);
        let py = this.y + l * sin(i);
        point(px, py);
      }
    }

    noStroke();
    for (let i = 6; i >= 0; i--) {
      // Fill with different colors based on i's parity
      if (i % 2 == 0) {
        fill(this.colorA);
      } else {
        fill(this.colorB);
      }
      ellipse(this.x, this.y, this.r * 0.2 * i * this.rate); // Draw concentric circles
    }
  }
}
