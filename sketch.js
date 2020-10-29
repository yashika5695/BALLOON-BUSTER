

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0
var arrowGroup , pinkGroup,blueGroup,greenGroup,redGroup


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
arrowGroup=new Group()
  pinkGroup=new Group()
  redGroup=new Group()
  blueGroup=new Group()
  greenGroup=new Group()
  
//  red_balloon = createSprite(50, 180, 1, 1);
// red_balloon.addImage(red_balloonImage)
//   red_balloon.scale = 0.1
  
  //create line of red balloons using for loop

 
}

function draw() {
  // moving ground
    background.velocityX = -3 
   background.scale=3
    if (background.x < 0){
      background.x = background.width/2;
    }
  
 
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
     createArrow();
   // temp_arrow.addImage(arrowImage);
    // temp_arrow.y = bow.y;
  }
   
  var selectBalloon = Math.round(random(1 , 4))
  if(frameCount%80===0){
    if(selectBalloon===1){
      redB();
    }
    else if(selectBalloon===2){
      greenB();
    }
    else if(selectBalloon===3){
      blueB();
    }
    else {
      pinkB();
    }
  }
  
   
  
  
  if(arrowGroup.isTouching(redGroup)){
     score=score+2
    arrowGroup.destroyEach()
    redGroup.destroyEach()
     }
  
  if(arrowGroup.isTouching(greenGroup)){
     score=score+1
    arrowGroup.destroyEach()
    greenGroup.destroyEach()
     }
  
  if(arrowGroup.isTouching(blueGroup)){
     score=score+3
    arrowGroup.destroyEach()
    blueGroup.destroyEach()
     }
  
  if(arrowGroup.isTouching(pinkGroup)){
     score=score+5
    arrowGroup.destroyEach()
    pinkGroup.destroyEach()
     }
  
  drawSprites();
  text("score"+score,270,30)
}
 

   
   
// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.addImage(arrowImage)
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.y=bow.y
  arrowGroup.add(arrow)
  
}
function redB(){
  red_balloon = createSprite(0, Math.round(random(20,370)), 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1
  red_balloon.lifetime=150
  red_balloon.velocityX=3
  redGroup.add(red_balloon)
}

function greenB(){
  green_balloon = createSprite(0, Math.round(random(20,370)), 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
  green_balloon.lifetime=150
  green_balloon.velocityX=3
  greenGroup.add(green_balloon)
}

function blueB(){
  blue_balloon = createSprite(0, Math.round(random(20,370)), 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
  blue_balloon.lifetime=150;
  blue_balloon.velocityX=3
  blueGroup.add(blue_balloon)
}
  
  function pinkB(){
  pink_balloon = createSprite(0, Math.round(random(20,370)), 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.2;
  pink_balloon.lifetime=150;
  pink_balloon.velocityX=3
 pinkGroup.add(pink_balloon)
  }
  
  