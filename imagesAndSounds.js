let road;
let carA;
let carB;
let carC;
let carD;
let carE;
let carF;
let thmLife;
let player;
let gameMusic;
let goalSound;
let collideSound;

function preload(){
  road = loadImage("images/road.png");
  carA = loadImage("images/carro-1.png");
  carB = loadImage("images/carro-2.png");
  carC = loadImage("images/carro-3.png");
  carD = loadImage("images/carro-1-r.png");
  carE = loadImage("images/carro-2-r.png");
  carF = loadImage("images/carro-3-r.png");
  carsRoadUp = [carA,carB,carC];
  carsRoadDown = [carD,carE,carF];
  gameMusic = loadSound("sounds/trilha.mp3");
  goalSound = loadSound("sounds/pontos.wav");
  collideSound = loadSound("sounds/colidiu.mp3")
  thmLife = loadImage("images/thmLife.png");
  player = loadImage("images/player.png");
}