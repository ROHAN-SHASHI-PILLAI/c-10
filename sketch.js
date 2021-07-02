var sea, ground,seaImage,shipImage
function preload(){
seaImage=loadImage(sea.png);
shipImage1=loadAnimation(ship-1.png,ship-2.png,ship-3.png,ship-4.png);
}

function setup(){
  createCanvas(400,400);
 sea.addImage("sea",seaImage);
 sea.velocityX=-2
 ship.addAnimation(shipImage1) ;

}

function draw() {
  background("blue");
 if (sea.x<0)
sea.x=sea.width/2;
drawSprites();
}