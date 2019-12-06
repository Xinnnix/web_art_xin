let particles = [];



function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 10; i++) {
    particles[i] = new Particle();
  }

}

function draw() {
  background(0);

  for (var i = 0; i < particles.length; i++) {

    particles[i].randomMove();
    particles[i].update();
    particles[i].edge();
    //particles[i].show();


  }
  connect();

}

function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxSpeed = 1;

  this.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
  }

  this.show = function() {
    stroke(random(255), 255, 255, 10);
  }

  this.randomMove = function() {
    this.acc.add(createVector(random(-0.0001, 0.0001), random(-0.0001, 0.0001)));
    this.vel.add(this.acc);
  }

  this.addNew = function() {
    if (particles.length < 50) {
      var added = new Particle();
      particles.push(added);
    }
  }

  this.edge = function() {
    if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.mult(-1);
      this.acc.mult(-1);
      this.addNew();

    }
    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.mult(-1);
      this.acc.mult(-1);

      this.addNew();
    }
    if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.mult(-1);
      this.acc.mult(-1);


      this.addNew();
    }
    if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.mult(-1);
      this.acc.mult(-1);

      this.addNew();
    }

  }

}

function connect() {
  for (var i = 0; i < particles.length; i++) {
    for (var j = 0; j < particles.length; j++) {
      stroke(random(255), 255, 255, 10);
      line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
    }
  }
}