let particles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(90, 200, 190, 4);

  for (var i = 0; i < 10; i++) {
    particles[i] = new Particle();
  }

}

function draw() {
  background(0); //stroke(random(255),random(255),random(255),random(1,4));

  connect();


  for (var i = 0; i < particles.length; i++) {
    if (particles.length > 15) {

      particles[i].randomMove();
      particles[i].update();
      particles[i].edge2();
      //particles[i].show();
      connect();
    } else if (particles.length < 20) {
      particles[i].randomMove();
      particles[i].update();
      particles[i].edge();
      connect();
    } else if (particles.length > 20) {
      particles[i].randomMove();
      particles[i].update();
      particles[i].edge2();
      connect();
    } else if (particles.length <= 15) {
      particles[i].randomMove();
      particles[i].update();
      particles[i].edge();
      connect();
    }


  }

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

    //stroke(random(255), 255, 255, 10);
  }

  this.randomMove = function() {
    this.acc.add(createVector(random(-0.0001, 0.0001), random(-0.0001, 0.0001)));
    this.vel.add(this.acc);
  }

  this.addNew = function() {
    if (particles.length < 20) {
      var added = new Particle();
      particles.push(added);
      stroke(random(255), random(255), random(255), random(1, 4));
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

  this.killOld = function() {
    if (particles.length > 15) {
      particles.shift();
    }
  }

  this.edge2 = function() {
    if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.mult(-1);
      this.acc.mult(-1);
      this.killOld();

    }
    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.mult(-1);
      this.acc.mult(-1);

      this.killOld();
    }
    if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.mult(-1);
      this.acc.mult(-1);


      this.killOld();
    }
    if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.mult(-1);
      this.acc.mult(-1);

      this.killOld();
    }

  }

}

function connect() {
  for (var i = 0; i < particles.length; i++) {
    for (var j = 0; j < particles.length; j++) {
      //stroke(random(255), 255, 255, 10);
      //stroke(random(255),random(255),random(255),random(1,20));

      line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);


    }
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}