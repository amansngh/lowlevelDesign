class ReservationDetails
{
    _id : string;
    _user : User;
    _vehicle : Vehicle;
    _storeId : string;
    _date : Date;

    constructor(id : string, user : User, vehicle : Vehicle, storeId : string)
    {
        this._id = id;
        this._user = user;
        this._vehicle = vehicle;
        this._storeId = storeId;
        this._date = new Date(Date.now());
    }
}