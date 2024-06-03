class BusyVehicle {
    _vehicle : Vehicle;
    _assignedUser : User;
    _usageStartTime : Date;

    constructor(vehicle : Vehicle, assignedUser : User)
    {
        this._vehicle = vehicle;
        this._assignedUser = assignedUser;
        this._usageStartTime = new Date(Date.now());
    }
}