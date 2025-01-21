let canvasWidth = 800;
let canvasHeight = 800;

let topLayer; // Declare topLayer as a global variable
let bottomLayer; // Declare bottomLayer as a global variable
let startX = -canvasWidth; // Start off-screen
let weightDifference;
let blackWeight;
let whiteWeight;
let maskGraphics; 


function setup() {
  createCanvas(canvasWidth, canvasHeight); // Set the canvas size
  // noLoop(); // Ensure the stripes are drawn only once
  // Center the canvas
  topLayer = createGraphics(canvasWidth, canvasHeight); // Initialize topLayer
  bottomLayer = createGraphics(canvasWidth, canvasHeight); // Initialize bottomLayer

  startX = -canvasWidth; // Reset startX for drawing stripes

  weightDifference = random(-5, 5);
  blackWeight = random(5, 20);
  whiteWeight = blackWeight + weightDifference;

  // Draw top layer stripes
  while (startX < canvasWidth) {
    // Draw black stripe
    topLayer.stroke(0);
    topLayer.strokeWeight(blackWeight);
    topLayer.line(startX, 0, startX + canvasWidth, canvasHeight);
    startX += blackWeight;

    // Draw white stripe
    topLayer.stroke(255);
    topLayer.strokeWeight(whiteWeight);
    topLayer.line(startX, 0, startX + canvasWidth, canvasHeight);
    startX += whiteWeight;
  }

  startX = -canvasWidth; // Reset startX for bottom layer stripes

  // Draw bottom layer stripes in the opposite diagonal direction
  while (startX < canvasWidth) {
    // Draw black stripe
    bottomLayer.stroke(255);
    bottomLayer.strokeWeight(blackWeight);
    bottomLayer.line(startX, canvasHeight, startX + canvasWidth, 0);
    startX += blackWeight;

    // Draw white stripe
    bottomLayer.stroke(0);
    bottomLayer.strokeWeight(whiteWeight);
    bottomLayer.line(startX, canvasHeight, startX + canvasWidth, 0);
    startX += whiteWeight;
  }
  
  maskGraphics = createGraphics(width, height);
  maskGraphics.noFill();
  maskGraphics.ellipseMode(CENTER);
}

function draw() {
  background(255);

  image(topLayer, 0, 0); // Use the global topLayer variable
  image(bottomLayer, 0, 0); // Use the global bottomLayer variable
  
  //   // Update the mask with a moving circle
//   maskGraphics.clear(); // Clear previous frames
//   maskGraphics.fill(255); // White area defines the visible part
//   // let circleX = mouseX;
//   // let circleY = mouseY;
//   // let circleDiameter = 150;
//   // maskGraphics.ellipse(circleX, circleY, circleDiameter);
//   let halfWidth = canvasWidth/2;
//   maskGraphics.square(halfWidth, 0, halfWidth);
//   maskGraphics.square(0, halfWidth, halfWidth);

// //   Apply the mask to the top layer
//   let maskedLayer = topLayer.get(); // Get a copy of the top layer
//   maskedLayer.mask(maskGraphics);

//   // Draw the masked top layer
//   image(maskedLayer, 0, 0);
//   noStroke();
//   triangle(0, 0, halfWidth, 0, 0, halfWidth);
//   triangle(0, halfWidth, 0, canvasHeight, halfWidth, canvasHeight);
//   triangle(halfWidth, 0, canvasWidth, 0, canvasWidth, halfWidth);
//   triangle(halfWidth, canvasHeight, canvasWidth, canvasHeight, canvasWidth, halfWidth);
}
