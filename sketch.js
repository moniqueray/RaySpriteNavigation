/***********************************************************************************
  Sprite Navigation

  Simple use of the p5.play library
------------------------------------------------------------------------------------
	To use:
	Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/

// This is a 'sprite' which we can move
var ghost;
var speed = 10;

//additional sprite
var butterfly;
var speed = 10;
var bird;

// The is a static sprite
var star;
var starImg;
var heart;

// keycods for W-A-S-D
const W_KEY = 87;
const S_KEY = 83;
const D_KEY = 68;
const A_KEY = 65;

function preload() {
  starImg = loadImage('assets/fullStar.png');
}
// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  // create a sprite with dimensions
  ghost = createSprite(400, 150);
  butterfly = createSprite(400,150);
  bird = createSprite(500,150);


  // This is a *numbered* sequence of PNG files
  // We add animation to different sprites
  ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
  butterfly.addAnimation('floating','assets/butterfly-01.png','assets/butterfly-02.png');
  bird.addAnimation('floating','assets/blob01.png','assets/blob08.png');

  // create static sprites
  star = createSprite(width/2, height/2);
  star.addImage('star', starImg);
  heart =createSprite(200,200);
  heart.addAnimation('floating','assets/hearts-01.png','assets/hearts-04.png');

  frameRate(30);
 }

// Draw code goes here
function draw() {

  //disappearing sprites if they collide
  if (ghost.overlap(star)) {
    ghost.visible = false;
  } else {
    ghost.visible = true;
  }

  if(butterfly.overlap(heart)) {
    butterfly.visible = true;
  } else {
    butterfly.visible = false;
  }

  //drawing background
  background(255);

  // trap keyboard arrow keys
  checkMovement();

  // drawSprites is a function in p5.play, draws all the sprites
  drawSprites();

  // callback function
  //ghost.overlap(star, ghostCollision);
}

// This will reset position
function keyPressed() {
  if( key === ' ') {
    ghost.position.x = width/2;
    ghost.position.y = height/2;

    butterfly.position.x = (width/2) + 10;
    butterfly.position.y = height/2;
  }
}

function checkMovement() {
  // Check x movement
  if(keyIsDown(RIGHT_ARROW)) {
    ghost.velocity.x = speed;
  }
  else if(keyIsDown(LEFT_ARROW)) {
    ghost.velocity.x = -speed;
  }
  else {
    ghost.velocity.x = 0;
  }

  // Check y movement
  if(keyIsDown(DOWN_ARROW)) {
    ghost.velocity.y = speed;
  }
  else if(keyIsDown(UP_ARROW)) {
    ghost.velocity.y = -speed;
  }
  else {
    ghost.velocity.y = 0;
  }

  //butterfly movement
  //check x movement
  if (keyIsDown(D_KEY)) {
    butterfly.velocity.x = speed;
  }
  else if (keyIsDown(A_KEY)) {
    butterfly.velocity.x = -speed;
  }
  else {
    butterfly.velocity.x = 0;
  }

  //check y movement of butterfly
  if(keyIsDown(DOWN_ARROW)) {
    butterfly.velocity.y = speed;
  }
  else if(keyIsDown(UP_ARROW)) {
    butterfly.velocity.y = -speed;
  }
  else {
    butterfly.velocity.y = 0;
  }

  // use keyIsDown(W_KEY)  for your player sprite, moving up
  // use keyIsDown(A_KEY)  for your player sprite, moving left
  // ...etc
  

}

// SpriteA is the sprite in question, spriteA will be ghost in this case
// SpriteB is the one that it collided with
function ghostCollision(spriteA, spriteB) {
  ghost.position.x = 100;
  ghost.position.y = 100;

  //spriteB.remove();
}