class IdleVehicle{
    _vehicle : Vehicle;
    _storeid : string;
    _status : Status;

    constructor(vehicle : Vehicle, storeid : string, status : Status)
    {
        this._vehicle = vehicle;
        this._storeid = storeid;
        this._status = status;
    }
}