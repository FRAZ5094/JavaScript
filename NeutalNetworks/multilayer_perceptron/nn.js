//activation function
function sigmoid(x){
    return 1/(1+Math.exp(-x));
}

class NeuralNetwork{
    constructor(input_nodes,hidden_nodes,output_nodes){
        this.input_nodes=input_nodes;
        this.hidden_nodes=hidden_nodes;
        this.output_nodes=output_nodes;

        this.weights_ih=new Matrix(this.hidden_nodes,this.input_nodes);
        this.weights_ho=new Matrix(this.output_nodes,this.hidden_nodes);
        this.weights_ih.randomize();
        this.weights_ho.randomize();

        this.bias_h=new Matrix(this.hidden_nodes,1);
        this.bias_o=new Matrix(this.output_nodes,1);
        this.bias_h.randomize();
        this.bias_o.randomize();
    }
    //guesses the output, by feeding the inputs through the network
    feedforward(input_array){

        let inputs= Matrix.fromArray(input_array);

        //hidden layer
        let hidden = Matrix.multiply(this.weights_ih,inputs);
        hidden.add(this.bias_h);
        //activation function
        hidden.map(sigmoid);


        //output layer
        let output= Matrix.multiply(this.weights_ho,hidden);
        output.add(this.bias_o);
        output.map(sigmoid);

        return output.toArray();
    }
    train(inputs,targets){
        //get predicted answer
        let outputs=this.feedforward(inputs);

        outputs=Matrix.fromArray(outputs);
        targets=Matrix.fromArray(targets);


        //calculate error
        let output_errors = Matrix.subtract(targets,outputs);

        //error can be found by the transpose of the weights matrix multipled by the errors
        let who_t=Matrix.transpose(this.weights_ho);
        let hidden_errors=Matrix.multiply(who_t,output_errors);


    }
}