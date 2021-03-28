class Player{

    constructor(s,grid){
        this.x=s.x;
        this.y=s.y;
        this.color=color(random(255),random(255),random(255));
        this.grid=grid;
        this.score=0;
    }
    show(){
        fill(this.color);
        rect(this.x*this.grid.spacing,this.y*this.grid.spacing,this.grid.spacing,this.grid.spacing);
    }
    move_down(){
        if (this.y<this.grid.n-1){
            this.y+=1
        }
    }
    move_up(){
        if (this.y>=1){
            this.y-=1
        }
    }
    move_left(){
        if (this.x>=1){
            this.x-=1
        }
    }
    move_right(){
        if (this.x<this.grid.n-1){
            this.x+=1
        }
    }
    eat_apple(apple){
        apple.x=int(random(0,this.grid.n));
        apple.y=int(random(0,this.grid.n));
        this.score+=1
    }
}