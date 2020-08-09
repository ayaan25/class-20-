var moving,fixed,object1,objecr2;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "red"
  moving = createSprite(200,100,70,40);
  moving.shapeColor = "blue"
 object1 = createSprite(100,100,50,50);
 object1.shapeColor = "yellow";
 object1.velocityX = 4;
 object2 = createSprite(700,100,50,50);
  object2.shapeColor = "white"
  object2.velocityX = -4;
}

function draw() {
  background("black");
  moving.x = World.mouseX;
  moving.y = World.mouseY; 

if (fixed.x - moving.x < fixed.width/2 + moving.width/2 && 
  moving.x - fixed.x < moving.width/2 + fixed.width/2 && 
  fixed.y - moving.y < fixed.height/2 + moving.height/2 && 
    moving.y - fixed.y < moving.height/2 + fixed.height/2){
 moving.shapeColor = "green";
 fixed.shapeColor = "orange"
  }
  
  else {
 fixed.shapeColor = "red";
 moving.shapeColor = "blue";
  }
  if (object1.x - object2.x < object1.width/2 + object2.width/2 && 
    object2.x - object1.x < object2.width/2 + object1.width/2 ){
     object1.velocityX = object1.velocityX*(-1) ;
     object2.velocityX = object2.velocityX*(-1) ;
    }
      
  drawSprites();
}