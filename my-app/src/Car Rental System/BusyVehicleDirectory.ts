class BusyVehicleDirectory {
    _busyVehicles : BusyVehicle[];
    static _instance : BusyVehicleDirectory;

    private constructor()
    {
        this._busyVehicles = new Array<BusyVehicle>();
    }

    static instance() : BusyVehicleDirectory{
        if(!this._instance)
            {
                this._instance = new BusyVehicleDirectory();
            }

        return this._instance;
    }
}