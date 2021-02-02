
function preload() {
    var cat,catImage;
    var garden;
    var mouse,mouseImage;

}

function preload(){
    C1 = loadImage("cat1.png");
    C2 = loadImage("cat2.png");
    C3 = loadImage("cat3.png");
    C4 = loadImage("cat4.png");

    garden = loadImage("garden.png");
    
    
    )
}

function setup(){
    createCanvas(1000,800);

    // creating the tom
    cat = creatsprite(mouseX + ','+ mouseY, 10,45);
    mouse = creatsprite(mouseX + ','+ mouseY, 10,45);
}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.addAnimation("catLastImage",C3);
        cat.changeAnimation("catLastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode=== LEFT_ARROW){
      cat.velocityX = -5;
      cat.addanimation("catRunning",C2);
      cat.changeAnimation("catRunning");
  }

}
