// Player info
let playerSpeed = 5;
let xPlayer = 730;
let yPlayer = 650;
let wPlayer = 80;
let hPlayer = 41;
let collided = false;
let playerScore = 0;
let xThm = 0;
let yThm = 325;
let thmSpeed = 10;
let dThm = 50;
//Player functions
function playerStart(){
  image(player,xPlayer,yPlayer);
}
function playerMoviment(){
  if (keyIsDown(UP_ARROW)) {
    yPlayer -= playerSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (checkScreenLimit()){
      yPlayer += playerSpeed;
    }
  }
}
function collidePlayer (){
  for (let i = 0; i < xCarsUp.length; i++){
    collided = collideRectRect(xCarsUp[i], roadsUp[i], wCars, hCars, xPlayer, yPlayer, wPlayer, hPlayer)
     if (collided){
       zeroScoreCheck()
       collideSound.play();
       restartPlayer();
     }
   }
    for (let i = 0; i < carsRoadDown.length; i++){
      collided = collideRectRect(xCarsDown[i], roadsDown[i], wCars, hCars, xPlayer, yPlayer, wPlayer, hPlayer)
        if (collided){ 
          zeroScoreCheck();
          collideSound.play();
          restartPlayer();
        }
      }
}
function restartPlayer(){
  yPlayer = 655    
  }
function playerGoal(){
  if (yPlayer+hPlayer < 35 ){
    playerScore += 1;
    goalSound.play();
    restartPlayer();
  }
}
function zeroScoreCheck(){
  if ( playerScore > 0){
    playerScore -= 1
  }
}
function gameScore(){
  textSize(25);
  textAlign(CENTER);
  fill(255, 236, 92)
  text(playerScore, width/3, 35);
}
function checkScreenLimit(){
  return yPlayer < 650;
}
//Thm bonus
function thmBonus(){
  image(thmLife,xThm,yThm);
    collided = collideRectCircle(xPlayer, yPlayer, wPlayer, hPlayer, xThm, yThm, dThm)
      if(collided){
        playerScore += 1;
        goalSound.play();
        xThm = 0;
      }
}
function thmMoviment (){
  xThm += thmSpeed;
  thmRestart();
}
function thmRestart(){
  if (xThm > 1500){
    xThm = -60
  }
}