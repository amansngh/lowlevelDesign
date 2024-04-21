import ABaseCoffee from "./ABaseCoffee";

export default class Cappuchino extends ABaseCoffee{
    
    constructor()
    {
        super();
        this.strength =  5;
        this.cost = 20;
    }
}