
var bullet
var wall;
var thickness;
var speed
var weight;
var PLAY=1;
var END=0;
var gamestate=PLAY;



function setup() {

  createCanvas(1600,400);
  bullet=createSprite(40,200,80,15);
  bullet.shapeColor="white";
  thickness=random(30,80);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  bullet.velocityX=speed/5;

}

function draw() {
background(0);  
if(gamestate===PLAY){


if(hasCollided(bullet,wall)===true){
 bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage>5){
  wall.shapeColor=color(255,0,0);
  gamestate=END;
}
if(damage<5){
  wall.shapeColor=color(0,255,0)
  gamestate=END
}
else if (gamestate===END){

}


}





}






  
  

  drawSprites()

}





function isTouching(object1,object2){

  if(object1.x-object2.x<object2.width/2+object1.width/2 
  && object1.y-object2.y<object2.height/2+object1.height/2
  && object2.x-object1.x<object2.width/2+object1.width/2
  && object2.y-object1.y<object2.height/2+object1.height/2 )
  {
 return true;
  }
  else 
  {
 return false;
  }


}

function hasCollided(object1,object2)
{
    rightedge=object1.x+object1.width;
    leftedge=object2.x;
    if(rightedge>=leftedge)
    {
        return true;
    }else
     { return false;
    }

}