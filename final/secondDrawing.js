var inc = 0.05;
var scl = 5;
var cols, rows;
//var zoff = mouseX;
var startTime = 0;


var particles = [];

var flowfield;


//noprotect


function setup() {
  createCanvas(600, 400);
  background(255);
  cols = floor(width / scl);
  rows = floor(height / scl);

  for (var i = 0; i < 5000; i++) {
    particles[i] = new Particle();
  }
  flowfield = new Array(cols * rows);


}

function draw() {

  let zoff = map(mouseX, 0, 600, 0, 1);
  //mouseX triggers spreading;
  //background(255);


  //noStroke();

  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 5;
      var index = x + y * cols;

      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;

      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
      //fill(random(255));
      //fill(r);
      //rect(x * scl, y * scl, scl, scl);
    }
    yoff += inc;
    //zoff += 0.00001;

  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edge();
    particles[i].show();
  }
  var endTime = millis();
  var lifeSpan = endTime - startTime;
  if (lifeSpan > 1000 * 15) {
    // clear screen every 15 seconds;
    clear();
    startTime = endTime;
  }


}


function Particle() {
  this.pos = createVector(random(width), 0);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxSpeed = 3;
  this.previousPos = this.pos.copy();

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.limit(this.maxSpeed);
  }
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.show = function() {
    stroke(0, 5);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.previousPos.x, this.previousPos.y);
    this.updatePrev();
  }
  this.edge = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }
  this.follow = function(dir) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = flowfield[index];
    this.applyForce(force);
  }
  this.updatePrev = function() {
    this.previousPos.x = this.pos.x;
    this.previousPos.y = this.pos.y;
  }
}