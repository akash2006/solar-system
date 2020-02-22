var sun;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var sunImage,mercuryImage,venusImage,earthImage;
function preload(){
  sunImage = loadImage("sun.png");
  mercuryImage = loadImage("mercury.png");
  venusImage = loadImage("venus.png");
  earthImage = loadImage("earth.png");
}
function setup() {
  createCanvas(1200,1200);
  sun = createSprite(600,100,100,100);
  sun.addImage(sunImage);
  
  mercury = createSprite(600,300,50,50);
  mercury.addImage(mercuryImage);
  venus = createSprite(600,500,40,40);
  venus.addImage(venusImage);
  earth = createSprite(600,700,70,70);
  earth.addImage(earthImage);
  
}

function draw() {
  
  background(0,0,0); 

  if(frameCount%1 === 0){
    sunImage.width++;
    sunImage.height++;
  }
  if(sun.isTouching(mercury)){
    mercury.destroy();
  }
  if(sun.isTouching(venus)){
    venus.destroy();
  }
  if(sun.isTouching(earth)){
    earth.destroy();
  }
  drawSprites();
  
}