function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(400, 400, 50, 10)
}

function draw() {
  background("lightblue"); 
  
  if(abs(fixed.x - moving.x) <= fixed.width/2 + moving.width/2 && abs(fixed.y - moving.y) <= fixed.height/2 + moving.height/2  ){

    fixed.shapeColor = "pink"
    moving.shapeColor = "pink"
  }

  else {
    fixed.shapeColor = "grey"
    moving.shapeColor = "grey"
  }

  moving.x = mouseX
  moving.y = mouseY

  drawSprites();
}