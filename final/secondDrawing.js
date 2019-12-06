var inc2 = 0.05;
var scl2 = 5;
var cols2, rows2;
//var zoff = mouseX;
var startTime = 0;


var particles2 = [];

var flowfield;


//noprotect


function setup() {
  createCanvas(600, 400);
  background(255);
  cols2 = floor(width / scl2);
  rows2 = floor(height / scl2);

  for (var i = 0; i < 5000; i++) {
    particles2[i] = new Particle2();
  }
  flowfield = new Array(cols2 * rows2);


}

function draw() {

  let zoff2 = map(mouseX, 0, width, 0, 1);
  //mouseX triggers spreading;
  //background(255);


  //noStroke();

  var yoff2 = 0;
  for (var y = 0; y < rows2; y++) {
    var xoff2 = 0;
    for (var x = 0; x < cols2; x++) {
      var angle = noise(xoff2, yoff2, zoff2) * TWO_PI * 5;
      var index = x + y * cols2;

      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff2 += inc2;

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
    yoff2 += inc2;
    //zoff += 0.00001;

  }
  for (var i = 0; i < particles2.length; i++) {
    particles2[i].follow(flowfield);
    particles2[i].update();
    particles2[i].edge();
    particles2[i].show();
  }
  var endTime = millis();
  var lifeSpan = endTime - startTime;
  if (lifeSpan > 1000 * 15) {
    // clear screen every 15 seconds;
    clear();
    startTime = endTime;
  }


}


function Particle2() {
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
    var x = floor(this.pos.x / scl2);
    var y = floor(this.pos.y / scl2);
    var index = x + y * cols2;
    var force = flowfield[index];
    this.applyForce(force);
  }
  this.updatePrev = function() {
    this.previousPos.x = this.pos.x;
    this.previousPos.y = this.pos.y;
  }
}