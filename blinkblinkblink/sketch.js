function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220,180,190);
    angleMode(DEGREES);
    
  }
  
  function draw() {
    
    push();
    noStroke();
    fill(random(255),random(255),random(255));
    triangle(mouseX*random(0,1),mouseY*random(0,1),mouseX*random(0,1),mouseY*(0,1),mouseY*random(-1,1),mouseX*random(-1,1)*random(0,1));
    pop();
    
    push();
    noStroke();
    fill(random(255),random(255),random(255));
    circle(width/2,height/2,random(0,200));
    pop();
    
    push();
    noStroke();
    fill(random(255),random(255),random(255));
    circle(width-40,40,random(0,300));
    pop();
    push();
    noStroke();
    fill(random(255),random(255),random(255));
    circle(40,height-40,random(0,300));
    pop();
    push();
    noStroke();
    fill(random(255),random(255),random(255));
    circle(width-40,height-40,random(0,300));
    pop();

    push();
    noStroke();
    fill(random(255),random(255),random(255));
    circle(40,40,random(0,300));
    pop();

    push();
    noStroke();
    fill(random(255));
    rect(0,0,20,height);
    rect(width-20,0,20,height);
    rect(0,0,width,20);
    rect(0,height-20,width,20);
    pop();
    
    push();
    noStroke();
    fill(random(255),random(255),random(255));
    rect(20,20,width-40,20);
    rect(20,height-40,width-40,20);
    rect(20,20,20,height-40);
    rect(width-40,20,20,height-40);
    pop();

    

    
    
  
  
  
  
  }