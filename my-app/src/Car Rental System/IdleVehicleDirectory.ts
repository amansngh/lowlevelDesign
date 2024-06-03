class IdleVehicleDirectory{
    _idleVehicles : IdleVehicle[];
    static _instance : IdleVehicleDirectory;

    private constructor()
    {
        this._idleVehicles = new Array<IdleVehicle>();
    }

    static instance() : IdleVehicleDirectory{
        if(!this._instance)
            {
                this._instance = new IdleVehicleDirectory();
            }

        return this._instance;
    }

}