export class UPIPaymentStrategy implements PaymentStrategy
{
    pay(amount : number) : string {
        const val = `pay ${amount} usin UPI payment strategy`;
        console.log(val);
        return val;
    }
}