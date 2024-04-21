import { VehicleType } from "./VehicleType";
export default class Vehicle {
    private vnumber: string;
    private vehicleType : VehicleType;

    constructor(vnumber : string, vehicleType : VehicleType)
    {
        this.vnumber = vnumber;
        this.vehicleType = vehicleType;
    }

    getVehicleNumber() : string {
        return this.vnumber;
    }

    getVehicleType() : VehicleType{
        return this.vehicleType;
    }
}