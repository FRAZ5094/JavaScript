class Grid{
    constructor(w,n){
        this.w=w;
        this.n=n;

        this.spacing=this.w/this.n;

    }
    show(){
        stroke(0);
        for (let i=0;i<this.n+1;i++){
            //lines in x
            line(i*this.spacing,0,i*this.spacing,this.w);
            //lines in y
            line(0,i*this.spacing,this.w,i*this.spacing);
        }
    }
}