import { VehicleType } from "./VehicleType";

export default class Ticket {
    private entryTime : Date;
    private vNumber : string;
    private vehicleType : VehicleType;
    private parkingSpaceId : string;

    constructor(entryTime : Date, vNumber : string, vehicleType : VehicleType, parkingSpaceId : string)
    {
        this.entryTime = entryTime;
        this.vNumber = vNumber;
        this.vehicleType = vehicleType;
        this.parkingSpaceId = parkingSpaceId;
    }

    getEntryTime() : Date{
        return this.entryTime;
    }

    getVNumber() : string {
        return this.vNumber;
    }

    getParkingSpaceId() : string{
        return this.parkingSpaceId;
    }

    getVehicleType() : VehicleType{
        return this.vehicleType;
    }
}