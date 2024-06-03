class Bill {
    _user : User;
    _vehicle : Vehicle;
    _amount : number;

    constructor(user : User, vehicle : Vehicle , amount : number){
        this._user = user;
        this._amount = amount;
        this._vehicle = vehicle;
    }
}