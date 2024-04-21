interface IStockObservable
{
    register(obj : IStockObserver) : any;
    unregister(obj : IStockObserver) : any;
    notify() : any;
    setdata(data : number) : any;
    getdata() : number;
}