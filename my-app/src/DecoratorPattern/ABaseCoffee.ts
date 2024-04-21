export default abstract class ABaseCoffee{
    protected strength : number;
    protected cost : number;

    public getStrength() : number{
        return this.strength;
    }

    public getCost() : number {
        return this.cost;
    }
}