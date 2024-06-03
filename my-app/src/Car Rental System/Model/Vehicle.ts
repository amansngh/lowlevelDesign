class Vehicle{
    _vehicleType : VehicleType;
    _vNumber : string;
    _fuelType : FuelType;
    _fuelReading : string;

    constructor(vehicleType : VehicleType, vNumber : string, fuelType: FuelType, fuelReading : string)
    {
        this._vehicleType = vehicleType;
        this._vNumber = vNumber;
        this._fuelReading = fuelReading;
        this._fuelType = fuelType;
    }
}