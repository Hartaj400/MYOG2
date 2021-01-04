var canvas;
var trophyImg,pointImg;
var bgImg;
var ball,trophy;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var spawn,spawn2,spawn3;
var barrier1,barrier2,barrier3;
var slime,slime2;
var enemy,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8;
var safe,safe2,safe3,safe4,safe5,safe6,safe7,safe8,safe9,safe10,safe11,safe12;
var poin,point2;
var gameState="serve";


function preload(){
    trophyImg = loadImage("trophy.png");
    pointImg = loadImage("point.png");
    bgImg = loadImage("bg.png");
    
}
function setup(){
    canvas= createCanvas(displayWidth,displayHeight);

    ball = createSprite(500,400,10,10);
 ball.shapeColor = "blue";
trophy = createSprite(28,110,30,30);
//trophy.addImage(trophyImg);
//trophy.scale = 0.02;



}

function draw() {


    drawSprites();
    
}

