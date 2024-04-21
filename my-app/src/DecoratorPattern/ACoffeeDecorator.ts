import ABaseCoffee from "./ABaseCoffee";

export default abstract class ACoffeeDecorator extends ABaseCoffee {
    protected baseCoffee : ABaseCoffee;

    constructor(baseCoffee : ABaseCoffee)
    {
        super();
        this.baseCoffee = baseCoffee;
    }
}