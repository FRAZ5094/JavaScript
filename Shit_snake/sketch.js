let grid;
let players=[];
let apple;
let n;
let numberofplayers=4;

function setup(){
    grid= new Grid(600,50);
    createCanvas(grid.w,grid.w);

    for (let i=0;i<numberofplayers;i++){
        players.push(new Player(random_grid(),grid));
    }
    apple= new Apple(random_grid(),grid);
    n=0;
}

function draw(){


    background(255);
    grid.show();
    if (players[n].moves_left<=0){
        n+=1
        apple.x=int(random(0,grid.n));
        apple.y=int(random(0,grid.n));
        if (n==players.length){
            nextGeneration();
        }
    }
    if (players[n].x==apple.x && players[n].y==apple.y){
        console.log("eaten apple");
        players[n].eat_apple(apple);
        n+=1
        if (n==players.length){
            nextGeneration();
        }

    }
    

    players[n].show();
    players[n].think(apple);
    apple.show();

    let d = int(dist(players[n].x, players[n].y, apple.x, apple.y));

    //console.log(players[n].moves_left);
}




function keyPressed() {
    if (key=="ArrowUp") {
      players[n].move_up();
    } else if (key=="ArrowDown") {
      players[n].move_down();
    } else if (key=="ArrowLeft"){
        players[n].move_left();
    } else if (key=="ArrowRight"){
        players[n].move_right();
    }
}

function random_grid(){
    return {x: int(random(0,grid.n)),y: int(random(0,grid.n))}
}

function nextGeneration(){
    console.log("generation");

    calculateFitness();
    let max_fitness=0;
    let best_brain=players[0].brain;
    for (let player of players){
        if (player.fitness>=max_fitness){
            best_brain=player.brain;
            max_fitness=player.fitness;
        }
    }
    n=0;
    
    for (let i=0;i<numberofplayers;i++){
        players[i]=new Player(random_grid(),grid);
        players[i].brain=best_brain;
        players[i].mutate();
    }
}

function pickOne(){
    let index=0;
    let r=random(1);

    while(r>0){
        r=r-prev_generation[index].fitness;
        index++;
    }
    index--;
    console.log(index)
    let picked_player=prev_generation[index];
    let child=new Player(random_grid(),grid);
    child.brain=picked_player.brain;
    child.mutate();
    return child;
}


function calculateFitness(){
    let sum=0;
    for (let player of players){
        sum+=(player.moves_left+1);
    }
    for (let player of players){
        player.fitness=(player.moves_left+1)/sum;
        //console.log(player.fitness);
    }
    
}