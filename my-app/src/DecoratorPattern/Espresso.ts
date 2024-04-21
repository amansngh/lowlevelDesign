import ABaseCoffee from "./ABaseCoffee";

export default class Espresso extends ABaseCoffee{
    
    constructor()
    {
        super();
        this.strength =  15;
        this.cost = 10;
    }
}