class Perceptron{
    constructor(n){
        this.n=n
        this.weights=[];

        for (let i=0;i<this.n;i++){
            this.weights.push(random(-1,1));
        }
        //learning rate
        this.lr=0.02;
        
    }
    guess(inputs){
        let sum=0;
        for (let i=0;i<this.weights.length;i++){
            sum+=inputs[i]*this.weights[i];

        }
        return sign(sum);
    }
    train(inputs,target){
        let guess=this.guess(inputs);
        let error=target-guess;

        //tune all the weights
        for (let i=0;i<inputs.length;i++){
            this.weights[i]+=error*inputs[i]*this.lr;
        }
    }
    guessY(x){
        let w0=this.weights[0];
        let w1=this.weights[1];
        let w2=this.weights[2];
        return -(w2/w1) - (w0/w1)*x;
    }
}

//activation fucntion
function sign(n){
    if (n>=0){
        return 1;
    } else{
        return -1;
    }
}