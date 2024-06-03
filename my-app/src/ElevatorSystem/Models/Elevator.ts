
class Elevator {
    private Enumber : number;
    private isFree : boolean;
    public _direction : Direction;

    constructor(en: number)
    {
        this.Enumber =  en;
        this.isFree = true;
    }

    public getEnumber() : number{
        return this.Enumber;
    }
}