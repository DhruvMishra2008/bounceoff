var fixedRectangle,movingRectangle;


function setup() {
  createCanvas(800,800);
 fixedRectangle =  createSprite(400, 200, 50, 50);
 movingRectangle = createSprite(400,400,80,80);

 movingRectangle.shapeColor = "blue";
 fixedRectangle.shapeColor = "blue";
 movingRectangle.velocityY = -4;
 fixedRectangle.velocityY = 4;

}

function draw() {
  background(255,255,255);  

//movingRectangle.x = mouseX;
//SmovingRectangle.y = mouseY;

if(movingRectangle.x-fixedRectangle.x<movingRectangle.width/2+fixedRectangle.width/2
  &&fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
  &&movingRectangle.y-fixedRectangle.y<movingRectangle.height/2+fixedRectangle.height/2
  &&fixedRectangle.y-movingRectangle.y<fixedRectangle.height/2+movingRectangle.height/2){
  //  movingRectangle.shapeColor = "orange";
 //fixedRectangle.shapeColor = "orange";
 movingRectangle.velocityY = -1*movingRectangle.velocityY;
 fixedRectangle.velocityY = -1*fixedRectangle.velocityY;

  }
  else{
    movingRectangle.shapeColor = "blue";
 fixedRectangle.shapeColor = "blue";

  }



  drawSprites();
}