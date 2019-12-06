let video;
let poseNet;
let poses = [];
let source;
var scl = 20;
var cols, rows;
let tempPosX, tempPosY;




function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  tempPosX = cols / 2 - 10;
  tempPosY = rows / 2 - 10;

  video = createCapture(VIDEO);
  video.size(width, height);

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function(results) {
    poses = results;
    //console.log(results);
  });
  video.hide();


}

function draw() {

  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;

    let nose = pose.keypoints[0];
    let noseX = nose.position.x;
    let noseY = nose.position.y;
    let leftWrist = pose.keypoints[9];
    let leftWristX = leftWrist.position.x;
    let leftWristY = leftWrist.position.y;
    if (leftWristY < noseY) {
      background(random(255));
      drawHeart(tempPosX, tempPosY);
    } else {
      background(0);
    }

  }



  //background(random(255));

  //draw background grid;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      noFill();
      noStroke();
      rect(x * scl, y * scl, scl, scl);
    }
  }
  //drawHeart(tempPosX, tempPosY);


}

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