export default class StockObservable implements IStockObservable{
    private item : number;
    private observers : IStockObserver[]; 

    constructor() {
        this.observers = new Array<IStockObserver>();
    }

    register(obj: IStockObserver) {
        this.observers.push(obj);
    }

    unregister(obj: IStockObserver) {
        this.observers.filter(item => item !== obj);
    }

    notify() : string[] {
        let output: string[] = [];
        this.observers.forEach(observer => {
            output.push(...observer.update());
        });

        return output;
    }

    setdata(data : number) : string[] {
        this.item = data;
        if(this.item >= 1)
        {
            return this.notify();
        }
    }

    getdata() : number{
        return this.item;
    }
}