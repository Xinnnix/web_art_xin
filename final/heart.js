var inc = 0.05;
var scl = 20;
var cols, rows;



function setup() {
  createCanvas(400, 400);
  cols = floor(width / scl);
  rows = floor(height / scl);

}

function draw() {
  background(random(255));

  //draw background grid;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      noFill();
      noStroke();
      rect(x * scl, y * scl, scl, scl);
    }
  }

  //draw heart;
  fillLine(6, 6, 8, 6);
  fillLine(6, 6, 3, 9);
  fillLine(8, 6, 10, 8);
  fillLine(10, 8, 11, 8);
  fillLine(11, 8, 13, 6);
  fillLine(13, 6, 15, 6);
  fillLine(15, 6, 18, 9);
  fillLine(3, 9, 3, 10);
  fillLine(3, 10, 10, 17);
  fillLine(10, 17, 11, 17);
  fillLine(11, 17, 18, 10);

  //fill heart;
  fillLine(5, 7, 9, 7);
  fillLine(4, 8, 10, 8);
  fillLine(3, 9, 17, 9);
  fillLine(3, 10, 17, 10);
  fillLine(4, 11, 16, 11);
  fillLine(5, 12, 15, 12);
  fillLine(6, 13, 14, 13);
  fillLine(7, 14, 13, 14);
  fillLine(8, 15, 12, 15);
  fillLine(9, 16, 11, 16);
  fillLine(13, 7, 15, 7);
  fillLine(12, 8, 16, 8);
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
  rect((x - 1) * scl, (y - 1) * scl, scl, scl);
}
