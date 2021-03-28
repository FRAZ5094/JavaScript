class Apple{
    constructor(s,grid){
        this.x=s.x;
        this.y=s.y;
        this.grid=grid;
    }

    show(){
        fill("black");
        rect(this.x*this.grid.spacing,this.y*this.grid.spacing,this.grid.spacing,this.grid.spacing);
    }
}