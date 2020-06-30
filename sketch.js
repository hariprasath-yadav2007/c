var database;
var gameState=0;
var form,player,game;




function setup(){
    createCanvas(400,400);
    database = firebase.database();
    form = new Form();
}


function draw(){
    form.display();
}