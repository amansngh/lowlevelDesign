import ACoffeeDecorator from "./ACoffeeDecorator";
import ABaseCoffee from "./ABaseCoffee";

export default class Cream extends ACoffeeDecorator {
    
    constructor(baseCoffee : ABaseCoffee)
    {
        super(baseCoffee);
        this.strength =  this.baseCoffee.getStrength() + 0;
        this.cost = this.baseCoffee.getCost() + 5;
    }
}