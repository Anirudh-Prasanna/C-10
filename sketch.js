
var trex ,trex_running;
var ground,groundImage

function preload(){
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,400);
  
  //create a trex sprite
 trex = createSprite(50,340,20,50);
 trex.addAnimation("running", trex_running);
 trex.scale = 0.5;
 ground = createSprite(200,380,400,20);
 ground.velocityX = -3
 ground.addImage("ground23", groundImage);
}

function draw(){
  background("turquoise")
  console.log(ground.x)
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  //add gravity
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground);
if(ground.x<0){
ground.x = ground.width/2
}

drawSprites()
}
