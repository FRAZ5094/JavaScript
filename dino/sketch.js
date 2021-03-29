const TOTAL=1000;
let players=[];
let savedPlayers=[];
let floor;
let enemies=[];
let nextSpawn=100;
let counter=0;
let slider;
function setup(){
    createCanvas(600,400);
    for (let i=0;i<TOTAL;i++){
        players.push( new Player());
    }
    slider=createSlider(1,100,1);
    floor=height-20;
    enemies.push(new Enemy());
}

function draw(){
    for (let n=0;n<slider.value();n++){
        for (let i=0;i<players.length;i++){
            players[i].think(enemies);
            players[i].update();

            if (players[i].collision(enemies)){
                savedPlayers.push(players[i]);
                players.splice(i,1)
            }
        }
        

        for (let enemy of enemies){
            enemy.move();
            if (enemy.x<-enemy.w && enemies.length>1){
                enemies.shift();
            }
        }

        if (counter==nextSpawn){
            enemies.push(new Enemy());
            nextSpawn=counter+int(random(30,80));
        }

        if (players.length==0){
            nextGeneration();
        }
        counter++;
    }
    background("lightblue");

    draw_floor();

    for (let player of players){
        player.show();
    }

    for (let enemy of enemies){
        enemy.show();
    }
    textSize(32);
    text(players.length, 10, 30);
}

function keyPressed() {
    if (key==" "){
        players[0].jump();
    }
}




function draw_floor(){
    fill("green");
    rect(0,floor,width);
}




