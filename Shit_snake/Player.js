class Player{

    constructor(s,grid){
        this.x=s.x;
        this.y=s.y;
        this.color=color(random(255),random(255),random(255));
        this.grid=grid;
        this.moves_left=200;
        this.fitness=0;
        this.brain= new NeuralNetwork(2,4,4);
    }
    show(){
        fill(this.color);
        rect(this.x*this.grid.spacing,this.y*this.grid.spacing,this.grid.spacing,this.grid.spacing);

    }
    move_down(){
        if (this.y<this.grid.n-1){
            this.y+=1
        } else {
            this.moves_left=0;
        }
        this.moves_left-=1
    }
    move_up(){
        if (this.y>=1){
            this.y-=1
        } else {
            this.moves_left=0;
        }
        this.moves_left-=1
    }
    move_left(){
        if (this.x>=1){
            this.x-=1
        } else {
            this.moves_left=0;
        }
        this.moves_left-=1
    }
    move_right(){
        if (this.x<this.grid.n-1){
            this.x+=1
        } else {
            this.moves_left=0;
        }
        this.moves_left-=1
    }
    eat_apple(apple){
        apple.x=int(random(0,this.grid.n));
        apple.y=int(random(0,this.grid.n));
    }

    think(apple){

        let inputs=[(this.x-apple.x)/this.grid.n,(this.y-apple.x)/this.grid.n];
        let output=this.brain.predict(inputs);
        let move=output.findIndex((ele)=> ele==Math.max(...output));
        //console.log(move);
        if (move==0){
            this.move_up();
        } else if (move==1){
            this.move_down();
        } else if (move==2){
            this.move_right();
        } else if (move==3){
            this.move_left();
        }
    }
    mutate(){
        this.brain.mutate(0.6);
    }
}