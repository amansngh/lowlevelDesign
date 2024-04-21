import {ShoppingCart} from './ShoppingCart';
import {CreditCardPaymentStrategy} from './CreditCardPaymentStrategy';
import {UPIPaymentStrategy} from './UPIPaymentStrategy';

export default class Usage
{
    private paymentMethod : number;
    private shoppingCart : ShoppingCart;
    
    constructor(paymentMethod : number = 1)
    {
        if(paymentMethod == 1)
        {
            this.shoppingCart = new ShoppingCart(new CreditCardPaymentStrategy());
        }
        else
        {
            this.shoppingCart = new ShoppingCart(new UPIPaymentStrategy());
        }
    }

    public displayValue(amount : number) : string 
    {
        return this.shoppingCart.checkout(amount);
    }
}