let grid;
let players=[];
let apple;

function setup(){
    grid= new Grid(600,80);
    createCanvas(grid.w,grid.w);

    for (let i=0;i<200;i++){
        players.push(new Player(random_grid(),grid));
    }
    
    apple= new Apple(random_grid(),grid);
}

function draw(){
    background(255);
    grid.show();
    for (let player of players){
        if (player.x==apple.x && player.y==apple.y){
            console.log("eaten apple");
            player.eat_apple(apple);
        }
        if (frameCount%2==0){
            let n=int(random(0,4));
            let j=int(random(1,5));
            if (n==0){
                for (let i=0;i<j;i++){
                    player.move_up()
                    player.show();
                }
            } else if (n==1){
                for (let i=0;i<j;i++){
                    player.move_down();
                    player.show();
                }
            } else if (n==2){
                for (let i=0;i<j;i++){
                    player.move_left();
                    player.show();
                }
            } else if (n==3){
                for (let i=0;i<j;i++){
                    player.move_right();
                    player.show();
                }
            }
        }

        player.show();
    }
    apple.show();


}




function keyPressed() {
    return
    if (key=="ArrowUp") {
      players[0].move_up();
    } else if (key=="ArrowDown") {
      players[0].move_down();
    } else if (key=="ArrowLeft"){
        players[0].move_left();
    } else if (key=="ArrowRight"){
        players[0].move_right();
    }
}

function random_grid(){
    return {x: int(random(0,grid.n)),y: int(random(0,grid.n))}
}