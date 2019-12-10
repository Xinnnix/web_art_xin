//TODO: change the mouseX from the second drawing. Add leftWristX or rightWristX
//to it and map it to the orginal mouseX to change the zoff of the secondDrawing

//TODO: fix the adding and deleting conditions. Might change to a fixed number
//to avoid the random change.

let video;
let poseNet;
let poses = [];
let source;
var scl = 20;
var cols, rows;
let tempPosX, tempPosY;
let particles3 = [];
var inc2 = 0.005;
var scl2 = 20;
var cols2, rows2;
//var zoff = mouseX;
var startTime = 0;
var backgroundCounter = 0;


var particles2 = [];

var flowfield;



function setup() {
  createCanvas(windowWidth, windowHeight);

  //particles for thirdDrawing;
  stroke(90, 200, 190, 4);
  for (var i = 0; i < 10; i++) {
    particles3[i] = new Particle3();
  }

  //grid for heart;
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  tempPosX = cols / 2 - 10;
  tempPosY = rows / 2 - 10;

  //start poseNet;
  video = createCapture(VIDEO);
  video.size(width, height);

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function(results) {
    poses = results;
    //console.log(results);
  });
  video.hide();

  //secondDrawing
  cols2 = floor(width / scl2);
  rows2 = floor(height / scl2);

  for (var i = 0; i < 5000; i++) {
    particles2[i] = new Particle2();
  }
  flowfield = new Array(cols2 * rows2);


}

function draw() {
  if (poses.length > 0) {

    for (let i = 0; i < poses.length; i++) {
      let pose = poses[i].pose;

      let nose = pose.keypoints[0];
      let noseX = nose.position.x;
      let noseY = nose.position.y;
      let leftWrist = pose.keypoints[9];
      let leftWristX = leftWrist.position.x;
      let leftWristY = leftWrist.position.y;

      // when wrist is below nose...
      if (leftWristY > noseY) {
        background(random(255));
        drawHeart(tempPosX, tempPosY);
        backgroundCounter = 0;
        // when wrist is above nose...
      } else {
        if (backgroundCounter < 1) {
          background(255);
        }
        backgroundCounter++;
        drawSecondDrawing(leftWristX);

      }
    }
  } else {
    drawThirdDrawing();

  }
}




//background(random(255));

//draw background grid;
// for (var y = 0; y < rows; y++) {
//   var xoff = 0;
//   for (var x = 0; x < cols; x++) {
//     noFill();
//     noStroke();
//     rect(x * scl, y * scl, scl, scl);
//   }
// }
// //drawHeart(tempPosX, tempPosY);




function modelReady() {
  console.log('Model is ready');
}

function drawHeart(x, y) {
  //draw heart;
  fillLine(x + 6, y + 6, x + 8, y + 6);
  fillLine(x + 6, y + 6, x + 3, y + 9);
  fillLine(x + 8, y + 6, x + 10, y + 8);
  fillLine(x + 10, y + 8, x + 11, y + 8);
  fillLine(x + 11, y + 8, x + 13, y + 6);
  fillLine(x + 13, y + 6, x + 15, y + 6);
  fillLine(x + 15, y + 6, x + 18, y + 9);
  fillLine(x + 3, y + 9, x + 3, y + 10);
  fillLine(x + 3, y + 10, x + 10, y + 17);
  fillLine(x + 10, y + 17, x + 11, y + 17);
  fillLine(x + 11, y + 17, x + 18, y + 10);

  //fill heart;
  fillLine(x + 5, y + 7, x + 9, y + 7);
  fillLine(x + 4, y + 8, x + 10, y + 8);
  fillLine(x + 3, y + 9, x + 17, y + 9);
  fillLine(x + 3, y + 10, x + 17, y + 10);
  fillLine(x + 4, y + 11, x + 16, y + 11);
  fillLine(x + 5, y + 12, x + 15, y + 12);
  fillLine(x + 6, y + 13, x + 14, y + 13);
  fillLine(x + 7, y + 14, x + 13, y + 14);
  fillLine(x + 8, y + 15, x + 12, y + 15);
  fillLine(x + 9, y + 16, x + 11, y + 16);
  fillLine(x + 13, y + 7, x + 15, y + 7);
  fillLine(x + 12, y + 8, x + 16, y + 8);

}

function fillLine(x, y, a, b) {
  let num;
  dx = a - x;
  dy = b - y;
  if (dx > dy) {
    num = dx;
  } else {
    num = dy
  };
  let tempX = x;
  let tempY = y;


  for (let i = 0; i < num + 1; i++) {
    fillSquare(tempX, tempY);
    tempX = tempX + dx / num;
    tempY = tempY + dy / num;

  }
}


function fillSquare(x, y) {
  fill(random(255));
  stroke(1);
  rect((x - 1) * scl, (y - 1) * scl, scl, scl);
}



function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  tempPosX = cols / 2 - 10;
  tempPosY = rows / 2 - 10;
}

function drawThirdDrawing() {

  background(0); //stroke(random(255),random(255),random(255),random(1,4));

  connect();


  for (var i = 0; i < particles3.length; i++) {
    if (particles3.length > 15) {

      particles3[i].randomMove();
      particles3[i].update();
      particles3[i].edge2();
      //particles3[i].show();
      connect();
    } else if (particles3.length < 20) {
      particles3[i].randomMove();
      particles3[i].update();
      particles3[i].edge();
      connect();
    } else if (particles3.length > 20) {
      particles3[i].randomMove();
      particles3[i].update();
      particles3[i].edge2();
      connect();
    } else if (particles3.length <= 15) {
      particles3[i].randomMove();
      particles3[i].update();
      particles3[i].edge();
      connect();
    }


  }

}

function Particle3() {
  this.pos = createVector(random(width), 0);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxSpeed = 10;

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
    if (particles3.length < 20) {
      var added = new Particle3();
      particles3.push(added);
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
    if (particles3.length > 15) {
      particles3.shift();
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
  for (var i = 0; i < particles3.length; i++) {
    for (var j = 0; j < particles3.length; j++) {
      //stroke(random(255), 255, 255, 10);
      //stroke(random(255),random(255),random(255),random(1,20));

      line(particles3[i].pos.x, particles3[i].pos.y, particles3[j].pos.x, particles3[j].pos.y);


    }
  }
}

function drawSecondDrawing(_leftWristX) {

  let zoff2 = map(_leftWristX, 0, width, 0, 1);
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