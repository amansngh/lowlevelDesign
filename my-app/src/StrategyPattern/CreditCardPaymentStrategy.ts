export class CreditCardPaymentStrategy implements PaymentStrategy
{
    pay(amount : number) : string {
        const val = `pay ${amount} using CC payment strategy`;
        console.log(val);
        return val;
    }
}