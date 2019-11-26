function setup() {
  createCanvas(800, 800);
  background(179, 255, 249);
 
  frameRate(10)
}
  //border 
function draw() {
for (var y = 0; y < height+45; y += 40) {
fill(0, 242, 255);
ellipse(0, y, 50, 38);
}
for (var x = 0; x < width+45; x += 40) {
fill(0, 242, 255);
ellipse(x, 0, 38, 50);
}
for (var t = 0; t < height+45; t += 40) {
fill(0, 242, 255);
ellipse(800, t, 50, 38);
}
for (var u = 0; u < width+45; u += 40) {
fill(0, 242, 255);
ellipse(u, 800, 38, 50);
}
  
  //inside 
    for (var y = 0; y <= height; y += 40) {
for (var x = 0; x <= width; x += 40) {
fill(230, 10);
ellipse(x, y, 40, 40); 
  
  //face
  fill(255, 252, 51);
  stroke(240, 168, 0);
  strokeWeight(4);
  ellipse(400, 400, 500, 500);
  
    // Blush
  noStroke();
  fill(255, 56, 192, 150);
  ellipse(250, 400, 100, 100);
  ellipse(540, 470, 100, 100);
  
  //lefteye
  fill(0);
  ellipse(290, 280, 50, 50);
  
  //righteye
  fill (0);
  ellipse(550, 370, 50, 50);

  
   // Mouth
 frameRate(10)
  fill(255, 0, 0);
 

  arc(width/2, 500, 150, random(180), 0, PI + QUARTER_PI, CHORD);

  //sunlight
  stroke(random(255), random(255), random(255));
  strokeWeight(15)
  line(120, 110, 195, 185);
  line(400, 30, 400, 120);
  line(660, 90, 600, 190);
  line(690, 400, 790, 400);
  line(650, 580, 725, 650);
  line(400, 695, 400, 785);
  line(60, 680, 160, 600);
  line(10, 400, 110, 400);
  
  //clouds
  
  
  
  if (mouseIsPressed) {
  fill(random(107, 250, 255), random(112, 255, 245), random(89, 230, 255));
  } else {
    fill(random(255));  
  // fill(random(255), random(255),random(255));  
  }
 
  noStroke(0);
  rect(mouseX, mouseY, 55, 55, 20);
 
  
  }
}
}
80