var bow, bowImage;
var background,backgroundImage;
var arrow, arrowImage, arrowGroup;
var green_balloon,  greenImage;
var red_balloon,redImage;
var pink_balloon,pinkImage;
var blue_balloon, blueImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
 
  redImage = loadImage("red_balloon0.png");
  greenImage = loadImage("green_balloon0.png");
  pinkImage = loadImage("pink_balloon0.png");
  blueImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(displayWidth, 600);
  
  //creating background
    // background = createSprite(0,0,600,600);
    // background.addImage(backgroundImage);
    // background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0 
  
  red_balloon=new Group();
  pink_balloon=new Group();
  green_balloon=new Group();
  blue_balloon=new Group();
  arrowGroup=new Group()
 
  
}

function draw() {
  background("blue")

  // moving ground
   // background.velocityX = -3 

    // if (background.x < 0){
   //   background.x = background.width/2;
  // }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
 
  redBalloon.x = camera.position.x + 50
  greenBalloon.x = camera.position.x + 50
  blueBalloon.x = camera.position.x + 50
  pinkBalloon.x = camera.position.x + 50
  
  drawSprites();
    text("Score: "+ score, 500,50);
  
   if (arrowGroup.isTouching(pink_balloon)){
    pink_balloon.destroyEach();
    arrowGroup.destroyEach();
    score=score+5
   }
     
     
   if (arrowGroup.isTouching(red_balloon)){
    red_balloon.destroyEach();
    arrowGroup.destroyEach();
    score=score+4
   }
     
     
   if (arrowGroup.isTouching(green_balloon)){
    green_balloon.destroyEach();
    arrowGroup.destroyEach();
    score=score+2
   }
     
     
   if (arrowGroup.isTouching(blue_balloon)){
    blue_balloon.destroyEach();
    arrowGroup.destroyEach();
    score=score+1 
  }



function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.09;
  red_balloon.add(red)
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1  ;
  blue_balloon.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  green_balloon.add(green);   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.9;
  pink_balloon.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow); 
}


}
