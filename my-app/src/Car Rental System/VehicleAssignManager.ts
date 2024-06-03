class VehicleAssignManager{
    _idleVehicleDirectory : IdleVehicleDirectory;
    _busyVehicleDirectory : BusyVehicleDirectory;
    _reservationDirectory : ReservationDirectory;
    static _instance : VehicleAssignManager;

    constructor()
    {
        this._busyVehicleDirectory = BusyVehicleDirectory.instance();
        this._idleVehicleDirectory = IdleVehicleDirectory.instance();
        this._reservationDirectory = ReservationDirectory.instance();
    }

    static instance() : VehicleAssignManager{
        if(!this._instance)
            {
                this._instance = new VehicleAssignManager();
            }

        return this._instance;
    }

    listVehiclesByType(vehicleType: VehicleType) : IdleVehicle[]
    {
        var result = this._idleVehicleDirectory._idleVehicles.filter(id => id._vehicle._vehicleType == vehicleType && id._status == Status.idle);
        return result;
    }

    assignVehicle(vehicle : Vehicle, user : User)
    {
        this._idleVehicleDirectory._idleVehicles.filter(id => id._vehicle != vehicle);
        var entry = new BusyVehicle(vehicle, user);
        this._busyVehicleDirectory._busyVehicles.push(entry);
    }

    deAssignVehice(vehicle : Vehicle, storeId : string)
    {
        this._busyVehicleDirectory._busyVehicles.filter(bv => bv._vehicle != vehicle);
        var entry = new IdleVehicle(vehicle, storeId, Status.idle);
        this._idleVehicleDirectory._idleVehicles.push(entry);
    }

    makeReservation(user : User, vehicle : Vehicle, storeId : string) : string
    {
        var rD = new ReservationDetails(Math.random().toString(), user, vehicle, storeId);
        this._reservationDirectory._reservations.push(rD);
        this._idleVehicleDirectory._idleVehicles.forEach(id => {
            if(id._vehicle._vNumber == vehicle._vNumber)
                {
                    id._status = Status.reserved;
                }
        })

        return rD._id;
    }
}