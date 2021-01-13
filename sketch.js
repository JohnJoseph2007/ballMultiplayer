var ball;
var db;
var abc;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    db = firebase.database();
    var loc = db.ref("ball/position");
    loc.on("value", readop);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    var loc1 = db.ref("ball/position");
    loc1.update({
        x:ball.x+x, 
        y:ball.y+y
    })
}

function readop(data) {
    abc = data.val();
    ball.x = abc.x;
    ball.y = abc.y;
}