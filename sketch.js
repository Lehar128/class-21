var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fr = createSprite(200, 100, 50, 80);
  fr.shapeColor = "green";
fr.debug = true;
   mr = createSprite(200, 800,80,30);
  mr.shapeColor = "green";
  mr.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  mr.velocityY = -5;
  fr.velocityY = +5;
}

function draw() {
  background(0,0,0);  
collision(fr,mr)
collision(fixedRect,movingRect)

  
  drawSprites();
}
