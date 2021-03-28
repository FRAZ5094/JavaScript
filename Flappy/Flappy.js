let bird;
let pillars=[];

function setup(){
    createCanvas(600,400);
    
    bird= new Bird(width/8,height/2,200);
    pillars.push(new Pillar());
}

function draw(){
    background(0);
    bird.show();
    bird.update();

    for (let pillar of pillars){
        pillar.move();
        pillar.show();
        bird.update(pillar);
    }

    if (frameCount%100==0){
        pillars.push(new Pillar);
    }
}


function keyPressed() {
    if (keyCode === 32) {
        bird.jump();
    }
}