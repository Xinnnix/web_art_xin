let video;
let poseNet;
let poses = [];
let source;





function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function(results) {
    poses = results;
    //console.log(results);
  });
  video.hide();





}

function modelReady() {
  console.log('Model is ready');
}

function draw() {
  background(0);
  //image(video, 0, 0, width, height);
  drawKeypoints();
  // drawSkeleton();
}

function drawKeypoints()  {
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
      let keypoint0 = pose.keypoints[0];
      if (keypoint0.score > 0.2){
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint0.position.x, keypoint0.position.y, 1, 1);
      }
      let keypoint1 = pose.keypoints[1];
      if (keypoint1.score > 0.2){
        fill(255);
        noStroke();
        rect(keypoint1.position.x, keypoint1.position.y, 10, 10);
      }
      let keypoint2 = pose.keypoints[2];
      if (keypoint2.score > 0.2){
        fill(255);
        noStroke();
        rect(keypoint2.position.x, keypoint2.position.y, 10, 10);
      }
      let leftWrist = pose.keypoints[9];
      if (leftWrist.score > 0.2){
        fill(255, 0, 0);
        noStroke();
        ellipse(leftWrist.position.x, leftWrist.position.y, 1, 1);
      }
      let rightWrist = pose.keypoints[10];
      if (rightWrist.score > 0.2){
        fill(255, 0, 0);
        noStroke();
        ellipse(rightWrist.position.x, rightWrist.position.y, 1, 1);
      }

      stroke(random(255),random(255),random(255));
      line(keypoint0.position.x,keypoint0.position.y,keypoint1.position.x+width/20,keypoint1.position.y);
      line(keypoint0.position.x,keypoint0.position.y,keypoint2.position.x-width/20,keypoint2.position.y);
      line(keypoint1.position.x+width/20,keypoint1.position.y,keypoint2.position.x-width/20,keypoint2.position.y);
      line(keypoint0.position.x,keypoint0.position.y,leftWrist.position.x,leftWrist.position.y);
      line(keypoint0.position.x,keypoint0.position.y,rightWrist.position.x,rightWrist.position.y);
      // addToSource(leftWrist);
      // addToSource(rightWrist);


  }
}



// function addToSource(data){
//   source.push(data);
//
// }

//function











// A function to draw ellipses over the detected keypoints
// function drawKeypoints()  {
//   // Loop through all the poses detected
//   for (let i = 0; i < poses.length; i++) {
//     // For each pose detected, loop through all the keypoints
//     let pose = poses[i].pose;
//     for (let j = 0; j < pose.keypoints.length; j++) {
//       // A keypoint is an object describing a body part (like rightArm or leftShoulder)
//       let keypoint = pose.keypoints[j];
//       // Only draw an ellipse is the pose probability is bigger than 0.2
//       if (keypoint.score > 0.2) {
//         fill(255, 0, 0);
//         noStroke();
//         ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
//       }
//     }
//   }
// }

// A function to draw the skeletons
// function drawSkeleton() {
//   // Loop through all the skeletons detected
//   for (let i = 0; i < poses.length; i++) {
//     let skeleton = poses[i].skeleton;
//     // For every skeleton, loop through all body connections
//     for (let j = 0; j < skeleton.length; j++) {
//       let partA = skeleton[j][0];
//       let partB = skeleton[j][1];
//       stroke(255, 0, 0);
//       line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
//     }
//   }
// }
