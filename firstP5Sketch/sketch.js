function setup() {
  let cnv = createCanvas(600, 480);
  cnv.position(100,100);
  background(255,10,80);
}

function draw() {
  stroke(200,10,100);
  fill(150,200,42);
  circle(100,50,100);
  noFill();
  fill(10,150,10);
  circle(200,50,100);
  noFill();
  circle(150,100,100);
  circle(100,150,100);
  circle(200,150,100);
  square(50,50,100);
  rect(150,150,100,200);
  rect(250,350,300,100);
  rect(150,350,100,100);
  circle(400,175,300);
  square(350,125,100);
  rect(75,250,50,200);
}
