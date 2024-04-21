export class ShoppingCart {
    private paymentMethod : number;
    private paymentStrategy : PaymentStrategy;

    constructor(paymentStrategy : PaymentStrategy)
    {
        this.paymentStrategy = paymentStrategy;
    }

    public checkout(amount : number) : string
    {
        return this.paymentStrategy.pay(amount);
    }
}