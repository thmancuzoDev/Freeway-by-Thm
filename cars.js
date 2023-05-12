//Car info
let roadsUp = [65,170,260];
let roadsDown = [365,465,560];
let xCarsUp = [1500,1500,1500];
let xCarsDown = [-150,-150,-150];
let speedCarsUp = [6,8,15];
let speedCarsDown = [10,9,5];
let wCars = 132;
let hCars = 72;

// Cars functions
function showCar(){
  for (let i = 0; i < carsRoadUp.length; i++)
  image(carsRoadUp[i],xCarsUp[i],roadsUp[i])
  for (let i = 0; i < carsRoadDown.length; i++)
  image(carsRoadDown[i],xCarsDown[i],roadsDown[i])
}
function carMoviment(){
  for (let i = 0; i < carsRoadUp.length; i++)  
  xCarsUp[i] -= speedCarsUp[i]
  for (let i = 0; i < carsRoadDown.length; i++)
  xCarsDown[i] += speedCarsDown[i]
}
function carRestart(){
  for (let i = 0; i < carsRoadUp.length; i++)
  if (roadUpCompleted(xCarsUp[i])) { xCarsUp[i] = 1500}
  for (let i = 0; i < carsRoadDown.length; i = i + 1)
  if (roadDownCompleted (xCarsDown[i])) { xCarsDown[i] = -150}
}
function roadUpCompleted (xCarsUp){
  return xCarsUp < -150;
}
function roadDownCompleted (xCarsDown){
  return xCarsDown > 1500;
}